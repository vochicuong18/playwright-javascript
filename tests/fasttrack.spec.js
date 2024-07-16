import { test, expect } from '../ultis/fixtures.js'
import { product, user } from '../ultis/data-helper.js'
import { paymentMethod } from '../entities/payment.js'
import { shippingMethod } from '../entities/shipping.js'
test('User can complete checkout flow', async ({ headerPage, loginPage, homePage, myAccountPage, productListPage, shoppingCartPage, checkoutPage }) => {
    await homePage.goToHomePage()
    await homePage.acceptCookie()
    await headerPage.goToLoginPage()
    await loginPage.login(user)
    await expect.soft(myAccountPage.email, 'Check customer email logged in successfully').toContainText(user.email)
    await homePage.goToProductListPage(product)
    await productListPage.addProductToCart(product)
    await headerPage.goToShoppingCart()
    await shoppingCartPage.goToCheckOutPage()
    await checkoutPage.selectShippingMethod(shippingMethod.freeShipping)
    await checkoutPage.selectPaymentMethod(paymentMethod.cashOnDelivery)
    await checkoutPage.checkout()
})
