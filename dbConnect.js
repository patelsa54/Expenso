const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Transaction' , {useNewUrlParser : true , useUnifiedTopology : true})

const connection = mongoose.connection

connection.on('error', err => console.log(err))

connection.on('connected' , () => console.log('Mongo DB Connection Successfull'))