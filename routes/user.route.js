const express = require("express")
const fs = require("fs")
const path = require("path")
const multer = require("multer")
const {user, img} = require("../models/user.model")


const userRouter = express.Router()


const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null,"uploads")
    },
    filename: (req,file,cb)=>{
        cb(null,file.fieldname+'-'+Date.now())
    }
})
const upload = multer({storage:storage})

userRouter.get("/",async(req,res)=>{
    try{
        const users = await user.find()
        res.status(201).send(users) 
    }catch(err){
        console.log(err)
        res.status(404).send({message: "page 404 not found"})
    }
    
})

userRouter.post("/", async(req,res)=>{
    const body = req.body
    const users = await user.create(body)
    try{
        res.status(200).send(users)
    }catch(err){
        console.log(err)
        res.status(500).send({message: "internal server error"})
    }
})

userRouter.get("/img",async(req,res)=>{
    try{
        const imgs = await img.find()
        res.status(201).send(imgs) 
    }catch(err){
        console.log(err)
        res.status(404).send({message: "page 404 not found"})
    }
})

userRouter.post("/img",upload.single("image"),async(req,res)=>{
    const obj = {
        data : fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
        contentType: "image/png"
    }
    const imgs = await img.create(obj)
    try{
        res.status(200).send(imgs).redirect("/img")
    }catch(err){
        console.log(err)
        res.status(500).send({message: "internal server error"})
    }
    
})

module.exports = userRouter