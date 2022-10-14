require("dotenv").config()
const mongoose = require('mongoose')

const DB_URI = process.env.DB_URI

function Connect_DB(){
    mongoose.connect(DB_URI)

    mongoose.connection.on("connected",()=>{
        console.log("connected to DB successfully")
    })
    mongoose.connection.on("error", (err)=>{
        console.log("Error connecting to DB", err)
    })
}

module.exports = Connect_DB