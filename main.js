const express = require('express')
const app = express()
const port = 2000

const posts = require('./arrayPost.js')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Server del mio blog')
})

app.get('/bacheca', (req, res) => {
    res.json(posts)
})

app.listen(port, () => {
    console.log('il server ha ricevuto una domanda')
})