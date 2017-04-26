'use strict'

const OpenTokResource = require('../resource')

class Session extends OpenTokResource {
  setStreamClasses (sessionId, streams) {
    const options = {
      type: 'put',
      endpoint: `/session/${sessionId}/stream`,
      body: streams
    }
    const request = this.generate(options)
    return request.send()
  }
}

module.exports = Session
