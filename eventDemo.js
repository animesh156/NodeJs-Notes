import {EventEmitter} from 'events';

const myEmitter = new EventEmitter();

function greetHandler(name) {
    console.log("Hello " + name);
}

function goodByeHandler(name) {
    console.log("GoodBye " + name);
}

// register event listeers
myEmitter.on('greet', greetHandler)
myEmitter.on('goodbye', goodByeHandler)


// emit events
myEmitter.emit('greet', 'John')
myEmitter.emit('goodbye', 'John')


// error event
myEmitter.on('error', (err) => {
    console.log('An error occured:', err);
})

// simulate rror
myEmitter.emit('error', new Error('Something went wrong'))