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
   
   
     
<div className='w-[90vw] flex items-start lg:justify-center xlg:justify-center sm:justify-start md:justify-start justify-start flex-wrap ml-5 '>
 
  {
    data.map((item)=>{
      return <div key={item.image} className=" lg:w-[8rem] xlg:w-[8rem] sm:w-[6rem] md:w-[6rem] w-[6rem] h-[300px] flex flex-col items-center mx-3 my-5 bg-white text-primary text-center">
        <img className='w-full h-20' src={item.image} alt="item" />
  
        <h5 className='h-20 '>{item.name}</h5>
        <h6 className="h-20 ">
         {item.price}
        </h6>
       <button className='w-[99%] h-[50px] text-sm text-white bg-dodger hover:text-dodger hover:bg-primary'
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