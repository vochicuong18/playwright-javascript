export default class CheckoutPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page
        this.checkoutButton = page.locator(
            "button.checkout.amasty[title='Place Order']"
        )
        this.loadingMask = page.locator('#checkout-loader')
        this.bodyLoadingMask = page.locator("//body/div[@class='loading-mask']")
        this.acceptPolicyCheckbox = page.locator(
            '._active .payment-method-content .checkout-agreements-block label'
        )
        this.shippingMethod = (shippingMethod) => {
            return page.locator(`//tr[td[text()='${shippingMethod}']]`)
        }
        this.paymentMethod = (paymentMethod) => {
            return page.locator(`//label[@for='${paymentMethod}']/parent::div`)
        }
    }

    async selectShippingMethod(shippingMethod) {
        await this.loadingMask.waitFor({ state: 'attached' })
        await this.loadingMask.waitFor({ state: 'detached' })
        await this.shippingMethod(shippingMethod).click()
    }

    async selectPaymentMethod(paymentMethod) {
        await this.paymentMethod(paymentMethod).click()
        await this.bodyLoadingMask.waitFor({ state: 'hidden' })
    }

    async checkout(){
        await this.acceptPolicyCheckbox.click()
        await this.checkoutButton.highlight()
    }
}
