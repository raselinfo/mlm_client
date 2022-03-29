import React, { useRef } from 'react';
import './DHome.css'

const ComponentName = () => {
    let [dashboardInfo, setDashboardInfo] = React.useState({})
    let { totalClient,
        totalActiveClient,
        paymentRecived,
        withdrawRequest } = dashboardInfo
    React.useEffect(() => {
        fetch('https://mlmserver.herokuapp.com/dashboardSamary')
            .then(res => res.json())
            .then(data => {
                setDashboardInfo(data)
            })
    }, [])



    const amountRef = useRef();
    const emailRef = useRef();
    const noticeRef = useRef();
    const textRef = useRef();



    const handleAddExpense = e => {
        const givAmount = amountRef.current.value;
        const email = emailRef.current.value;


        const newExpense = { givAmount, email };


        fetch('https://mlmserver.herokuapp.com/purches-balance', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(newExpense)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Add Successfully');
                    e.target.reset();
                }
            })


        e.preventDefault();
    }


    const handleAddNotice = e => {
        const noticeTitle = noticeRef.current.value;
        const text = textRef.current.value;


        const newNotice = { noticeTitle, text };


        fetch('https://mlmserver.herokuapp.com/notice', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(newNotice)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Notice Add Successfully');
                    e.target.reset();
                }
            })


        e.preventDefault();
    }


    return (
        <div>
            <div className='d-g mt-5'>
                <div className='dh-box b1'>
                    <h5>TOTAL CLIENTS</h5>
                    <h1>{totalClient}</h1>
                </div>
                <div className='dh-box b2'>
                    <h5>ACTIVE CLIENTS</h5>
                    <h1>{totalActiveClient}</h1>
                </div>
                <div className='dh-box b3'>
                    <h5>PAYMENT RECIVED</h5>
                    <h1>{paymentRecived}</h1>
                </div>
                <div className='dh-box b4'>
                    <h5>WITHDRAW REQUEST</h5>
                    <h1>{withdrawRequest}</h1>
                </div>
                <div className='dh-box'>

                </div>
            </div>
            <div className='add-b'>
                <h4>Add Balance</h4>
                <div className=''>
                    <form onSubmit={handleAddExpense} className="container mb-5">

                        <input className="up-input mt-3" ref={emailRef} type="email" placeholder="Email" />
                        <br />
                        <input className="up-input mt-3" ref={amountRef} type="number" placeholder="Amount" />
                        <br />
                        <input className="up-b mt-3" type="submit" value="Add" />

                    </form>
                </div>
            </div>

            <div className='add-b'>
                <h4>Add Notice</h4>
                <div className=''>
                    <form onSubmit={handleAddNotice} className="container mb-5">

                        <input className="up-input mt-3" ref={noticeRef} placeholder="Notice" />
                        <br />
                        <textarea className="up-input text mt-3" ref={textRef} placeholder="write massage" />
                        <br />
                        <input className="up-b mt-3" type="submit" value="Post" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default ComponentName;