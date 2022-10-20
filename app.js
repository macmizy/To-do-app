const express = require("express")
const path = require('path')
const taskRouter = require("./routes/task.route")
const userRouter = require("./routes/user.route")
require("dotenv").config()
require("./models/db").Connect_DB()



const app = express();

app.use(express.static(path.join(__dirname, "public")))
app.set("views", "views")
app.set("view engine","ejs")


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/task",taskRouter)
app.use("/user",userRouter)


app.get("/",(req,res)=>{
    
    res.send({message: "Welcome "}).render("to-do.ejs")
})

PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})
