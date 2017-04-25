/* eslint-env jasmine */

const OpenTokResource = require('../lib/resource')
const OpenTok = require('../lib/opentok')
const OpenTokRequest = require('../lib/request')

describe('Resource module', function () {
  describe('generate', function () {
    const key = 'key'
    const secret = 'secret'
    let resource = null

    beforeEach(function () {
      const opentok = new OpenTok(key, secret)
      resource = new OpenTokResource(opentok)
    })

    it('Should return an authenticated OpenTokRequest ', function () {
      const request = resource.generate()
      expect(request instanceof OpenTokRequest).toEqual(true)
      expect(request.auth.key).toEqual(key)
      expect(request.auth.secret).toEqual(secret)
    })
  })
})
