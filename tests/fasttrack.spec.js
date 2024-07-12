import { test } from '@playwright/test'
import LoginPage from '../pages/login-page.js'
import HomePage from '../pages/home-page.js'
import ProductListPage from '../pages/productlist-page.js'
test('login', async ({ page }) => {
    let loginPage = new LoginPage(page)
    let homePage = new HomePage(page)
    let productListPage = new ProductListPage(page)
    await homePage.goToHomePage()
    await homePage.acceptCookie()
    await homePage.goToLoginPage()
    await loginPage.login('fasttrack.automation+customer@gmail.com', 'Abcd@123')
    await homePage.goToProductListPage('Outlets', 'Auto Outlets')
    await productListPage.addProductToCart('autosimple.html')
})
