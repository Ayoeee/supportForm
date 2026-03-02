const { BasePage } = require('../base/BasePage')
const { expect } = require('@playwright/test')
import { generateAssociateName } from '../../utils/data-generator'
const path = require('path')

class DashboardPage extends BasePage {
  constructor(page) {
    super(page)
    this.url = '.'
    this.emailInputField = page.getByRole('textbox', { name: 'Email' })
    this.issueTypeDropdown = page.getByRole('combobox', {
      name: /type of support request/i,
    })

    this.uploadIcon = page.locator('input[type="file"]')
    this.whatWeCanHelpWithInputField = page.getByRole('textbox', {
      name: 'What can we help with?',
    })
    this.submitButton = page.getByRole('button', { name: 'Submit' })
  }

  async open() {
    await this.navigate(this.url)
  }

  async fillSupportFormWithoutUploadForBugRelatedIssues() {
    await this.page.setViewportSize({ width: 1920, height: 624 })

    this.associateName = generateAssociateName()

    await this.emailInputField.fill(this.associateName + '@kinship.com')

    await this.issueTypeDropdown.click()

    await this.issueTypeDropdown.fill('Bug')
    await this.issueTypeDropdown.press('Enter')

    //For upload in debug
    // const filePath = path.resolve(
    //   __dirname,
    //   '../../tests/fixtures/test-image.jpeg',
    // )

    // await this.uploadIcon.setInputFiles(filePath)

    await this.whatWeCanHelpWithInputField.fill(
      'This is an automated test issue description - testing text without upload, please ignore ⚠️ © Ayo.',
    )

    await this.submitButton.click()
    console.log('Support form submitted without upload for bug-related issues.')
  }
}

module.exports = { DashboardPage }
