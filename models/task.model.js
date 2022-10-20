const mongoose = require("mongoose");

const Schema = mongoose.Schema

const taskSchema = new Schema({
    task: {
        type: String,
        required: false
    },

    date_created: {
        type: Date,
        default: Date.now
    },

    date_toExecute: {
        type: Date,
        required: false
    }

    

})

const task = mongoose.model('task',taskSchema)
module.exports = task