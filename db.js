const mongoose = require("mongoose");


function connectDB(){

    mongoose.connect('mongodb+srv://AkashGajulapalli:akash1@cluster0.vh5l1.mongodb.net/carsforuse' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose