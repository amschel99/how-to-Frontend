import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate"
import { useNavigate, useLocation } from "react-router-dom";
import {faPlus,faMinus,faTrash,faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../pages/account/account.css"
import logo from "../components/images/brand.svg"
import{Link} from "react-router-dom"
import {  useDispatch, useSelector} from 'react-redux'
import {itemRemoved,incrementQuantity} from "../feautures/cart/cartSlice"


import "./css/order.css"


const Order = () => {
      const dispatch= useDispatch()

      const removeFromCart= (product)=>{
    const{name, price,image}=product
 
 
dispatch((itemRemoved({name,price,image})))


  }

    const incrementItem= (product)=>{
    const{name, price,image}=product
    console.log('hey I clicked you')
 
 
dispatch((incrementQuantity({name,price,image})))


  }



    
    const cart= useSelector((state)=>state.cart)
    const PHONE_REGEX=/^(?:254|\+254|0)?((?:(?:7(?:(?:[01249][0-9])|(?:5[789])|(?:6[89])))|(?:1(?:[1][0-5])))[0-9]{6})$/
    const [number, setNumber]=useState("")
const{totalItems, totalPrice,items}=cart
const [loader, setLoader]=useState("")

    const [errMsg, setErrMsg] = useState('');
    const [numberFocus, setNumberFocus] = useState(false);


const [user, setUser]= useState("")
   const [validNumber, setValidNumber] = useState(false);


 
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();
       useEffect(() => {
        setValidNumber(PHONE_REGEX.test(number));
    }, [number])

    const makeOrder= async ()=>{

     
            
        // if button enabled with JS hack
          
        const v1 = PHONE_REGEX.test(number);
    
        if (!v1 ) {
            setErrMsg("Invalid Entry");
            return;
        }
        
try{
  setLoader("check your phone for an Mpesa prompt")

const response= await axiosPrivate.post("/order", {products:items,price:totalPrice,quantity:totalItems},{
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                })
                console.log(response.status)
              setLoader("Order succesful...")
              setNumber("")
}
catch(error){
    console.log(error.message +error.status)
    setLoader("there was an error")

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
<Link to="/">
<img src={logo} className="lg:h-20 xlg:h-20 sm:h-12 md:h-12 h-12 cursor-pointer" alt="logo"/>
</Link>

<h1>Welcome {user}</h1>
</nav>
        <div className="the-cart">
            <table className="mt-4 lg:w-[70vw] xlg:w-screen sm:w-[95vw] md:w-[95vw] w-[95vw] ">

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
<td className="cursor-pointer"
onClick={()=>incrementItem(item)}
>
 <FontAwesomeIcon className="text-primary" icon={faPlus}

 />   
    
</td>
<td className="cursor-pointer">
     <FontAwesomeIcon className="text-primary" icon={faMinus}/>   
    
</td>
<td className="text-crimson-300 cursor-pointer"
onClick={()=>removeFromCart(item)}
>
     <FontAwesomeIcon className="text-primary" icon={faTrash}/>   
    
</td>
    </tr>
})}



            </table>

            <table className="bg-white text-sea-500 text-xs my-4 sm:w-[70vw] md:w-[70vw] lg:w-[50vw] xlg:w-[50vw] w-[70vw]">

                <tr>
    <td>Item's price</td>
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

  <input
                            type="text"
                            id="number"
                            onChange={(e) => setNumber(e.target.value)}
                         
                            required
                            //aria-invalid={validNumber ? "false" : "true"}
                            aria-describedby="pwdnote"
                            placeholder="mpesa number"
                            onFocus={() => setNumberFocus(true)}
                            onBlur={() => setNumberFocus(false)}
                             className={`text-primary placeholder-secondary`}
                        />
                         <p id="pwdnote" className={numberFocus && !validNumber ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                         <br />
                        Number must be a valid Safaricom number
                        </p>

            
            <button className={`checkout disabled:opacity-25 `}
disabled={!validNumber?true:false}
            onClick={()=>makeOrder()}
           
            >PROCEED TO CHECKOUT</button>
            <p>{loader}</p>
             <button className="chec"></button>

        </div>

       
        </>
    );
};
export default Order