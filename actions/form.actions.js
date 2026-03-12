const { DashboardPage } = require('../pages/dashboard/DashboardPage')

const { expect } = require('@playwright/test')

class FormActions {
  constructor(page) {
    this.page = page
    this.dashboardPage = new DashboardPage(page)
  }

  async fillSupportFormWithoutUploadForBugRelatedIssues() {
    await this.dashboardPage.open()
    await this.dashboardPage.fillFormWithoutAnImage()
  }
}

module.exports = { FormActions }
