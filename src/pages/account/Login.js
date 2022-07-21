import { useRef, useState, useEffect} from 'react';

import "./account.css"
import {Link, useNavigate, useLocation} from "react-router-dom"
import { useAuth } from '../../hooks/useAuth';


import axios from 'axios';
const LOGIN_URL ="https://jyd-shoppers.herokuapp.com/api/v1/users/login"

const Login = () => {
    const { setAuth, persist, setPersist } =useAuth()

const navigate= useNavigate()
const location= useLocation()
const from= location.state?.from?.pathname || "/"

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
 
    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
              {email:user, password:pwd}, {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
           const userName=response?.data?.userExists;
           console.log(userName)
            setAuth({ user, pwd,  accessToken });
            setUser('');
            setPwd('');
navigate(from,{replace:true})
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Email or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }
    const togglePersist = () => {
        setPersist(prev => !prev);
    }

    useEffect(() => {
        localStorage.setItem("persist", persist);
    }, [persist])

    return (
        <div className='div'>
           
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Email:</label>
                        <input
                        width="50px"
                        className='input-login text-primary placeholder-secondary'
                            type="email"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                         className='input-login text-primary placeholder-secondary'
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button  className='input-login'>Sign In</button>
                       <div className="persistCheck">
                    <input
                        type="checkbox"
                        id="persist"
                        onChange={togglePersist}
                        checked={persist}
                    />
                    <label htmlFor="persist">Trust This Device</label>
                </div>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                            {/*put router link here*/}
                        <Link to="/account">Sign Up</Link>
                        </span>
                    </p>
                </section>
            
        </div>
    )
}

export default Login