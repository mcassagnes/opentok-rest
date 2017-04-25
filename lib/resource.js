'use strict'

const OpenTokRequest = require('./request')

class OpenTokResource {
  constructor (opentok) {
    this.opentok = opentok
  }

  generate (options) {
    const request = new OpenTokRequest(options)
    request.authenticate(this.opentok.auth)
    return request
  }
}

module.exports = OpenTokResource
