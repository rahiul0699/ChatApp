
import './App.css';
import {useSelector} from 'react-redux'
import Join from './Components/Join/Join'
import ChatWindow from './Components/ChatWindow/ChatWindow'
import {useState } from 'react';
import context from './context'

function App() {

  const [socket,setSocket]=useState(null)
     const socketInfo=context
    const setSocketInfo=(socket)=>{

    setSocket(socket)
    }
  const user = useSelector(state => state.userSlice.user)
  let app=<Join setSocketInfo={setSocketInfo}/>
  if(user && socket)
  {
app=(
<socketInfo.Provider value={socket}>
 <ChatWindow/>
    </socketInfo.Provider>
)
  }
  return (
 
     
     <div>

       {app}
     </div>
 
  );
}

export default App;
