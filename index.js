const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/mysecret', (req, res) => res.send('This is a confidential page.'))
app.use(express.static('content'))


app.listen(3000, () => console.log('Example app listening on port 3000!'));