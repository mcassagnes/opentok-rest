'use strict'

const jwt = require('jsonwebtoken')
const uuid = require('uuid')

class TokenGenerator {
  constructor (key, secret) {
    this.key = key
    this.secret = secret
  }

  generate () {
    return jwt.sign({
      'iss': this.key,
      'iat': Math.floor(Date.now() / 1000),
      'exp': Math.floor(Date.now() / 1000 + 180),
      'ist': 'project',
      'jti': uuid.v4()
    }, this.secret)
  }
}

module.exports = TokenGenerator
