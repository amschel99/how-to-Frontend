import React from 'react'

const Account= ()=>{
    const [status,setStatus]=React.useState("not connected")
    const[ws,setws]=React.useState({})
    const [messages,setMessages]=React.useState([])
    const[message,setMessage]=React.useState()
    
React.useEffect(()=>{

    const ws= new WebSocket("ws://localhost:8080")
setws(ws)


},[])
//when the connection is open
ws.onopen=()=>{
    setStatus("connected to the server")
    ws.send("Joined the chat")

}
ws.onmessage=  (e)=>{
    const data= e.data
    console.log(data)
    setMessages((previous)=>[...previous,data])

}
ws.onerror= (e)=>{
    setStatus(JSON.stringify(e))
}
    


    return (

        <div className='w-screen h-screen bg-black flex flex-col items-center justify-evenly'>

      <p className="text-white text-xlg"> {status}</p>
      <input type='text' className='bg-dodger text-white'
      placeholder='enter a message'
      onChange={(e)=>setMessage(e.target.value)}
       />
       <button
       className='bg-white text-dodger rounded-sm border-0 p-4'
       onClick={()=>{
        ws.send(message)
       }}
       >Send</button>
      {
        messages.map((message)=>{
           return <div className="text-white flex flex-col">
            {message}
           </div>
        })
      }
        </div>
    )
}
export default Account;