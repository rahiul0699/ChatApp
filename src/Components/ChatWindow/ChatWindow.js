import React from 'react'
import "./ChatWindow.css"
import UserList from '../UserList/UserList'
import Chatarea from '../Chatarea/Chatarea'

const ChatWindow = (props) => {
    
    return (
        <div className="chatwindow">
         <div className="chatContainer">
             <UserList/>
             <Chatarea />
         </div>
        </div>
    )
}

export default ChatWindow
