const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://freindshubhampatel:gJ1r3gDxG0bqXNoC@cluster0.d7fymlq.mongodb.net/Expenso' , {useNewUrlParser : true , useUnifiedTopology : true})

const connection = mongoose.connection

connection.on('error', err => console.log(err))

connection.on('connected' , () => console.log('Mongo DB Connection Successfull'))