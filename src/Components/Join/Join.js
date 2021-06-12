import React from 'react'
import "./Join.css"
import {socketINIT} from '../../services/socket'

import {setUser} from '../../store/slices/userSlice'
import {useDispatch} from 'react-redux'
const Join = ({setSocketInfo}) => {
    const dispatch = useDispatch()
    
    
    const formSubmit=(e)=>{

        let socket=socketINIT()
        e.preventDefault();
        let userName=e.target.elements.username.value.trim()
        let roomName=e.target.elements.roomname.value.trim()
        if(userName && roomName)
        {
            
            
            
          
            socket.emit("join",{userName,roomName},(error,user)=>{
                if(error)
                {
                  
                    alert(error)
                    
                }
                else
                {
                   
                  
                    setSocketInfo(socket)
                    dispatch(setUser(user))
                    
                    
                }
        
            })
        }
            
        
        // 

    }
   
    return (
        <div className="join">
            <form onSubmit={(e)=>{formSubmit(e)}}>
                <h3>User name</h3>
                <input type="text" name="username"/>
                <h3>Room name</h3>
                    <input type="text" name="roomname"/>
                    {/* <p className={"errorMessage"}>{error}</p> */}
            <button> Join </button>
            </form>
        </div>
    )
}

export default Join
