
 //------------------------------------------------------------------------------------------------------------------------->
const express = require('express') ;

const app = express() ;

const server = require('http').Server(app) ;

app.use(express.static('public'));

const PORT = 8998 ;

const io = require('socket.io')(server);


 //------------------------------------------------------------------------------------------------------------------------->
 //on -----> getting data,fetching ,
//emmit --------> sending data ,


io.on('connnection',(socket)=>{
    console.log(`socket id is ${socket.id}`) ;
    socket.on('message',(data)=>{
        io.emit('message',data) ;
    })
    socket.on('disconnect',(socket)=>{
        console.log(`socket id ${socket.id} has been disconnected`) ;
    })
})

 //------------------------------------------------------------------------------------------------------------------------->
server.listen(PORT,() => {
    console.log(`this is server running on ${8998}`);
});

console.log("tesing") ;
 //------------------------------------------------------------------------------------------------------------------------->
