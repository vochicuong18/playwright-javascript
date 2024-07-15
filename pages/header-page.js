import {expect} from '@playwright/test'
export default class HeaderPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page
        this.signIn = page.locator("div.header a[href*='login']")
        this.cartIcon = page.locator(`a.showcart`)
        this.viewShoppingCart = page.locator(`a.action.viewcart`)
        this.count = page.locator(`div.header span.counter.qty`)
    }
    async goToLoginPage() {
        await this.signIn.click()
    }

    async goToShoppingCart(){
        await this.cartIcon.click()
        await this.viewShoppingCart.click()
    }

    async emptyCart(){
        await this.page.waitForLoadState()
        await this.page.waitForTimeout(5000)
        if(await this.count.getAttribute('class') !== 'counter qty empty') {
            await this.goToShoppingCart()
        }
    }
}