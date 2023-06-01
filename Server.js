const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Server is Live!')
})

// Routes

app.post('/', (req, res))


app.listen(port, () => {
  console.log(`Connected on Port: ${port}`)
})