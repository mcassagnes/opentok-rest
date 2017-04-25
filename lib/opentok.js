'use strict'

const resources = {
  Archive: require('./resources/archive'),
  Broadcast: require('./resources/broadcast'),
  Session: require('./resources/session')
}

class OpenTok {
  constructor (key, secret) {
    this.setApiAuth(key, secret)
    this.setResources()
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
}

module.exports = OpenTok
