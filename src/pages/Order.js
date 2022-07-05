import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate"
import { useNavigate, useLocation } from "react-router-dom";

import "./css/order.css"
import { useSelector } from "react-redux";

const Order = () => {



    
    const cart= useSelector((state)=>state.cart)
const{totalItems, totalPrice,items}=cart


    const [orders, setOrders] = useState();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();
     

 

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getOrders = async () => {
            try {
                const response = await axiosPrivate.get('/orders', {
                    signal: controller.signal
                });
                console.log(response.data);
                isMounted && setOrders(response.data);
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
            <h3 className="page-title">Shopping Cart</h3>
  
        </div>
        <div className="the-cart">
            <table>
<tr>
    <td>
        <h6>ITEM</h6>
    </td>
    <td>
      <h6>PRICE</h6>
    </td>
    <td>
        <h6>
            QUANTITY
        </h6>
        </td>
        <td>
            +
        </td>
         <td>
            -
        </td>
  
</tr>
{items.map((item)=>{
    return <tr>
<td>
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
    <td>iTEM'S TOTAL PRICE</td>
    <td>{totalPrice}</td>
</tr>
<tr>
    <td>Shipping cost</td>
    <td>10</td>
</tr>
<tr>
    <td>TOTAL PRICE</td>
    <td>{totalPrice+10}</td>
</tr>

            </table>
            <button className="checkout">PROCEED TO CHECKOUT</button>

        </div>

       
        </>
    );
};
export default Order