import { test, expect } from '../ultis/fixtures.js'
import { product, user } from '../ultis/data-helper.js'
test('login', async ({headerPage, loginPage, homePage, myAccountPage, productListPage, shoppingCartPage, checkoutPage }) => {
    await homePage.goToHomePage()
    await homePage.acceptCookie()
    await headerPage.goToLoginPage()
    await loginPage.login(user)
    await expect.soft(myAccountPage.email, `Check customer email loggin successfully`).toContainText(user.email)
    await headerPage.emptyCart()
    // await homePage.goToProductListPage(product)
    // await productListPage.addProductToCart(product)
    // await homePage.goToShoppingCart()
    // await shoppingCartPage.goToCheckOutPage()
    // await checkoutPage.selectShippingMethod('Free Shipping')
    // await checkoutPage.selectPaymentMethod('cashondelivery')
    // await checkoutPage.checkout()
})
