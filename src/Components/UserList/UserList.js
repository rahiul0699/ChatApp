import React, { useContext, useEffect, useState } from "react";
import './UserList.css'
import {useSelector} from 'react-redux'
import context from '../../context'
const UserList = () => {
  const currentUser = useSelector(state => state.userSlice.user)
  const socket=useContext(context)
  const [users, SetUsers] = useState([]);
  useEffect(()=>{
    socket.on("roomData",(users)=>{
      SetUsers(users)
    })
  },[socket])
  return (
    <div className="userlist">
      {users.map((user) => {
        return(<div className="user" key={user.name}>
          <i className="fas fa-user"></i>
          <p>{user.name===currentUser.name?"You":user.name}</p>
        </div>);
      })}
    </div>
  );
};

export default UserList;
