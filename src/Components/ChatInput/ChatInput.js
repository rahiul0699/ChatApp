import React, { useContext, useState } from 'react'
import context from '../../context'

import './ChatInput.css'
const ChatInput = () => {
    const socket=useContext(context)

    const [input,setInput]=useState('')
    const sendMessageHandler=(e)=>{
         e.preventDefault()
         if(input)
         {
             socket.emit("sendMessage",input)
         }
         setInput('')
     
     }
    return (
        <div className="chatInput">
                <form onSubmit={(e)=>{sendMessageHandler(e)}} className="inputForm" >
                    <input name="message" placeholder="Enter your message" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
                    <button type="submit" style={{display:"none"}}></button>
                </form>
            </div>
    )
}

export default ChatInput
