
 //------------------------------------------------------------------------------------------------------------------------->
const socket = io() ;
 //------------------------------------------------------------------------------------------------------------------------->
let userName ="" ;
 document.getElementById("join-room").addEventListener('click',(event) =>{
        event.preventDefault() ;
        const fetched = document.getElementById("user") ;
        userName = fetched.value ;
        console.log(userName) ;
        if(userName.trim() != ""){
        let container =  document.querySelector(".container");
        container.style.display = 'none' ;
        document.querySelector(".chatroom-container").style.display = 'block' ;
        }
 })

 //------------------------------------------------------------------------------------------------------------------------->
 document.getElementById("send-btn").addEventListener('click',(event)=>{
    event.preventDefault() ;
    let fetched = document.getElementById("message-input") ;
    let val = fetched.value.trim();
    console.log(val) ;
    const data = {
        userName : userName ,
        message : val 
    }

    socket.emit(data) ;
    addData(data,true) ;
 })
 //------------------------------------------------------------------------------------------------------------------------->
 socket.on('message',(data)=>{
    if(userName != data.userName){
        addData(data,false) ;
    }
 })
 //------------------------------------------------------------------------------------------------------------------------->
 function addData(data,check){
    let msgDiv = document.createElement("div") ;
    msgDiv.innerText = `${data.userName}:${data.message}` 
    if(check){
        msgDiv.setAttribute('class', 'message sent');
    } else{
        msgDiv.setAttribute('class', 'message rec');
    }
    document.getElementById('message-container').appendChild(msgDiv);
    document.getElementById('user').value="";
 }
 //------------------------------------------------------------------------------------------------------------------------->
