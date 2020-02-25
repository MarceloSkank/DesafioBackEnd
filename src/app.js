const app = require('express')()
const bd = require('body-parser')
const router = require('./router')
require('dotenv').config()

const mongoose = require('mongoose')

mongoose.connect(process.env.DB, {useNewUrlParser : true,useUnifiedTopology: true})

app.use(bd.urlencoded({extended : false})).use(bd.json()).use(router)

app.listen(process.env.PORT, () => {
    console.log('hello')
})
