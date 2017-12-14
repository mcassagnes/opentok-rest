/* eslint-env jasmine */

const OpenTokRequest = require('../lib/request')
const TokenGenerator = require('../lib/token_generator')
const nock = require('nock')

describe('OpenTokRequest module', function () {
  let request = null
  const options = {
    type: 'post',
    endpoint: 'test',
    body: {}
  }

  beforeEach(function () {
    request = new OpenTokRequest(options)
  })

  describe('constructor', function () {
    it('Should set the baseUrl', function () {
      expect(request.baseUrl).toEqual('https://api.opentok.com/v2/project')
    })

    it('Should set the options', function () {
      expect(request.options).toEqual(options)
    })
  })

  describe('authenticate', function () {
    const auth = {
      key: 'key',
      secret: 'secret'
    }

    it('should set the auth property', function () {
      request.authenticate(auth)
      expect(request.auth).toEqual(auth)
    })

    it('instantiates a new token generator', function () {
      request.authenticate(auth)
      expect(request.tokenGenerator instanceof TokenGenerator).toEqual(true)
    })
  })

  describe('headers', function () {
    const auth = {
      key: 'key',
      secret: 'secret'
    }
    it('Should return the request headers with the auth token', function () {
      request.authenticate(auth)
      expect(request.headers['X-OPENTOK-AUTH']).toBeDefined()
    })
  })

  describe('endpoint', function () {
    const auth = {
      key: 'key',
      secret: 'secret'
    }
    it('Should return the request headers with the auth token', function () {
      request.authenticate(auth)
      expect(request.endpoint).toEqual(`${request.baseUrl}/${auth.key}/${options.endpoint}`)
    })
  })

  describe('send', function () {
    const auth = {
      key: 'key',
      secret: 'secret'
    }

    it('should send a request to the backend', function () {
      nock('https://api.opentok.com', {
        reqHeaders: { 'X-OPENTOK-AUTH': jasmine.any(String) }
      }).post(`/v2/project/${auth.key}/test`)
        .reply(200, {message: 'ok'})

      request.authenticate(auth)
      return request.send().then((resp) => {
        expect(resp).toEqual({message: 'ok'})
      })
    })
  })
})
