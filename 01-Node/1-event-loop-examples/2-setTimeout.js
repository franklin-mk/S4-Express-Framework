// started operating system process
console.log('first')
setTimeout(() => {
  console.log('last') // occurs last since its asynchronus
}, 0)
console.log('second')
// completed and exited operating system process