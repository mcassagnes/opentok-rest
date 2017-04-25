'use strict'

const OpenTokResource = require('../resource')

class Session extends OpenTokResource {
  setStreamClasses (sessionId, streams) {
    return false
    // const options = {
    //   type: 'post',
    //   endpoint: `/session/${sessionId}/layout`,
    //   body: streams
    // }
    // const request = this.generate(options)
    // return request.send()
  }
}

module.exports = Session
