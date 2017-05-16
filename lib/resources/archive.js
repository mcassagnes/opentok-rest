'use strict'

const OpenTokResource = require('../resource')

class Archive extends OpenTokResource {
  start (sessionId, params) {
    params.sessionId = sessionId
    const options = {
      type: 'post',
      endpoint: `/archive`,
      body: params
    }
    const request = this.generate(options)
    return request.send()
  }

  setLayout (archiveId, layout) {
    const options = {
      type: 'put',
      endpoint: `/archive/${archiveId}/layout`,
      body: layout
    }
    const request = this.generate(options)
    return request.send()
  }
}

module.exports = Archive
