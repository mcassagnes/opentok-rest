'use strict'

const OpenTokResource = require('../resource')

class Archive extends OpenTokResource {
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
