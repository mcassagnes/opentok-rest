/* eslint-env jasmine */

const jwt = require('jsonwebtoken')
const TokenGenerator = require('../lib/token_generator')

describe('TokenGenerator module', function () {
  const key = 'key'
  const secret = 'secret'
  let generator = null

  beforeEach(function () {
    generator = new TokenGenerator(key, secret)
  })

  describe('generate', function () {
    it('Should return a signed token ', function () {
      const token = generator.generate()
      const decoded = jwt.verify(token, secret)
      expect(decoded.iss).toEqual(key)
    })
  })
})
