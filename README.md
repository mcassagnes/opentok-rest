# opentok-rest
Unofficial OpenTok REST API for Node. Not all features are available in the official Node client (most BETA features), this is why we made this module.

[![Build Status](https://travis-ci.org/mcassagnes/opentok-rest.svg?branch=master)](https://travis-ci.org/mcassagnes/opentok-rest)

## Getting started
```
npm install opentok-rest
// or
yarn install opentok-rest
```

```
const OpenTokRest = require('opentok-rest')
const opentok = new OpenTokRest('opentok-key', 'opentok-secret')
```

## Broadcast

### Start a broadcast
```
opentok.broadcast.start(sessionId, outputs)
  .then(broadcast => {
    // resolves an opentok broadcast object. See doc for an example object: https://tokbox.com/developer/rest/#start_broadcast
  })
```

### Start a broadcast
```
opentok.broadcast.stop(broadcastId)
  .then(broadcast => {
    // resolves an opentok broadcast object. See doc for an example object: https://tokbox.com/developer/rest/#stop_broadcast
  })
  .catch(...)
```

### Set the layout
```
// See https://tokbox.com/developer/rest/#change_live_streaming_layout for layout examples
opentok.broadcast.setLayout(broadcastId, layout)
  .then(...)
  .catch(...)
```

## Archive

### Set the layout
```
// See https://tokbox.com/developer/beta/archive-custom-layout/#dynamically-changing-the-layout-type-while-the-session-is-being-archived
// for layout options
opentok.archive.setLayout(archiveId, layout)
  .then(...)
  .catch(...)
```
