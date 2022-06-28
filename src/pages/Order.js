import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate"
import { useNavigate, useLocation } from "react-router-dom";

const Order = () => {
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
    );
};
export default Order