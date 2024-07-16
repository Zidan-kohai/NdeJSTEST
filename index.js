const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Templates/Index.html')
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/Templates/about.html')
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server run http://localhost${PORT}`)
})