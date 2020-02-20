const app = require('express')()
const bd = require('body-parser')
const router = require('./router')


const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/test', {useNewUrlParser : true,useUnifiedTopology: true})


app.use(bd.urlencoded({extended : false})).use(bd.json()).use(router)

app.listen(3000, () => {
    console.log('hello')
})
