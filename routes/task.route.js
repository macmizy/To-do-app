const express = require("express")
const task = require("../models/task.model")


const taskRouter = express.Router()

taskRouter.get("/",async(req,res)=>{
    try{
        const tasks = await task.find()
        res.status(201).send(tasks) 
    }catch(err){
        console.log(err)
        res.status(404).send({message: "page 404 not found"})
    }
    
})

taskRouter.post("/", async(req,res)=>{
    const body = req.body
    body.date_created = new Date()
    const tasks = await task.create(body)
    try{
        res.status(200).send(tasks)
    }catch(err){
        console.log(err)
        res.status(500).send({message: "internal server error"})
    }
})

module.exports = taskRouter