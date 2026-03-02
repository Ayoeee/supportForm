const { test, expect } = require('../../fixtures/test-fixtures')

test('Associates can fill support form', async ({ fillSupportFormFlow }) => {
  await fillSupportFormFlow.fillSupportFormWithoutUploadForBugRelatedIssues()
  // await fillSupportFormFlow.assertAssociateCreation()
  // await fillSupportFormFlow.deleteAssociate()
  // await fillSupportFormFlow.assertAssociateDeletion()
})
