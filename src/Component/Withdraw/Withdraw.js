import React, { useEffect, useRef, useState } from 'react';
import './Withdraw.css'
import NavSection from '../Shared/NavSection/NavSection'
import TopSection from '../Shared/TopSection/TopSection'
import Footer from '../Shared/Footer/Footer'
import WBill from './WBill/WBill'
import useAuth from '../../hooks/useAuth';

const ComponentName = () => {
    let [currentBlance, setCurrentBlance] = useState(0)
    let userEmail = localStorage.getItem("email")
    useEffect(() => {
        fetch(`https://mlmserver.herokuapp.com/singleClient/${userEmail}`)
            .then(res => res.json())
            .then(data => {
                setCurrentBlance(data.currentBalance)
            })
    }, [])


    const { user, } = useAuth();
    const [wic, setWic] = useState([]);
    const nameRef = useRef();
    const amountRef = useRef();
    const optionRef = useRef();
    const acnRef = useRef();
    const aunRef = useRef();
    const emailRef = useRef()
    const dateRef = useRef()

    let email = localStorage.getItem("email")
    const handleWithdraeReq = e => {
        const name = nameRef.current.value;
        const amount = amountRef.current.value;
        const withdrawOption = optionRef.current.value;
        const accountNumber = acnRef.current.value;
        const agentUserName = aunRef.current.value;
        const date = dateRef.current.value


        const newWithdraw = { name, amount, withdrawOption, accountNumber, agentUserName, email, date };



        const newCart = newWithdraw;
        setWic(newCart);




        e.preventDefault();
        e.target.reset();
    }

    let date = new Date()



    return (
        <div>
            <div className='w-b'>
                <TopSection />
                <NavSection />
                <div className='container'>
                    <h1 className='p-i-h1'>Withdraw</h1>

                </div>
            </div>
            <div className='pu-from container flex'>
                <form onSubmit={handleWithdraeReq} className="up-form mt-5 withdraw">
                    <h4 className='up-h4'>Withdraw Request</h4>
                    <h4>Your Balance: {currentBlance} Taka </h4>
                    <h6 className='up-p mt-2'>Name</h6>
                    <input className="up-input" ref={nameRef} placeholder="Name" />
                    <br />
                    <h6 className='up-p mt-2'>Email</h6>
                    <input className="up-input" disabled defaultValue={email} type="email" ref={emailRef} />
                    <br />

                    <h6 className='up-p mt-2'>Amount</h6>
                    <input className="up-input" type="number" ref={amountRef} placeholder="Enter Amount" />
                    <br />

                    <h6 className='up-p mt-2'>Date</h6>
                    <input className="up-input" type="text" disabled defaultValue={date.toDateString()} ref={dateRef} />
                    <br />

                    <h6 className='up-p mt-2'>Option</h6>
                    <select className="up-input mt-1" aria-label="Select Option" ref={optionRef}>
                        <option selected>Select Option</option>
                        <option>Bkash</option>
                        <option>Nagad</option>
                    </select>
                    <h6 className='up-p mt-2'>Bkash/Nagad Ac Number</h6>
                    <input className="up-input" type="number" placeholder="Bkash/Nagad Ac Number" ref={acnRef} />
                    <br />
                    <h6 className='up-p mt-2'>Select Agent User Name</h6>
                    <select className="up-input mt-1" aria-label="Select Select Agent User Name" ref={aunRef}>
                        <option selected>Select Agent User Name</option>
                        <option>admin(Head Office)</option>
                    </select>
                    <input className="up-b mt-3" type="submit" defaultValue="Calculate" />
                </form>

                <div>
                    <WBill
                        wic={wic}
                        currentBlance={currentBlance}
                    ></WBill>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default ComponentName;