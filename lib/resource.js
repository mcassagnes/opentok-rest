'use strict'

const OpenTokRequest = require('./request')

class OpenTokResource {
  constructor (opentok) {
    this.opentok = opentok
  }

  generate (options) {
    options = options || {}
    if (!options.baseUrl) options.baseUrl = this.opentok.baseUrl
    const request = new OpenTokRequest(options)
    request.authenticate(this.opentok.auth)
    return request
  }
}

module.exports = OpenTokResource
