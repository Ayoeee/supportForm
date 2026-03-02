const { test: base, expect } = require('@playwright/test')
const { FormActions } = require('../actions/form.actions')

exports.test = base.extend({
  fillSupportFormFlow: async ({ page }, use) => {
    await use(new FormActions(page))
  },
})

exports.expect = expect
