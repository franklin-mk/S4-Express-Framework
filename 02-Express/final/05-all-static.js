const express = require('express')
const path = require('path')

const app = express()

//setup static and middleware --css,DOM js,etc
app.use(express.static('./public'))

/* app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
    //   adding to static assets
    //   SSR - server side rendering
}) */

app.all('*', (req, res) => {
  res.status(404).send('<h1>Resource not found</h1>')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000...')
})

// static assets/file eg image,js,css - server does not need to change it
// middleware - server needs to change it
// SSR - server renders the page
// SPA - client renders the page


// API = API - JSON, SEND DATA, RES.JSON()
// SSR = SSR - TEMPLATE, SEND TEMPLATE, RES.RENDER()
