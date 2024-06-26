const EventsEmitter = require('events')

const customEmitter = new EventsEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`User data received: ${name}-${id}`)
})

customEmitter.on('response', () => {
    console.log('some other logic here')
})

customEmitter.emit('response', "Dave", "207")



// This module allows you to create, manage, and listen to events.
// on = listens
// emit = triggers
// order of on and emit matters
// there can be many on events functions to be acted on the same emit