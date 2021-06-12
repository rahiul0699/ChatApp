import io from "socket.io-client";
let ENDPOINT='https://chat-app-rahul0699.herokuapp.com/'

export const socketINIT=()=>{

    return io(ENDPOINT);

}
