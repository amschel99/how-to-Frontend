import React from 'react'
import axios from "axios"
import { useQuery, } from 'react-query'
import {  useDispatch, useSelector} from 'react-redux'
import {itemAdded} from "../feautures/cart/cartSlice"
import Loader from './Loader'
import { faSpinner,faSpaceShuttle,} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



import "./css/Main.css"



const Main = ({open}) => {
  
  
const {search}= useSelector((state)=>state.search)
const {sort}= useSelector((state)=>state.sort)
  const dispatch= useDispatch()

  const addtoCart= (product)=>{
    const{name, price,image}=product
 
 
dispatch((itemAdded({name,price,image})))


  }
  {/*https://jyd-shoppers.herokuapp.com/products */}
  
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
    <div className={`${open ?"sm:sr-only md:sr-only lg:not-sr-only xlg:not-sr-only sr-only": 'not-sr-only'}  `}>
     

    <div   className={`${open ?"sm:sr-only md:sr-only lg:not-sr-only xlg:not-sr-only sr-only": 'not-sr-only'} caraousel`}>
 

       {data.map((product)=>{
        return <div className='product sm:w-full md:w-full' key={product.image} >
        
          <img  src={product.image} alt="product"/>
          <h3 className='name text-sm'>{product.name.substring(0,5)}</h3>
          <h2 className='price text-sm'>{product.price} $</h2>
          <button className='btn-cart text-sm h-1/2 sm:w-full md:w-full lg:w-5 xlg:w-5 w-full text-sm' onClick={()=>addtoCart(product)}>Add To Cart</button>
       
        </div>
       })}
         
    </div>
    </div>

  )
}

export default Main