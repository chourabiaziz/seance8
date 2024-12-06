const express = require("express")
const http = require("http")
const path = require("path")
const app = express()
const server = http.createServer(app)
const routerChat = require("./routes/chat")
const io = require("socket.io")(server)

app.set("views" , path.join(__dirname , "views"))
app.set("view engine" , "twig")
app.use('/chat' , routerChat)






io.on("connection" ,(socket)=>{
    console.log("a user is connected");

    io.emit("msg",  "a user is connected ");

})
 

server.listen(3000 ,()=>{
    console.log("listining in port 3000");

})
