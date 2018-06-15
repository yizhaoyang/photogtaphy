const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/mysecret', (req, res) => res.send('This is a confidential page.'))
app.get('/home', (req, res) => res.sendFile('/Users/David/Documents/photography/home/home.html'))
app.get('/request', (req, res) => res.sendFile('/Users/David/Documents/photography/request/request.html'))
app.use(express.static('home'))


app.listen(3000, () => console.log('Example app listening on port 3000!'));