const express = require('express')
const app = express()
const port = 2000

app.get('/', (req, res) => {
    res.send('Server del mio blog')
})

app.listen(port, () => {
    console.log('il server ha ricevuto una domanda')
})