import {client} from "@repo/db/client"



export default async  function Home(){

  const user =await client.user.findFirst()

  return (
    <div>
      <h2>Username:{user?.username} </h2>
      <h2>Password:{user?.password}</h2>
    </div>
  )
}