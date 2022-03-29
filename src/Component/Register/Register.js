import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import NavSection from '../Shared/NavSection/NavSection'
import TopSection from '../Shared/TopSection/TopSection'
import Footer from '../Shared/Footer/Footer'
import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';

const ComponentName = () => {


    const [loginData, setLoginData] = useState({});

    const { registerUser } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }


    const handleLoginSubmit = e => {
        e.preventDefault();
        if (loginData.password !== loginData.password2) {
            alert('Your Password Did not Matched');
            return
        }

        registerUser(loginData.email, loginData.password, loginData.name, location, history);
        localStorage.setItem("email", loginData.email)

    }


    return (
        <div>


            <div className='p-i'>
                <TopSection />
                <NavSection />
                <div className='container'>
                    <h1 className='p-i-h1'>Register</h1>

                </div>
            </div>

            <div className='formL container'>
                <h4 className='mis-h1 '>Register</h4>

                <form onSubmit={handleLoginSubmit} className="login-form">
                    <input className="log-input mt-2" name="name" onChange={handleOnChange} placeholder="Name" />
                    <br />
                    <input className="log-input mt-4" type="email" name="email" onChange={handleOnChange} placeholder="Email Address" />

                    <input className="log-input mt-4" type="password" name="password" onChange={handleOnChange} placeholder="your Password" />
                    <p>Minimum 8 Character password required</p>

                    <input className="log-input mt-4" type="password" name="password2" onChange={handleOnChange} placeholder="Re-Type your Password" />
                    <br />
                    <input className="log-b mt-3 btn" type="submit" value="Submit" />

                    <p className=" mt-3  arr">All Ready Registered?<span className="regis ms-2"><Link to="/login">Please Login</Link></span></p>
                </form>


            </div>
            <Footer />
        </div>
    );
};

export default ComponentName;