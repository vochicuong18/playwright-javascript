import { test, expect } from '../ultis/fixtures.js'
import { user } from '../ultis/data-helper.js'
const invalidEmails = ['Cuong', 'abc', 'abc@example', 'abc@example.c']
const errorMessage = {
    invalidEmail: `Please enter a valid email address (Ex: johndoe@domain.com).`,
    loginError: `The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later1.`,
    requiredField: `This is a required field.`,
}
test.describe('Check login', () => {
    test.beforeEach(async ({ homePage }) => {
        await homePage.goToHomePage()
        await homePage.acceptCookie()
        await homePage.goToLoginPage()
    })

    invalidEmails.forEach((invalidEmail) => {
        test(`Check invalid email: ${invalidEmail}`, async ({ loginPage }) => {
            await loginPage.fillUserName(invalidEmail)
            await loginPage.fillPassword(user.password)
            await loginPage.clickSubmit()
            await expect.soft(loginPage.emailErrorMessage).toHaveText(errorMessage.invalidEmail)
        })
    })

    test('Check invalid password', async ({ loginPage }) => {
        await loginPage.fillUserName(user.email)
        await loginPage.fillPassword('Cuong')
        await loginPage.clickSubmit()
        await expect.soft(loginPage.errorMessage).toHaveText(errorMessage.loginError)
    })
    test('Check empty data', async ({ loginPage }) => {
        await loginPage.clickSubmit()
        await expect.soft(loginPage.emailErrorMessage).toHaveText(errorMessage.requiredField)
        await expect.soft(loginPage.passErrorMessage).toHaveText(errorMessage.requiredField)
    })

    test('Check empty email', async ({ loginPage }) => {
        await loginPage.fillPassword(user.password)
        await loginPage.clickSubmit()
        await expect.soft(loginPage.emailErrorMessage).toHaveText(errorMessage.requiredField)
        await expect.soft(loginPage.passErrorMessage).not.toBeAttached()
    })

    test('Check empty password', async ({ loginPage }) => {
        await loginPage.fillUserName(user.email)
        await loginPage.clickSubmit()
        await expect.soft(loginPage.emailErrorMessage).not.toBeAttached()
        await expect.soft(loginPage.passErrorMessage).toHaveText(errorMessage.requiredField)
    })

    test('Check login success', async ({ loginPage, myAccountPage }) => {
        await loginPage.fillUserName(user.email)
        await loginPage.fillPassword(user.password)
        await loginPage.clickSubmit()
        await expect.soft(myAccountPage.email, 'Check customer email logged in successfully').toContainText(user.email)
    })

    test('Check login with case-sensitive email', async ({ loginPage, myAccountPage }) => {
        await loginPage.fillUserName(user.email.toUpperCase()) // Chuyển email thành chữ hoa
        await loginPage.fillPassword(user.password)
        await loginPage.clickSubmit()
        await expect.soft(myAccountPage.email, 'Check customer email logged in successfully').toContainText(user.email)
    })
})
