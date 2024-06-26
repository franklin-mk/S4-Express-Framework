const { writeFileSync } = require('fs')
for (let i = 0; i < 10000; i++) {
  writeFileSync('./content/big.txt', 
    `hello world ${i}\n`, 
    { flag: 'a' })
}


//types of streams 
//writeable
//readable
//dublex
//transform

/* Streams in Node.js are powerful abstractions for working with data that is being read from or written to a source in a continuous flow. They provide an efficient way to handle I/O operations, such as reading from or writing to files, handling HTTP requests and responses, and more. Streams are instances of EventEmitter and can emit various events throughout their lifecycle. There are four main types of streams in Node.js:

Readable Streams: These are streams from which data can be read. Examples include file reading streams and HTTP request streams.
Writable Streams: These are streams to which data can be written. Examples include file writing streams and HTTP response streams.
Duplex Streams: These are streams that are both readable and writable. Examples include TCP sockets.
Transform Streams: These are duplex streams that can modify or transform the data as it is written and read. Examples include zlib streams for compression. */