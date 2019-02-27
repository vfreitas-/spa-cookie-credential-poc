const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors({
  origin: true,
  credentials: true
}))

const unique = () => '_' + Math.random().toString(36).substr(2, 9)

app.get('/', (req, res) => {

  const [ sessionid ] = (req.headers.cookie || '').split(';')
  const [ , hash ] = (sessionid || '').split('sessionid')

  if (!sessionid || !hash) {
    res.setHeader('Set-Cookie', `sessionid=${unique()}; HttpOnly; Path=/`);
  }

  res.json({
    test: 1
  })
})

app.post('/assinatura', (req, res) => {
  console.log(req.headers)
  res.json({})
})

app.listen(3001, function () {
  console.log('Listening on port 3001')
})