const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    img: {
        type: Schema.Types.ObjectId,
        ref: "img"

    },

    task: {
        type: Schema.Types.ObjectId,
        ref: "task"
    }
})

const user = mongoose.model("user",userSchema)


const imgSchema = new Schema({
    img: {
        type: Buffer,
        contentType: String,
        required: false
    }
})
 
const img = mongoose.model("img",imgSchema)



module.exports = {user,img}