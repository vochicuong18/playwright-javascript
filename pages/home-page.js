export default class HomePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page
        this.signIn = page.locator("div.header a[href*='login']")
        this.acceptAllCookie = page.locator(
            'button.amgdprcookie-button.-allow.-save'
        )
        this.category = (categoryName) => {
            return page.locator(
                `//span[text()='${categoryName}']//ancestor::li`
            )
        }
        this.subCategory = (subName) => {
            return page.locator(`//span[text()='${subName}']`)
        }
    }
    async goToProductListPage(categoryName, subName) {
        await this.page.waitForLoadState()
        await this.category(categoryName).hover()
        await this.subCategory(subName).click()
    }

    async goToHomePage() {
        await this.page.goto('https://fasttrack.cloud.bluecomvn.com/')
    }

    async acceptCookie() {
        await this.acceptAllCookie.click()
    }

    async goToLoginPage() {
        await this.signIn.click()
    }
}
