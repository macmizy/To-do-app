const express = require("express")
const path = require('path')
const taskRoute = require("./routes/task.route")
require("dotenv").config()
require("./models/db").Connect_DB()



const app = express();

app.use(express.static(path.join(__dirname, "public")))
app.set("views", "views")
app.set("view engine","ejs")


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/task",taskRoute)


app.get("/",(req,res)=>{
    
    res.send({message: "Welcome "}).render("to-do.ejs")
})

PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})
