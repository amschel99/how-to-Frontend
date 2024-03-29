import React from 'react'
import axios from "axios"
import { useQuery, } from 'react-query'
import {  useDispatch, useSelector} from 'react-redux'
import {itemAdded} from "../feautures/cart/cartSlice"

import {faSpaceShuttle,faStar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cart from "./Cart"
import {Link} from 'react-router-dom'
import PageButton from "./PageButton"








const Main = ({products,setProducts}) => {
  const open=false
  const[page,setPage]=React.useState(1)
  
  
const {search}= useSelector((state)=>state.search)
const {sort}= useSelector((state)=>state.sort)
const {brand}= useSelector((state)=>state.brand)
const {ram}= useSelector((state)=>state.ram)
const {os}= useSelector((state)=>state.os)
const {disk}= useSelector((state)=>state.disk)

const[pages,setPages]=React.useState()
  const dispatch= useDispatch()

  const addtoCart= (product)=>{
    const{name, price,image}=product
 
 
dispatch((itemAdded({name,price,image})))


  }

  
  
const fetchProducts= async ()=>{
  try{
const response= await axios.get(`https://jyd-shoppers.herokuapp.com/products`,
{
 params:{name:search,
 sort,
 page:page,
 limit:30,
 brand:brand,
 ram:ram,
 os:os,
 disk:disk
  }
}
)
console.log(brand)
setProducts(response.data.data)
setPages(response.data.pages)

return await response.data.data
 }catch(e){
  console.log(e.message)
  return null
 }

 
}


const{isLoading, isError,isPreviousData,data}= useQuery(["products", search, sort,page,brand,ram,os,disk],()=> fetchProducts(search, sort,page,brand,ram,os,disk),{
  keepPreviousData:true
})
const nextPage= ()=>setPage((prev)=>prev+1)
const prevPage= ()=>setPage((prev)=>prev-1)
const pagesArray= Array(4).fill().map((_,i)=>i+1)
const navButtons= (
<nav>
  <button onClick={prevPage} disabled={isPreviousData || page===1}>
    &lt;&lt;
  </button>
  {pagesArray.map((pg)=><PageButton key={pg} pg={pg} setPage={setPage} isPreviousData={isPreviousData}/>)}
<button onClick={nextPage} disabled={isPreviousData || page===2}>
    &gt;&gt;
  </button>
</nav>

)
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
    <div className='relative top-20 flex flex-col'>
       <Cart/>
       <div className="relative lg:top-[9rem] xlg:top-[9rem] sm:top-[9rem] md:top-[9rem] top-[9rem]  flex justify-center">
{navButtons}
</div>
   
   
   
     
<div className='w-[100vw] flex pl-10 items-center px-2 lg:justify-start xlg:justify-start sm:justify-start md:justify-start justify-start flex-wrap   relative lg:top-[200px] xlg:top-[200px] sm:top-[200px] md:top-[200px] top-[200px]'>
 
  {
    data.map((item)=>{
      return   <div key={item.image} className=" lg:w-[8rem] xlg:w-[8rem] my-5 sm:w-[5rem] md:w-[4rem] w-[5rem] h-[250px] flex flex-col items-center  bg-white mx-1 lg:mx-3 xlg:mx-3 text-primary text-center">
     <img className='w-full h-14' src={item.image} alt="item" />
  
     <h5 className='h-20 text-xs '>{item.name}</h5>    
        <h6 className="h-20  text-xs">
        Ksh {item.price}
        </h6>
        <p className='text-xs h-10'>Rating 4.5(20)
       
        </p>
        <Link to={`/${item._id}`} className="bg-sea-500">
        <p className="text-xs">View more</p>
        </Link>
       
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