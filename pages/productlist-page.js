export default class ProductListPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page

        this.productItem = (productSeo) => {
            const itemLocator = page.locator(
                `//div[@class='product details product-item-details']//a[contains(@href, '${productSeo}')]//ancestor::div[@class='product-item-info']`
            )
            this.addToCart = itemLocator.locator(
                "//button[@class='action tocart primary']"
            )
            return itemLocator // Trả về itemLocator như trước
        }
    }

    async addProductToCart(productSeo) {
        await this.page.waitForLoadState()
        await this.productItem(productSeo).hover()
        await this.addToCart.click()
    }
}
