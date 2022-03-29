import React, { useEffect, useState } from 'react';
import './Login.css'
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import NavSection from '../Shared/NavSection/NavSection'
import TopSection from '../Shared/TopSection/TopSection'
import Footer from '../Shared/Footer/Footer'
import { Link } from 'react-router-dom';

const ComponentName = () => {



    const [loginData, setLoginData] = useState({});

    
    const { loginUser, signInWithGoogle} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password , location, history);

        localStorage.setItem("email", loginData.email)
}




    return (
        <div>
            <div className='p-i'>
                <TopSection />
                <NavSection />
                <div className='container'>
                    <h1 className='p-i-h1'>Login</h1>
                    
                </div>
            </div>

            <div className='formL container'>
                <h4 className='mis-h1 '>Login</h4>

                <form onSubmit={handleLoginSubmit} className="login-form">                                   

                               
                                    <input className="log-input mt-4" type="email" name="email" onChange={handleOnChange} placeholder="Email Address" />
                                    <br />
                                    <input className="log-input mt-4" type="password" name="password" onChange={handleOnChange} placeholder="Password" />
                                    <br />

                                    <Button className="log-b mt-3 btn" type="submit" value="Submit">Login</Button>
                                  
                                    <p className="mt-3 arr">Don't Have An Account?<span className="regis ms-2"><Link to="/register">Register</Link></span></p>
                                </form>
               


            </div>
            <Footer/>
        </div>
    );
};

export default ComponentName;