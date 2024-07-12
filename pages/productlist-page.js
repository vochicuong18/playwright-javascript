export default class ProductListPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page
        this.productItem = (url) => {
            const itemLocator = page.locator(
                `//div[@class='product details product-item-details']//a[contains(@href, '${url}')]//ancestor::div[@class='product-item-info']`
            )
            this.addToCart = itemLocator.locator(
                "//button[@class='action tocart primary']"
            )
            return itemLocator
        }
        this.successMessage = page.locator(`div.page.messages div.success`)
    }

    async addProductToCart(Product) {
        await this.page.waitForLoadState()
        await this.productItem(Product.url).hover()
        await this.addToCart.click()
        await this.successMessage.waitFor({ state: 'attached' })
    }
}
