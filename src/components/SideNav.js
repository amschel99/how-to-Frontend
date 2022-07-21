import React, {useState} from 'react'
import control from "../images/arrow-back-outline.svg"
import hoods from "../images/add.svg"
import Main from './Main'
import { faArrowCircleLeft, faTshirt, faHatCowboy, faPersonDress, faLaptop, faMobilePhone, faBars} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from 'react-redux'

import {sort} from "../feautures/Sort/sortSlice"

const SideNav = () => {
    const[open, setOpen]=useState(false)

     const dispatch= useDispatch()

 
  const[value, setValue]=React.useState("")
  return (
    <div className='flex w-screen '>
        <div className={` ${open? 'lg:w-64 xlg:w-64 md:w-screen sm:w-screen w-screen ' : 'w-14 sm:hidden md:hidden lg:block xlg:block  bg-basic hidden'} duration-300 p-5 pt-8 h-screen bg-dodger relative`}>
       <FontAwesomeIcon icon={faArrowCircleLeft} 
        className={`first-line border-basic-2 absolute cursor-pointer right-[-17px] top-4 w-7
            
             rounded-full ${!open && 'rotate-180'}`}     onClick={()=>setOpen((prev)=>!prev)}
       />
            

            <div className="flex gap-x-4 items-center ">

              <FontAwesomeIcon icon={faTshirt}  className={`cursor-pointer duration-500 text-primary w-16`}/>
                          <p className={`text-white origin-left  text-sm duration-300 ${!open && "scale-0"}`}>Printed Tshirts, hoods and caps</p>
            </div>
             <div className="flex gap-x-4 items-center my-4 ">

              <FontAwesomeIcon icon={faLaptop}  className={`cursor-pointer duration-500 text-primary w-16`}/>
                          <p className={`text-white origin-left  text-sm duration-300 ${!open && "scale-0"}`}>Laptops</p>
            </div>
             <div className="flex gap-x-4 items-center  ">

              <FontAwesomeIcon icon={faMobilePhone}  className={`cursor-pointer duration-500 text-primary w-16`}/>
                          <p className={`text-white origin-left  text-sm duration-300 ${!open && "scale-0"}`}>Mobile Phones</p>
            </div>
           
        </div>
        <div className="p-7 text-2xl font-semibold flex-1 h-screen " >
  <section>

  <select
 className=' w-1/4 lg:static xlg:static lg:hidden sm:block md:block xlg:hidden block rounded-lg bg-dodger text-white text-sm  relative bottom-5 left-4  '
 onChange={(e)=>{

 return dispatch(sort({sort:e.target.value}))


 }}
 >
      <option className='text-sm text-white' >SORT</option>
      <option 
     
      value="price" >sort from lowest to highest price</option>
       <option 
       
       value="-price">sort from highest to lowest price</option>
       <option 
       
       value="rating">sort by rating</option>
    </select>
</section>


        <Main open={open}/>
      
        </div>
        <FontAwesomeIcon icon={faBars} className={`relative right-[90vw] top-2 lg:hidden xlg:hidden md:block sm:block block ${open && 'hidden'} text-dodger` }
        onClick={()=>setOpen((prev)=>!prev)}
        />






        
    </div>
  )
}

export default SideNav