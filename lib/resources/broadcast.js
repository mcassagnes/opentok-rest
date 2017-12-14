'use strict'

const OpenTokResource = require('../resource')

class Broadcast extends OpenTokResource {
  start (sessionId, params) {
    const options = {
      type: 'post',
      endpoint: 'broadcast',
      body: {
        sessionId: sessionId,
        layout: params.layout,
        outputs: params.outputs
      }
    }
    const request = this.generate(options)
    return request.send()
  }

  stop (broadcastId) {
    const options = {
      type: 'post',
      endpoint: `broadcast/${broadcastId}/stop`
    }
    const request = this.generate(options)
    return request.send()
  }

  setLayout (broadcastId, layout) {
    const options = {
      type: 'put',
      endpoint: `broadcast/${broadcastId}/layout`,
      body: layout
    }
    const request = this.generate(options)
    return request.send()
  }
}

module.exports = Broadcast
