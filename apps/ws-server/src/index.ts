import { WebSocketServer } from "ws";


import {client} from "@repo/db/client"



const server = new WebSocketServer({
    port:3002
})



server.on("connection",async(clientSocket)=>{

await client.user.create({
    data:{
        username: Math.random().toString(),
        password:Math.random().toString()
    }

})



clientSocket.send(" you are  connnected to the server ")
})