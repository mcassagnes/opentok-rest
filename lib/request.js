'use strict'

const request = require('request')
const TokenGenerator = require('./token_generator')

class OpenTokRequest {
  constructor (options) {
    this.options = options || {}
    this.baseUrl = this.options.baseUrl || 'https://api.opentok.com/v2/project'
  }

  authenticate (auth) {
    this.auth = auth
    this.tokenGenerator = new TokenGenerator(auth.key, auth.secret)
  }

  get headers () {
    return {
      'X-OPENTOK-AUTH': this.tokenGenerator.generate()
    }
  }

  get endpoint () {
    return `${this.baseUrl}/${this.auth.key}/${this.options.endpoint}`
  }

  get request () {
    return {
      method: this.options.type,
      body: this.options.body,
      headers: this.headers,
      json: true,
      uri: this.endpoint
    }
  }

  send () {
    return new Promise((resolve, reject) => {
      request(this.request, (err, res, body) => {
        if (err) {
          return reject(err)
        }
        if (res.statusCode !== 200) {
          let error = body || `Unknown error status code: ${res.statusCode}`
          return reject(new Error(error))
        }

        resolve(body)
      })
    })
  }
}

module.exports = OpenTokRequest
