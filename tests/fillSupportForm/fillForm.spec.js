const { test, expect } = require('../../fixtures/test-fixtures')

test('Associates can fill support form with Something Is Not Expected Topic', async ({
  fillSupportFormFlow,
}) => {
  await fillSupportFormFlow.fillFormWithSomethingIsNotExpected()
})

test('Associates can fill support form with I have A Question Topic', async ({
  fillSupportFormFlow,
}) => {
  await fillSupportFormFlow.fillFormWithIhaveAQuestion()
})

test('Associates can fill support form with I have A Feedback Topic', async ({
  fillSupportFormFlow,
}) => {
  await fillSupportFormFlow.fillFormWithIhaveFeedback()
})
