/* eslint-env jasmine */

const Session = require('../../lib/resources/session')
const Opentok = require('../../lib/opentok')
const nock = require('nock')

describe('Session', function () {
  let session
  const apiKey = 'api-key-1'
  const tokboxApiHost = 'https://api.opentok.com'

  beforeEach(() => {
    const opentok = new Opentok(apiKey, 'api-secret-1')
    session = new Session(opentok)
  })

  describe('setStreamClasses', () => {
    it('should make the right request to the tokbox api', () => {
      const sessionId = 'session-id-1'
      const streams = [
        {id: 'stream-id-1', layoutClassList: ['focused']}
      ]

      nock(tokboxApiHost, {
        reqHeaders: { 'X-OPENTOK-AUTH': jasmine.any(String) }
      })
      .put(`/v2/project/${apiKey}/session/${sessionId}/stream`, {
        items: streams
      })
      .reply(200, {message: 'ok'})

      return session.setStreamClasses(sessionId, {items: streams}).then((resp) => {
        expect(resp).toEqual({message: 'ok'})
      })
    })
  })

  describe('getStreamClasses', () => {
    it('should make the right request to the tokbox api', () => {
      const sessionId = 'session-id-1'

      nock(tokboxApiHost, {
        reqHeaders: { 'X-OPENTOK-AUTH': jasmine.any(String) }
      })
      .put(`/v2/project/${apiKey}/session/${sessionId}/stream`)
      .reply(200, {message: 'ok'})

      return session.setStreamClasses(sessionId).then((resp) => {
        expect(resp).toEqual({message: 'ok'})
      })
    })
  })
})
