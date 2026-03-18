const { BasePage } = require('../base/BasePage')
const { expect } = require('@playwright/test')
import { generateAssociateName } from '../../utils/data-generator'

class DashboardPage extends BasePage {
  constructor(page) {
    super(page)

    this.url = '.'

    // elements
    this.emailField = page.getByRole('textbox', { name: 'Email' })
    this.dropdownTrigger = page.getByRole('combobox', {
      name: 'Type of support request',
    })

    this.somethingIsNotworkingDropdown = page.getByRole('option', {
      name: "Something isn't working as",
    })

    this.iHaveAQuestionDropdown = page.getByRole('option', {
      name: 'I have a question',
    })

    this.dropdown = this.descriptionField = page.getByRole('textbox', {
      name: 'What can we help with?',
    })
    this.submitBtn = page.getByRole('button', { name: 'Submit' })

    // success page elements
    this.successMessage = page.getByText('Submission Received')
    this.successText = page.getByText('Thank you for your submission!')
    this.submitAnotherBtn = page.getByRole('button', {
      name: 'Submit Another Request',
    })
  }

  async open() {
    await this.navigate(this.url)
  }

  async fillFormWithSomethingIsNotExpected() {
    await this.page.waitForLoadState('networkidle')

    // dynamic email
    const email = `${generateAssociateName()}@kinship.co`
    await this.emailField.fill(email)
    await expect(this.emailField).toHaveValue(email)

    // open dropdown
    await this.dropdownTrigger.scrollIntoViewIfNeeded()
    await this.dropdownTrigger.focus()
    await this.dropdownTrigger.click({ force: true })
    await this.somethingIsNotworkingDropdown.click()

    // description text
    const descriptionText =
      '⚠️ This is an automated test for the something is not working dropdown implemented, please ignore⚠️ - Ayo'
    await this.descriptionField.fill(descriptionText)
    await expect(this.descriptionField).toHaveValue(descriptionText)

    // submit
    await this.submitBtn.scrollIntoViewIfNeeded()
    await expect(this.submitBtn).toBeEnabled()
    await this.submitBtn.click()
  }

  async assertFormSubmition() {
    // success validation
    await expect(this.successMessage).toBeVisible({ timeout: 10000 })
    await expect(this.successText).toBeVisible()
    await expect(this.submitAnotherBtn).toBeVisible()
    console.log(
      'User has filled complaint form successfully using the Something isnt working well topic',
    )
  }

  async fillFormWithIhaveAQuestion() {
    await this.page.waitForLoadState('networkidle')

    // dynamic email
    const email = `${generateAssociateName()}@kinship.co`
    await this.emailField.fill(email)
    await expect(this.emailField).toHaveValue(email)

    // open dropdown
    await this.dropdownTrigger.scrollIntoViewIfNeeded()
    await this.dropdownTrigger.focus()
    await this.dropdownTrigger.click({ force: true })
    await this.iHaveAQuestionDropdown.click()

    // description text
    const descriptionText =
      '⚠️ This is an automated test for the i have a new question dropdown implemented, please ignore⚠️ - Ayo'
    await this.descriptionField.fill(descriptionText)
    await expect(this.descriptionField).toHaveValue(descriptionText)

    // submit
    await this.submitBtn.scrollIntoViewIfNeeded()
    await expect(this.submitBtn).toBeEnabled()
    await this.submitBtn.click()
  }

  async assertFormSubmitionForIhaveAQuestion() {
    // success validation
    await expect(this.successMessage).toBeVisible({ timeout: 10000 })
    await expect(this.successText).toBeVisible()
    await expect(this.submitAnotherBtn).toBeVisible()
    console.log(
      'User has filled complaint form successfully using the I have a question topic',
    )
  }
}

module.exports = { DashboardPage }
