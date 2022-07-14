import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate"
import { useNavigate, useLocation } from "react-router-dom";

import "./css/order.css"
import { useSelector } from "react-redux";

const Order = () => {



    
    const cart= useSelector((state)=>state.cart)
const{totalItems, totalPrice,items,}=cart

const [user, setUser]= useState("")


 
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();
     

  useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getOrders = async () => {
            try {
                const response = await axiosPrivate.get('/user', {
                    signal: controller.signal
                });
                console.log(response.data);
                isMounted && setUser(response.data);
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
        <div className="nav-item">
            <h1>Hello {user}</h1>
            <h3 className="page-title">Shopping Cart</h3>
  
        </div>
        <div className="the-cart">
            <table>
<tr>
    <td>
        <h6 style={{color:"#180018"}}>ITEM</h6>
    </td>
    <td>
      <h6  style={{color:"#180018"}}>PRICE</h6>
    </td>
    <td>
        <h6  style={{color:"#180018"}}>
            QUANTITY
        </h6>
        </td>
        <td  style={{color:"#180018"}}>
            +
        </td>
         <td  style={{color:"#180018"}}>
            -
        </td>
  
</tr>
{items.map((item)=>{
    return <tr>
<td>
    <img width="50px" src={item.image} alt="product"/>
    <h6>{item.name}</h6>

</td>
<td>
    <h6>{item.price}</h6>
    
</td>
<td>
    {!item.quantity && <h6>1</h6>}
  {item.quantity && <h6>{item.quantity}</h6>}
    
</td>
<td>
    <button>+</button>
    
</td>
<td>
    <button>-</button>
    
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
           
            >PROCEED TO CHECKOUT</button>
             <button className="chec"></button>

        </div>

       
        </>
    );
};
export default Order