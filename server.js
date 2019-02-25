const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = new express()
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))

app.post('/login' , (req, res) => {
    res.status(200).send({
        token: 'a json web token',
        message: 'success'
    })
})

app.listen(8080, 'localhost' , () => {
    console.log('listening')
})