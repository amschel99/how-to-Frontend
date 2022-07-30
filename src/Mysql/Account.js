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


}
ws.onmessage=  (e)=>{
    const data= e.data
    console.log(data)
    setMessages((previous)=>[...previous,data])

}
ws.onerror= (e)=>{
    setStatus("not connected")
}
    


    return (

        <div className='w-screen h-screen bg-black flex flex-col items-center justify-evenly'>

      <p className="text-white font-extrabold text-xlg"> Connection Status:  {status}</p>
    <div className="bg-white lg:w-[50vw] xlg:w-[50vw] md:w-[80vw] sm:w-[80vw] w-[80vw] h-[50vh] overflow-scroll flex flex-col justify-end items-start">
          
      {
        messages.map((message)=>{
           return <p className="bg-basic rounded-sm p-2 my-2">
            {message}
           </p>
        })
      }
     
     <textarea className='relative top-12' placeholder='enter your message here'
     onChange={(e)=>setMessage(e.target.value)}
     ></textarea>
         
<button
       className=' text-dodger rounded-sm border-0 p-4 relative  bg-primary sm:left-[62vw] md:left-[50vw] lg:left-[42vw] xlg:left-[40vw] left-[63vw]'
       onClick={()=>{
        ws.send(message)
       }}
       >Send</button>
    </div>
     
        </div>
    )
}
export default Account;