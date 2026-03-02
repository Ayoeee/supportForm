function generateAssociateName() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  let name = 'Associate_'
  for (let i = 0; i < 8; i++) {
    name += letters.charAt(Math.floor(Math.random() * letters.length))
  }
  return name
}

function generateEmail() {
  return `user${Date.now()}@test.com`
}

module.exports = { generateAssociateName, generateEmail }
