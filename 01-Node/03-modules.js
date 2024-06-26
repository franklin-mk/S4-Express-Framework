// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
// BUILT IN MODULES = OS, PATH, FS, HTTP

const  names = require('./04-names')
const { john, peter } = require('./04-names')

const sayHi = require('./05-utils')
const data = require('./06-alternative-flavor')

require('./07-mind-grenade')

console.log(names)

sayHi(names.peter) // not destructured
sayHi(john) // destructured

sayHi('faith')
sayHi('susan')