/* eslint-env jasmine */

const nock = require('nock')

describe('Opentok module', function () {
  it('Should export a class', function () {
    const opentok = require('../lib/opentok.js')
    expect(typeof opentok).toEqual('function')
  })

  describe('rawRequest', function () {
    const Opentok = require('../lib/opentok.js')

    it('should expose a rawRequest method', function () {
      const opentok = new Opentok('api-key-1', 'api-sec-1')
      expect(typeof opentok.rawRequest).toEqual('function')
    })

    it('should make a request to the endpoint', function () {
      const apiKey = 'api-key-1'

      const opentok = new Opentok(apiKey, 'api-sec-1')
      nock('https://clifton.wobbals.com', {
        reqHeaders: {
          'X-OPENTOK-AUTH': jasmine.any(String)
        }
      }).get(`/v1/project/${apiKey}/session/session-id-1`)
        .reply(200, {projectId: apiKey, sessionId: 'session-id-1'})

      return opentok.rawRequest({
        method: 'GET',
        baseUrl: 'https://clifton.wobbals.com/v1/project',
        endpoint: 'session/session-id-1'
      }).then((resp) => {
        expect(resp).toEqual({projectId: apiKey, sessionId: 'session-id-1'})
      })
    })
  })
})
