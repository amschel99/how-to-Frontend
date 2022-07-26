import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate"
import { useNavigate, useLocation } from "react-router-dom";
import {faPlus,faMinus,faTrash} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../components/Navbar"
import logo from "../components/images/brand.svg"


import "./css/order.css"
import { useSelector } from "react-redux";

const Order = () => {



    
    const cart= useSelector((state)=>state.cart)
const{totalItems, totalPrice,items}=cart


const [user, setUser]= useState("")


 
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();

    const makeOrder= async ()=>{
try{
const response= await axiosPrivate.post("/order", {products:items,price:totalPrice,quantity:totalItems},{
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                })
                console.log(response.status)
}
catch(error){
    console.log(error.message)

}

    }
     

  useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getOrders = async () => {
            try {
                const response = await axiosPrivate.get('/user', {
                    signal: controller.signal
                });
                console.log(response.data.data);
                isMounted && setUser(response.data.data);
            } catch (err) {
                console.error(err +"this is really bad");
                navigate('/login', { state: { from: location }, replace: true });
            }
        }

        getOrders();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [axiosPrivate, location, navigate])

       


    return (
        <>
     <nav className='w-screen z-50 h-20 bg-primary flex items-center justify-evenly ' >

<img src={logo} className="lg:h-20 xlg:h-20 sm:h-12 md:h-12 h-12 cursor-pointer" alt="logo"/>
<h1>Welcome {user}</h1>
</nav>
        <div className="the-cart">
            <table className="mt-4 lg:w-[70vw] xlg:w-screen sm:w-screen md:w-screen w-screen ">

{items.map((item)=>{
    return <tr className="bg-white border flex justify-evenly items-center">
<td className="flex flex-col  items-center">
    <img width="20px" src={item.image} alt="product"/>
    <h6 className="text-primary text-xs">{item.name}</h6>
</td>
<td className=" text-start w-4">
    <h6 className="text-secondary text-xs">KSH {item.price}</h6>
    
</td>
<td className="text-secondary bold w-4">
    {!item.quantity && <h6>1</h6>}
  {item.quantity && <h6>{item.quantity}</h6>}
    
</td>
<td>
 <FontAwesomeIcon className="text-primary" icon={faPlus}/>   
    
</td>
<td>
     <FontAwesomeIcon className="text-primary" icon={faMinus}/>   
    
</td>
<td className="text-crimson-300">
     <FontAwesomeIcon className="text-primary" icon={faTrash}/>   
    
</td>
    </tr>
})}



            </table>

            <table>

                <tr>
    <td>ITEM'S TOTAL PRICE</td>
    <td>{totalPrice}$</td>
</tr>
<tr>
    <td>Shipping cost</td>
    <td>0$</td>
</tr>
<tr>
    <td>TOTAL PRICE</td>
    <td>{totalPrice+0}$</td>
</tr>

            </table>
            <button className="checkout"
            onClick={()=>makeOrder()}
           
            >PROCEED TO CHECKOUT</button>
             <button className="chec"></button>

        </div>

       
        </>
    );
};
export default Order