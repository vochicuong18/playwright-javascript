export default class LoginPage {
    constructor(page) {
        this.page = page
        this.email = page.locator('#email')
        this.password = page.locator(
            "//fieldset[@class='fieldset login']//input[@id='pass']"
        )
        this.submit = page.locator(
            "//fieldset[@class='fieldset login']//button[@id='send2']"
        )
    }

    async login(username, pass) {
        await this.email.fill(username)
        await this.password.fill(pass)
        await this.submit.click()
    }
}
