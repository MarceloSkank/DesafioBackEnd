const app = require('express')()
const bd = require('body-parser')
const router = require('./router')
require('dotenv').config()

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://root:Valdisnei123@cluster0-aqjra.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser : true,useUnifiedTopology: true})


app.use(bd.urlencoded({extended : false})).use(bd.json()).use(router)

app.listen(process.env.PORT, () => {
    console.log('hello')
})
