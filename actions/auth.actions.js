const { LoginPage } = require('../pages/auth/LoginPage')
const { DashboardPage } = require('../pages/dashboard/DashboardPage')
const { expect } = require('@playwright/test')

class AuthActions {
  constructor(page) {
    this.page = page
    this.loginPage = new LoginPage(page)
    this.dashboardPage = new DashboardPage(page)
  }

  async loginAsAdmin() {
    await this.loginPage.navigate()
    await this.loginPage.login(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    await expect(this.page).toHaveURL(/\/dashboard/)
  }

  async assertOnLoginPage() {
    await expect(this.page).toHaveURL(/\/login/)
  }

  async logout() {
    await this.dashboardPage.logout()
    await expect(this.page).toHaveURL(/\/login/)
  }
}

module.exports = { AuthActions }
