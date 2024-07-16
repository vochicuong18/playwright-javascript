export default class LoginPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page
        this.email = page.locator('#email')
        this.password = page.locator("//fieldset[@class='fieldset login']//input[@id='pass']")
        this.submit = page.locator("//fieldset[@class='fieldset login']//button[@id='send2']")
        this.emailErrorMessage = page.locator(`#email-error`)
        this.passErrorMessage = page.locator(`#pass-error`)
        this.errorMessage = page.locator(`div.message-error.error.message`)
    }

    async login(user) {
        await this.fillUserName(user.email)
        await this.fillPassword(user.password)
        await this.clickSubmit()
    }

    async fillUserName(userName) {
        await this.email.clear()
        await this.email.fill(userName)
    }

    async fillPassword(pass) {
        await this.password.clear()
        await this.password.fill(pass)
    }

    async clickSubmit() {
        await this.submit.click()
    }
}
