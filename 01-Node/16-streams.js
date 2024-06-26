const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt', {highWaterMark: 90000, encoding: 'utf8'})

// default size 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 }) = alter size
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' }) = convert to string

stream.on('data', (result) => {
    console.log(result)
})

stream.on('error', (err) => console.log(err))




/* const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems) // [1, 2, 3, 4] */