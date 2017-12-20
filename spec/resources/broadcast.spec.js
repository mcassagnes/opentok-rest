/* eslint-env jasmine */

const Broadcast = require('../../lib/resources/broadcast')
const Opentok = require('../../lib/opentok')
const nock = require('nock')

describe('Broadcast', function () {
  let broadcast
  const apiKey = 'api-key-1'
  const tokboxApiHost = 'https://api.opentok.com'

  beforeEach(() => {
    const opentok = new Opentok(apiKey, 'api-secret-1')
    broadcast = new Broadcast(opentok)
  })

  describe('start', () => {
    it('should make the right request to the tokbox api', () => {
      const sessionId = 'session-id-1'

      nock(tokboxApiHost, {
        reqHeaders: { 'X-OPENTOK-AUTH': jasmine.any(String) }
      })
      .post(`/v2/project/${apiKey}/broadcast`, {
        sessionId: sessionId,
        layout: 'bestFit',
        outputs: {rtmp: {}, hls: {}}
      })
      .reply(200, {message: 'ok'})

      return broadcast.start(sessionId, {layout: 'bestFit', outputs: {rtmp: {}, hls: {}}}).then((resp) => {
        expect(resp).toEqual({message: 'ok'})
      })
    })
  })

  describe('stop', () => {
    it('should make the right request to the tokbox api', () => {
      const broadcastId = 'broadcast-id-1'

      nock(tokboxApiHost, {
        reqHeaders: { 'X-OPENTOK-AUTH': jasmine.any(String) }
      })
      .post(`/v2/project/${apiKey}/broadcast/${broadcastId}/stop`)
      .reply(200, {message: 'ok'})

      return broadcast.stop(broadcastId).then((resp) => {
        expect(resp).toEqual({message: 'ok'})
      })
    })
  })

  describe('setLayout', () => {
    it('should make the right request to the tokbox api', () => {
      const broadcastId = 'broadcast-id-1'

      nock(tokboxApiHost, {
        reqHeaders: { 'X-OPENTOK-AUTH': jasmine.any(String) }
      })
      .put(`/v2/project/${apiKey}/broadcast/${broadcastId}/layout`, {
        type: 'horizontalPresentation'
      })
      .reply(200, {message: 'ok'})

      return broadcast.setLayout(broadcastId, {type: 'horizontalPresentation'}).then((resp) => {
        expect(resp).toEqual({message: 'ok'})
      })
    })
  })
})
