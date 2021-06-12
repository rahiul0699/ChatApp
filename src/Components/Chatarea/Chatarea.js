import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ChatInput from '../ChatInput/ChatInput'
import context from '../../context'
import {useSelector} from 'react-redux'
import './Chatarea.css'
 
const Chatarea = () => {
const currentUser = useSelector(state => state.userSlice.user)


const socket=useContext(context)
const[messages,setMessages]=useState([])
const classSelector=(user)=>{
    if(user==="admin"){
        return "adminMessage"
    }
    if(user===currentUser.name)
    {
        return "userMessage sender"
    }
    return "userMessage reciever"

}
useEffect(()=>{
socket?.emit("connected")
},[])
useEffect(()=>{

   
    socket?.on("message",(msg)=>{
        setMessages(messages=>  [...messages,msg]
        )
    })
},[socket])

useEffect(()=>{
scrollIntoViewHandler()
},[messages])

const scrollIntoViewHandler=()=>{
    document.querySelector(".scrollDiv").scrollIntoView({behavior:"smooth"})

}

 
    
    return (
        <div className="chatarea">
            <div className="chatHeader">
                <h2># {currentUser?.room}</h2>
            </div>
            <div className="chat">
                {
                   messages?.map(msg=>{
                       return (
                           <div className={`message`} key={msg.key}>
                               <div className={classSelector(msg.user)}>

                             {msg.user!=="admin" && msg.user!==currentUser.name?<p className="senderInfo">{msg.user}</p>:null}
                               <p >{msg.text}</p>

                               </div>
                           </div>
                       )
                   })
                }
                 <div className="scrollDiv"></div>
            </div>
      
          
            <ChatInput />
       
           
        </div>
    )
}
export default Chatarea
