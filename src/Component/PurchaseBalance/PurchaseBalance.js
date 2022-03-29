import React, { useEffect, useRef, useState } from 'react';
import './PurchaseBalance.css'
import NavSection from '../Shared/NavSection/NavSection'
import TopSection from '../Shared/TopSection/TopSection'
import Footer from '../Shared/Footer/Footer'
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const ComponentName = () => {

    const { user } = useAuth()

    const [getAmount, setGetAmount] = useState({})
    const [totalExpance, setTotalExpance] = useState(0)

    let currentBlance = Number(getAmount.amount) - Number(totalExpance);
    const amountRef = useRef();
    const emailRef = useRef();
    let email = localStorage.getItem("email")


    const handleAddExpense = e => {
        const amount = amountRef.current.value;
        const ToEmail = emailRef.current.value;


        const newExpense = { amount, ToEmail, formEmail: email };


        fetch(`https://mlmserver.herokuapp.com/purchesHistory`, {
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


    function givMoount() {
        fetch(`https://mlmserver.herokuapp.com/purches-balance/${email}`)
            .then(res => res.json())
            .then(data => {
                setGetAmount({
                    amount: data.givAmount
                })
            }
            )
    }
    function expance() {
        fetch(`https://mlmserver.herokuapp.com/purchesHistory`)
            .then(res => res.json())
            .then(data => {
                let total = data.reduce((accumulator, currentValue) => {
                    return Number(accumulator) + Number(currentValue.amount)
                }, 0)
                setTotalExpance(total)
            }
            )
    }
    useEffect(() => {
        givMoount()
        expance()
    }, []);






    return (
        <div className='pbb'>
            <div className='p-b'>
                <TopSection />
                <NavSection />
                <div className='container'>
                    <h1 className='p-i-h1'>Purchase Balance</h1>
                    
                </div>
            </div>
            <div className='container mt-5 mb-5'>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>

                            <th colSpan={3}>Purchase Balance</th>



                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <td colSpan={2}>Particulars</td>
                            <td>Amount</td>

                        </tr>
                        <tr>

                            <td rowSpan={1}>Money Inflow</td>
                            <td>Transfer In from Company</td>
                            <td>{getAmount.amount}</td>

                        </tr>
                        <tr>

                            <td colSpan={2}>Total Expense</td>
                            <td>{totalExpance}</td>

                        </tr>
                        <tr>

                            <td colSpan={2}>Current Balance</td>
                            <td>{currentBlance}</td>

                        </tr>
                    </tbody>
                </Table>
            </div>


            <form onSubmit={handleAddExpense} className="container pbm mb-5">

                <input required className="up-input mt-3" ref={emailRef} type="email" placeholder="Email" />
                <br />
                <input required className="up-input mt-3" ref={amountRef} type="number" placeholder="Amount" />
                <br />
                <input className="up-b mt-3" type="submit" value="Submit" />

            </form>


            <Footer />
        </div>
    );
};

export default ComponentName;