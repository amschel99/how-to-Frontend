import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate"
import { useNavigate, useLocation } from "react-router-dom";
import {faPlus,faMinus,faTrash,faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../pages/account/account.css"
import logo from "../components/images/brand.svg"


import "./css/order.css"
import { useSelector } from "react-redux";

const Order = () => {



    
    const cart= useSelector((state)=>state.cart)
    const PHONE_REGEX=/^(?:254|\+254|0)?((?:(?:7(?:(?:[01249][0-9])|(?:5[789])|(?:6[89])))|(?:1(?:[1][0-5])))[0-9]{6})$/
    const [number, setNumber]=useState("")
const{totalItems, totalPrice,items}=cart

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

    const makeOrder= async (e)=>{

        
        e.preventDefault();
            
        // if button enabled with JS hack
          
        const v1 = PHONE_REGEX.test(number);
    
        if (!v1 ) {
            setErrMsg("Invalid Entry");
            return;
        }
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

            <table className="bg-white text-sea-500 text-xs my-4">

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
                            type="number"
                            id="number"
                            onChange={(e) => setNumber(e.target.value)}
                            value={number}
                            required
                            aria-invalid={validNumber ? "false" : "true"}
                            aria-describedby="pwdnote"
                            placeholder="mpesa number"
                            onFocus={() => setNumberFocus(true)}
                            onBlur={() => setNumber(false)}
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
             <button className="chec"></button>

        </div>

       
        </>
    );
};
export default Order