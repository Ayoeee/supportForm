const { BasePage } = require('../base/BasePage')
const { expect } = require('@playwright/test')
import { generateAssociateName } from '../../utils/data-generator'

class DashboardPage extends BasePage {
  constructor(page) {
    super(page)

    this.url = '.'

    this.form = page.locator('form').first()

    this.emailInputField = this.form.getByRole('textbox', { name: 'Email' })

    this.selectRequestDropdown = this.form.locator('.styled-select__control')

    this.dropdownMenu = page.locator('.styled-select__menu')
    this.dropdownOption_NotWorking = page.locator('.styled-select__option', {
      hasText: "Something isn't working as expected",
    })
    this.descriptionTextArea = page.getByRole('textbox', {
      name: 'What can we help with?',
    })

    this.submitBtn = page.getByRole('button', { name: 'Submit' })
  }

  async open() {
    await this.navigate(this.url)
  }

  async fillFormWithoutAnImage() {
    const email = generateAssociateName() + '@kinship.co'
    await this.emailInputField.fill(email)
    await expect(this.emailInputField).toHaveValue(/@kinship\.co$/)
    console.log(`✅ Email successfully filled with: ${email}`)

    // scroll into view and click — ensures element is visible before interacting
    await this.selectRequestDropdown.scrollIntoViewIfNeeded()
    await this.selectRequestDropdown.click({ force: true })
    await this.dropdownMenu.waitFor({ state: 'visible', timeout: 20000 })
    await expect(this.dropdownOption_NotWorking).toBeVisible()
    console.log('✅ Request type dropdown options are visible')

    await this.dropdownOption_NotWorking.click()
    await expect(this.page.locator('.styled-select__single-value')).toHaveText(
      "Something isn't working as expected",
    )
    console.log("✅ Request type selected: Something isn't working as expected")

    await this.descriptionTextArea.fill(
      'This is a test description for something that is not working as expected. please ignore ⚠️ Ayo',
    )
    await expect(this.descriptionTextArea).toHaveValue(
      'This is a test description for something that is not working as expected. please ignore ⚠️ Ayo',
    )
    console.log('✅ Description text area successfully filled')

    await expect(this.submitBtn).toBeEnabled()
    console.log('✅ Submit button is enabled and ready for interaction')

    await this.submitBtn.click()
    console.log('✅ Submit button clicked, form submitted')
  }
}

module.exports = { DashboardPage }
