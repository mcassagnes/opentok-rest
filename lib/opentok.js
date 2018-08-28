'use strict'

const OpenTokRequest = require('./request')

const resources = {
  Archive: require('./resources/archive'),
  Broadcast: require('./resources/broadcast'),
  Session: require('./resources/session')
}

class OpenTok {
  constructor (key, secret, baseUrl) {
    this.setApiAuth(key, secret)
    this.setResources()
    this.baseUrl = baseUrl || 'https://api.opentok.com/v2/project'
  }

  setApiAuth (key, secret) {
    this.auth = {
      key: key,
      secret: secret
    }
  }

  setResources () {
    for (let name in resources) {
      const key = `${name[0].toLowerCase()}${name.substring(1)}`
      this[key] = new resources[name](this)
    }
  }

  rawRequest (options) {
    const request = new OpenTokRequest(options)
    request.authenticate(this.auth)
    return request.send()
  }
}

module.exports = OpenTok
