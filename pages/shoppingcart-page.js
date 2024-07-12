export default class ShoppingCartPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page
        this.proceedToCheckout = page.locator(`button[data-role='proceed-to-checkout']`)
        this.loadingMask = page.locator('div.cart-totals div.loader')
    }

    async goToCheckOutPage() {
        await this.page.waitForLoadState()
        await this.loadingMask.waitFor({ state: 'attached' })
        await this.loadingMask.waitFor({ state: 'detached' })
        await this.proceedToCheckout.click()
    }
}
