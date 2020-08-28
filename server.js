const express = require('express')
const bodyParser = require('body-parser')
const calculator = require('./calculator')



const app = express()
const port = 3000


app.use(bodyParser.json());

app.post('/calculator', (req, res) => {
    const {operator, value1, value2} = req.body

    res.json({result: calculator(operator, value1, value2)})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})