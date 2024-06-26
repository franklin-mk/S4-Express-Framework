// accessible locally
const secret = 'SUPER SECRET'
// accessible globally - shared through module export 
const john = 'john'
const peter = 'peter'

//console.log(module)

module.exports = { john, peter }