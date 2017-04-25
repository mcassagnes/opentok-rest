/* eslint-env jasmine */

describe('Opentok module', function () {
  it('Should export a class', function () {
    const opentok = require('../lib/opentok.js')
    expect(typeof opentok).toEqual('function')
  })
})
