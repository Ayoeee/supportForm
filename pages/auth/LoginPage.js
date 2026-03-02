const { BasePage } = require('../base/BasePage')
const { expect } = require('@playwright/test')

class LoginPage extends BasePage {
  constructor(page) {
    super(page)
    this.emailInput = page.getByRole('textbox', { name: 'Enter your email' })
    this.passwordInput = page.getByRole('textbox', { name: 'Enter your PIN' })
    this.loginButton = page.getByRole('button', { name: 'Log In' })
  }

  async login(email, password) {
    await this.emailInput.fill(email)
    await this.passwordInput.fill(password)
    await this.loginButton.click()
  }


}

module.exports = { LoginPage }
