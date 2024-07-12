import { test } from '@playwright/test'
import LoginPage from '../pages/login-page.js'
import HomePage from '../pages/home-page.js'
import ProductListPage from '../pages/productlist-page.js'
import ShoppingCartPage from '../pages/shoppingcart-page.js'
import CheckoutPage from '../pages/checkout-page.js'
import { product, user } from '../ultis/data-helper.js'
test('login', async ({ page }) => {
    let loginPage = new LoginPage(page)
    let homePage = new HomePage(page)
    let productListPage = new ProductListPage(page)
    let shoppingCartPage = new ShoppingCartPage(page)
    let checkoutPage = new CheckoutPage(page)
    await homePage.goToHomePage()
    await homePage.acceptCookie()
    await homePage.goToLoginPage()
    await loginPage.login(user)
    await homePage.goToProductListPage(product)
    await productListPage.addProductToCart(product)
    await homePage.goToShoppingCart()
    await shoppingCartPage.goToCheckOutPage()
    await checkoutPage.selectShippingMethod('Free Shipping')
    await checkoutPage.selectPaymentMethod('cashondelivery')
    await checkoutPage.checkout()

})
