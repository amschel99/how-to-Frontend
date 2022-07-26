import React from 'react'
import axios from "axios"
import { useQuery, } from 'react-query'
import {  useDispatch, useSelector} from 'react-redux'
import {itemAdded} from "../feautures/cart/cartSlice"

import {faSpaceShuttle,} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cart from "./Cart"







const Main = ({open}) => {
  
  
const {search}= useSelector((state)=>state.search)
const {sort}= useSelector((state)=>state.sort)
  const dispatch= useDispatch()

  const addtoCart= (product)=>{
    const{name, price,image}=product
 
 
dispatch((itemAdded({name,price,image})))


  }

  
const fetchProducts= async ()=>{
const response= await axios.get(`https://jyd-shoppers.herokuapp.com/products`,
{
 params:{name:search,
 sort
  }
}
)
console.log(response.data.data)

return await response.data.data
}


const{isLoading, isError,data}= useQuery(["products", search, sort],()=> fetchProducts(search, sort))
if(isLoading){
  return <>
  <FontAwesomeIcon icon={faSpaceShuttle} className={`${open ?"sm:sr-only md:sr-only lg:not-sr-only xlg:not-sr-only sr-only": 'not-sr-only'} w-10 text-basic`} />
  <h5  className={`${open ?"sm:sr-only md:sr-only lg:not-sr-only xlg:not-sr-only sr-only": 'not-sr-only'}`}>Loading ... be patient</h5>
 
  </>
}
if(isError){
  return <>

 <h5 className={`${open && 'sr-only'}`}>An error occured, our engineers are working on it</h5>   

</>

}


  return (
    <div className='relative top-20'>
       <Cart/>
   
   
     
<div className='w-[100vw] flex pl-10 items-center px-2 lg:justify-center xlg:justify-center sm:justify-start md:justify-start justify-start flex-wrap   relative top-[100px]'>
 
  {
    data.map((item)=>{
      return <div key={item.image} className=" lg:w-[8rem] xlg:w-[8rem] sm:w-[5rem] md:w-[4rem] w-[5rem] h-36 flex flex-col items-center my-5 bg-white mx-1 text-primary text-center">
        <img className='w-full h-14' src={item.image} alt="item" />
  
        <h5 className='h-20 text-xs '>{item.name}</h5>
        <h6 className="h-20  text-xs">
         {item.price}
        </h6>
       <button className=' text-xs p-[1px] rounded-sm lg:w-3/4 xlg:w-3/4 sm:w-full md:w-full w-full h-20 text-white bg-dodger hover:text-dodger hover:bg-primary'
        onClick={()=>addtoCart(item)}
       >Add To Cart</button>
    


      </div>
    })
  }


</div>
 </div>
    
   

  )
}

export default Main