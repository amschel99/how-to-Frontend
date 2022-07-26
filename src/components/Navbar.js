import React from 'react'

import logo from "./images/brand.svg"

import { faSearch,faTshirt,faLaptop, faStopwatch,faBook,faUmbrella,faBars,faClose,faMobilePhone}from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {Link} from "react-router-dom"

import { useSelector,useDispatch } from 'react-redux'
import {search} from "../feautures/search/searchSlice"
import {sort} from "../feautures/Sort/sortSlice"



const Navbar = () => {
  const dispatch= useDispatch()
  const cart= useSelector((state)=>state.cart)
  const searchState= useSelector((state)=>state.search)
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
type="text" placeholder="search for a product" className="h-8 rounded-0"/>
 <FontAwesomeIcon
onClick={()=>{
 
  return  dispatch(search({search:value}))
 
}}
  icon={faSearch} className="text-dodger relative right-7 h-7"

 />


        </div>


        <div className="sm:hidden md:hidden lg:block xlg:block hidden cursor-pointer">
            <ul className='flex '>
                <li className='flex text-crimson-500 hover:underline font-lato mx-4'>
                    <FontAwesomeIcon icon={faTshirt} className=" text-sm"/>
                    <h1 className='text-sm'>Clothes</h1>
                </li>
                <li className='flex text-crimson-500 hover:underline font-lato mx-4'>
                    <FontAwesomeIcon icon={faLaptop} className=" text-sm "/>
                    <h1 className='text-sm'>Laptops</h1>
                </li>
                 <li className='flex text-crimson-500 hover:underline font-lato mx-4'>
                    <FontAwesomeIcon icon={faMobilePhone} className=" text-sm "/>
                    <h1 className='text-sm'>Mobile Phones</h1>
                </li>
                 <li className='flex text-crimson-500 hover:underline font-lato mx-4'>
                    <FontAwesomeIcon icon={faStopwatch} className=" text-sm "/>
                    <h1 className='text-sm'>Smart Watches</h1>
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
                <li className='flex text-crimson-500  font-lato mx-4'>
                    <FontAwesomeIcon icon={faTshirt} className="mx-1 text-lg"/>
                    <h1 className='mx-1'>Tshirts, Hoods,Caps</h1>
                </li>
                <li className='flex text-crimson-500  font-lato mx-4'>
                    <FontAwesomeIcon icon={faLaptop} className=" text-lg mx-1 "/>
                    <h1 className='mx-1'>Laptops</h1>
                </li>
                 <li className='flex text-crimson-500  font-lato mx-4'>
                    <FontAwesomeIcon icon={faMobilePhone} className=" text-lg mx-1 "/>
                    <h1 className='mx-1'>Mobile Phones</h1>
                </li>
                 <li className='flex text-crimson-500  font-lato mx-4'>
                    <FontAwesomeIcon icon={faStopwatch} className=" text-lg mx-1 "/>
                    <h1 className='mx-1'>Smart Watches</h1>
                </li>
                
            </ul>

        </div>



    </nav>
  )



 
}

export default Navbar





