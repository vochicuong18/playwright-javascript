import { test as base, expect } from '@playwright/test'
import HomePage from '../pages/home-page.js'
import LoginPage from '../pages/login-page.js'
import ProductListPage from '../pages/productlist-page.js'
import ShoppingCartPage from '../pages/shoppingcart-page.js'
import CheckoutPage from '../pages/checkout-page.js'
import MyAccountPage from '../pages/myaccount-page.js'
import HeaderPage from '../pages/header-page.js'
export const test = base.test.extend({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page))
    },
    productListPage: async ({ page }, use) => {
        await use(new ProductListPage(page))
    },
    shoppingCartPage: async ({ page }, use) => {
        await use(new ShoppingCartPage(page))
    },
    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page))
    },
    myAccountPage: async ({page}, use) => {
      await use(new MyAccountPage(page))
    },
    headerPage: async ({page}, use) => {
      await use(new HeaderPage(page))
    }
})
export {expect}
