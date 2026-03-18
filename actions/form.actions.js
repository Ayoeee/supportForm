const { DashboardPage } = require('../pages/dashboard/DashboardPage')

const { expect } = require('@playwright/test')

class FormActions {
  constructor(page) {
    this.page = page
    this.dashboardPage = new DashboardPage(page)
  }

  async fillFormWithSomethingIsNotExpected() {
    await this.dashboardPage.open()
    await this.dashboardPage.fillFormWithSomethingIsNotExpected()
    await this.dashboardPage.assertFormSubmition()
  }

  async fillFormWithIhaveAQuestion() {
    await this.dashboardPage.open()
    await this.dashboardPage.fillFormWithIhaveAQuestion()
    await this.dashboardPage.assertFormSubmitionForIhaveAQuestion()
  }
}

module.exports = { FormActions }
