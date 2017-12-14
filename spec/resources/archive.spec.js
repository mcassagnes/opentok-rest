/* eslint-env jasmine */

const Archive = require('../../lib/resources/archive')
const Opentok = require('../../lib/opentok')
const nock = require('nock')

describe('Archive', function () {
  let archive
  const apiKey = 'api-key-1'
  const tokboxApiHost = 'https://api.opentok.com'

  beforeEach(() => {
    const opentok = new Opentok(apiKey, 'api-secret-1')
    archive = new Archive(opentok)
  })

  describe('start', () => {
    it('should make the right request to the tokbox api', () => {
      const sessionId = 'session-id-1'

      nock(tokboxApiHost, {
        reqHeaders: { 'X-OPENTOK-AUTH': jasmine.any(String) }
      })
      .post(`/v2/project/${apiKey}/archive`, {
        sessionId: sessionId,
        outputMode: 'composed'
      })
      .reply(200, {message: 'ok'})

      return archive.start(sessionId, {outputMode: 'composed'}).then((resp) => {
        expect(resp).toEqual({message: 'ok'})
      })
    })
  })

  describe('setLayout', () => {
    it('should make the right request to the tokbox api', () => {
      const archiveId = 'archive-id-1'

      nock(tokboxApiHost, {
        reqHeaders: { 'X-OPENTOK-AUTH': jasmine.any(String) }
      })
      .put(`/v2/project/${apiKey}/archive/${archiveId}/layout`, {
        type: 'horizontalPresentation'
      })
      .reply(200, {message: 'ok'})

      return archive.setLayout(archiveId, {type: 'horizontalPresentation'}).then((resp) => {
        expect(resp).toEqual({message: 'ok'})
      })
    })
  })
})
