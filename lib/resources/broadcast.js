'use strict'

const OpenTokResource = require('../resource')

class Broadcast extends OpenTokResource {
  setLayout (broadcastId, layout) {
    const options = {
      type: 'put',
      endpoint: `/broadcast/${broadcastId}/layout`,
      body: layout
    }
    const request = this.generate(options)
    return request.send()
  }
}

module.exports = Broadcast
