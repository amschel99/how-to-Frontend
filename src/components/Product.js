import {useParams} from "react-router-dom"
import axios from "axios"
import { useQuery, } from 'react-query'
import React from "react"
import { Link } from "react-router-dom"
import logo from "./images/brand.svg"
import Rating from "./Rating"

const Product = () => {
 

   // console.log(products)
  const{productId}=useParams()


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


    return (
    <div>
         <nav className='w-screen z-50 h-20 bg-primary flex items-center justify-evenly ' >
<Link to="/">
<img src={logo} className="lg:h-20 xlg:h-20 sm:h-12 md:h-12 h-12 cursor-pointer" alt="logo"/>
</Link>


</nav>
<div className="w-creen  flex justify between ">
    <div className="flex justify-between ">
        <div className="flex flex-col">
             <img  src={product.image} alt="product"/>
             <div className="flex items-center">
                <h3>Rate this Product</h3>
 <Rating/>
             </div>
            
             <button>Add to Cart</button>


        </div>
    
     <div className="flex flex-col mx-4">
        <h1 className="text-xlg font-lato text-dea-500  ">
            {product.name}
        
        </h1>
       
        <h1>{product.price}</h1>
        <h1>{product.rating}</h1>

     </div>

    </div>
    <div>

    </div>
   

</div>

   
    </div>
  );
}



export default Product;
