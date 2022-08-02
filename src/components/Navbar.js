import React from 'react'

import logo from "./images/brand.svg"
import hp from "./images/hp.png"
import lenovo from "./images/lenovo.png"
import dell from "./images/dell.png"
import acer from './images/acer.png'
import ssd from './images/ssd.png'


import { faSearch,faTshirt,faLaptop, faStopwatch,faBook,faUmbrella,faBars,faClose,faMobilePhone}from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {Link} from "react-router-dom"

import { useSelector,useDispatch } from 'react-redux'
import {search} from "../feautures/search/searchSlice"
import {brand} from "../feautures/brand/brandSlice"



const Navbar = () => {
  const dispatch= useDispatch()
 // const brand= useSelector((state)=>state.brand)

  const[value, setValue]=React.useState("")



  const[open,setOpen]=React.useState(false)
  return (
    <nav className='w-screen z-50 h-20 bg-primary flex items-center justify-evenly fixed' >
        <div className='cursor-pointer flex items-center'>
<img src={logo} className="lg:h-20 xlg:h-20 sm:h-12 md:h-12 h-12 cursor-pointer" alt="logo"/>
<input 
 onChange={(e)=>{
    setValue(e.target.value)
     
  }}
type="text" placeholder="search ..." className="h-8 rounded-0 sm:w-3/4 md:w-3/4 lg:w-auto xlg:w-auto w-3/4"/>
 <FontAwesomeIcon
onClick={()=>{
 
  return  dispatch(search({search:value}))
 
}}
  icon={faSearch} className="text-dodger relative right-7 h-7"

 />


        </div>


        <div className="sm:hidden md:hidden lg:block xlg:block hidden cursor-pointer">
            <ul className='flex '>
                <li className='flex text-crimson-500 hover:underline font-lato mx-4'
                 onClick={()=>dispatch(brand({brand:"hp"}))}
                >

<img  className="w-5" src={hp} alt="hp"/>
                 
                </li>
                <li className='flex text-crimson-500 hover:underline font-lato mx-4'
                onClick={()=>dispatch(brand({brand:"lenovo"}))}
                >
                   <img  className="w-10" src={lenovo} alt="hp"/>
                  
                </li>
                 <li className='flex text-crimson-500 hover:underline font-lato mx-4'
                  onClick={()=>dispatch(brand({brand:"dell"}))}
                 >
               
                 <img  className="w-10" src={dell} alt="hp"/>
                </li>
                 <li className='flex text-crimson-500 hover:underline font-lato mx-4'
                  onClick={()=>dispatch(brand({brand:"acer"}))}
                 >
                     <img  className="w-10" src={acer} alt="hp"/>
                </li>
                
                 <li className='flex text-crimson-500  font-lato mx-4'
                  onClick={()=>dispatch(brand({brand:"ssd"}))}
                 >
                     <img  className="w-6" src={ssd} alt="hp"/>
                </li>
                
            </ul>

        </div>



{ !open &&
 <div className='lg:hidden xlg:hidden md:block sm:block block text-crimson-500 right-2 relative text-sm'>

            <FontAwesomeIcon  icon={faBars}
           onClick={
            ()=>setOpen((previous)=>!previous)
           }
            />
        </div>
}
{ open &&
 <div className='lg:hidden xlg:hidden md:block sm:block block text-crimson-500 text-sm right-2 relative'>

            <FontAwesomeIcon  icon={faClose}
           onClick={
            ()=>setOpen((previous)=>!previous)
           }
            />
        </div>
}

       



        {/*SIDE BAR */}

        <div  className={` ${open?"w-screen ":" w-0 h-0 sr-only"} cursor-pointer smblock md:block lg:hidden xlg:hidden w-screen block bg-primary absolute top-16    `}>
            <ul className={` ${open?"w-full scale-2":"scale-0 w-0 h-0"}  flex flex-col justify-evenly h-[300px] items-center duration-300   `}>
                <li className='flex text-crimson-500  font-lato mx-4'
                 onClick={()=>dispatch(brand({brand:"hp"}))}
                >
                    <img  className="w-5" src={hp} alt="hp"/>
                   
                </li>
                <li className='flex text-crimson-500  font-lato mx-4'
                 onClick={()=>dispatch(brand({brand:"lenovo"}))}
                >
                   <img  className="w-10" src={lenovo} alt="hp"/>
                
                    
                </li>
                 <li className='flex text-crimson-500  font-lato mx-4'
                  onClick={()=>dispatch(brand({brand:"dell"}))}
                 >
                      <img  className="w-10" src={dell} alt="hp"/>
                </li>
                 <li className='flex text-crimson-500  font-lato mx-4'
                  onClick={()=>dispatch(brand({brand:"acer"}))}
                 >
                     <img  className="w-10" src={acer} alt="hp"/>
                </li>
                 <li className='flex text-crimson-500  font-lato mx-4'
                  onClick={()=>dispatch(brand({brand:"ssd"}))}
                 >
                     <img  className="w-10" src={ssd} alt="hp"/>
                </li>
                
            </ul>

        </div>



    </nav>
  )



 
}

export default Navbar





