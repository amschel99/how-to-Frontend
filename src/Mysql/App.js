import React from 'react'
import axios from "axios"

const App = () => {

  const [title, setTitle]=React.useState('')
    const [body, setBody]=React.useState('')
    const [cost, setCost]=React.useState(0)
    const handlePost= async ()=>{
      try{
        const response= await axios.post("http://localhost:5000/create", {
            title,
            description:body,
           cost

        },  {
                    headers: { 'Content-Type': 'application/json' },
                  
                })
                console.log(response.data)

      }
      catch(error){


console.log(error.response.data)
return 

      }

    }

  return (
  <div className='flex flex-col justify-between w-screen'>

 <input className='w-[150px] placeholder-sky-700 bg-white border-2 border-sky-800 rounded-sm' placeholder='enter title'
 onChange={(e)=>setTitle(e.target.value)}
 />
  <input className='w-[150px] placeholder-sky-700 bg-white border-sky-800 border-2-black rounded-sm' placeholder='body'
  onChange={(e)=>setBody(e.target.value)}
  />
  <label htmlFor='publish'>Do you want to publish?</label>
 <input type="number"
 className='w-[150px] placeholder-sky-700 bg-white border-sky-800 border-2-black rounded-sm' placeholder='cost'
 onChange={(e)=>{
setCost(e.target.value)
 }}
 />
   
   <button className='w-[60px] bg-sky-400 ' onClick={()=>handlePost()}>Post</button>
  
  </div>
  )
}

export default App