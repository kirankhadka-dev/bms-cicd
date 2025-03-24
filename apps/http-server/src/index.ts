import express from "express"
import {client}  from "@repo/db/client"

const app =express()


app.use(express.json())


const PORT =3001;


app.post("/signup",async (req,res)=>{
    const username =req.body.username;
    const password =req.body.password


    const user =await client.user.create({
        data:{
            username,
            password
        }
    })

    res.json({message:"user created successfully ",id:user.id})

    
})






app.listen(PORT)

