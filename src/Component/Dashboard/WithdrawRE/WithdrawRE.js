import React, { useEffect, useState } from 'react';
import './WithdrawRE.css'

const ComponentName = () => {


    const [withdrawR, setWithdrawR] = useState([]);

    const [isClear, setIsClear] = useState(false)

    useEffect(() => {
        fetch('https://mlmserver.herokuapp.com/withdraw-request')
            .then(res => res.json())
            .then(data => {
               
                setWithdrawR(data)
            })
    }, [isClear])


    const clearWithdraw = (id) => {
        fetch('https://mlmserver.herokuapp.com/clearwithdraw', {
            method: "PUT",
            body: JSON.stringify({ id }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(data => {
               
                setIsClear(!isClear)
            })
    }


    return (
        <div>
            <h2>
                Withdraw Request
            </h2>
            {
                withdrawR.map((withdraw, index) => {
                    return <div key={index} className='user-r-box'>
                        <h6>Name: {withdraw.name}</h6>
                        <h6>Email: {withdraw.email}</h6>
                        <h6>Current Balance:<mark>{withdraw.currentBlance}</mark> </h6>
                        <h6>Request Amount: {withdraw.amount}</h6>
                        <h6>Withdraw Type: {withdraw.withdrawOption}</h6>
                        <h6>Account Number: {withdraw.accountNumber}</h6>
                        <h6>Agent Name: {withdraw.agentUserName}</h6>
                        <h6>Total Request Amount: {withdraw.total}</h6>
                        {
                            (withdraw.pending===!false) && <button onClick={() => clearWithdraw(withdraw._id)} className="up-b bbm mt-3">Clear</button>
                        }
                    </div>
                })
            }
        </div>
    );
};

export default ComponentName;