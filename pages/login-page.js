export default class LoginPage {
    constructor(page) {
        this.page = page
        this.email = page.locator('#email')
        this.password = page.locator("//fieldset[@class='fieldset login']//input[@id='pass']")
        this.submit = page.locator("//fieldset[@class='fieldset login']//button[@id='send2']")
    }

    async login(User) {
        await this.email.fill(User.email)
        await this.password.fill(User.password)
        await this.submit.click()
    }
}
