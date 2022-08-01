import {useParams} from "react-router-dom"
import axios from "axios"
import { useQuery, } from 'react-query'
import React from "react"
import { Link } from "react-router-dom"
import logo from "./images/brand.svg"

import {  useDispatch, useSelector} from 'react-redux'
import {itemAdded} from "../feautures/cart/cartSlice"

import cartImg from "./images/shopping-cart.png"

const Product = () => {
  const [feedbacks,setFeedbacks]=React.useState()
    const cart= useSelector((state)=>state.cart)
 
const dispatch= useDispatch()
   // console.log(products)
  const{productId}=useParams()
  const addtoCart= (product)=>{
    const{name, price,image}=product
 
 
dispatch((itemAdded({name,price,image})))


  }

  



const fetchProducts=async ()=>{
  try{

const {data}= await axios.get(`https://jyd-shoppers.herokuapp.com/products`,

)
//console.log(response.data.data +"yep its here, the data")


return data
 }catch(e){
  console.log(e.message)
  return null
 }
}





const{isLoading, isError,data}= useQuery("products",fetchProducts)
if(isLoading){

return <>loading...</>
}
if(isError){

return <>Error..</>
}
const product=data.data.find((item)=>item._id===productId)


//productRated is an array of feedback objects

    return (
    <div>
         <nav className='w-screen z-50 h-20 bg-primary flex items-center justify-evenly  fixed' >
<Link to="/">
<img src={logo} className="lg:h-20 xlg:h-20 sm:h-12 md:h-12 h-12 cursor-pointer" alt="logo"/>
</Link>
<Link to='/activity' className='flex justify-between'>
 
<img className='h-10' src={cartImg} alt="shopping-cart"/>
<p className='relative bottom-4 right-4'>{cart.totalItems}</p>


</Link>


</nav>
<div className="w-creen  flex sm:flex-col md:flex-col lg:flex-row  xlg:flex-row flex-col justify-start h-screen   relative top-[118px]">
  <div className="">
 <img src={product.image} alt="product" className="sm:w-screen md:w-screen lg:w-full xlg:w-full  w-screen "/>


 <button className="w-full"
   onClick={()=>addtoCart(product)}
 >Add To Cart</button>
  </div>
 
  <div className="flex flex-col items-start justify-start ml-4">
<h1 className="font-bold text-black font-heading my-2">{product.name}</h1>
<h1 className="font-lato text-primary font-semibold my-2"> <span className="text-xlg text-sea-500 font-heading">This Product costs </span> KSH{product.price}</h1>
<div>
  <h1 className="font-bold text-black font-heading my-2">About This Product</h1>
  <p className="lg:max-w-[40vw] xlg:max-w-[40vw] sm:max-w-[100vw] md:max-w-[100vw] max-w-[100vw]">
Quick access to Siri by saying “ Hey Siri ”
More than 24 hours total listening time with the Charging Case
Effortless setup, in-ear detection, and automatic switching for a magical experience
Easily share audio between two sets of AirPods on your iPhone, iPad, iPod touch, or Apple TV
  </p>
</div>




  </div>
    </div>

   
    </div>
  );
}


export default Product;
