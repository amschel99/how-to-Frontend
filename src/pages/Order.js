import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate"
import { useNavigate, useLocation } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import "./css/order.css"
import { useSelector } from "react-redux";

const Order = () => {

const styles={
     display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    color:'red',
    border:"2px solid green",
    with:"100vw",
    minHeight:"400px"
}
const image={
    width:"30px",
    marginLeft:"10px",
    marginRight:"10px"
}


    
    const cart= useSelector((state)=>state.cart)
const{totalItems, totalPrice,items}=cart
    const [orders, setOrders] = useState();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();
     const logout= useLogout()

 
   const signOut= async ()=>{
    await  logout()
 
    navigate("/")
  }

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
        {/*<button className="sign-out" onClick={signOut}>SIGN OUT</button> */} 
        </div>
        <div className="shopping-bag">

{totalItems<1 && <h1>No products in your cart</h1>}
{totalItems>=1 && 

items.map((item)=>{
    return <article
  
    className="item-cart"
    style={{
            marginLeft:"20px",
            marginRight:"20px",
       
            width:"60vw",
            display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    color:'red',
   
 
    minHeight:"200px"
        }}
     key={item.name}>
        <img  src={item.image}
        style={{
            marginLeft:"10px",
            marginRight:"10px",
            width:"100px"
        }}
         alt="product"/>
        <p className="name">{item.name}</p>
        <h3 style={{
            marginLeft:"20px",
            marginRight:"20px"
        }}>{item.price}$</h3>
        {!item.quantity && <h5>1</h5>}
        {
            item.quantity && <h5>{item.quantity}</h5>
        }
    </article>
})

}

        </div>
        <article>
             
            <h2>Orders  List</h2>
            {orders?.length
                ? (
                    <ul>
                        {orders.map((order, i) => <li key={i}>{order?.name}</li>)}
                    </ul>
                ) : <p>No orders to display</p>
            }
        </article>
        </>
    );
};
export default Order