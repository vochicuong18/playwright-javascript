export default class HomePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page
        this.acceptAllCookie = page.locator('button.amgdprcookie-button.-allow.-save')
        this.category = (categoryName) => {
            return page.locator(`//span[text()='${categoryName}']//ancestor::li`)
        }
        this.subCategory = (subName) => {
            return page.locator(`//span[text()='${subName}']`)
        }
        this.cartIcon = page.locator(`a.showcart`)
        this.viewShoppingCart = page.locator(`a.action.viewcart`)
    }
    async goToProductListPage(Product) {
        await this.page.waitForLoadState()
        await this.category(Product.category).hover()
        await this.subCategory(Product.subCategory).click()
    }

    async goToHomePage() {
        await this.page.goto('https://fasttrack.cloud.bluecomvn.com/')
    }

    async acceptCookie() {
        await this.acceptAllCookie.click()
    }
}
