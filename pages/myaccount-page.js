export default class MyAccountPage {
        /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page
        this.email = page.locator(`div.box-information div.box-content`)
    }
}