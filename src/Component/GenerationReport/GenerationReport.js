import React, { useEffect, useState } from 'react';
import './GenerationReport.css'
import NavSection from '../Shared/NavSection/NavSection'
import TopSection from '../Shared/TopSection/TopSection'
import Footer from '../Shared/Footer/Footer'
import { Table } from 'react-bootstrap';

const ComponentName = () => {
    let [generationUser, setGenerationUser] = useState([])
    let amount;
    let totoal = 0;
    useEffect(() => {
        let email = localStorage.getItem("email")
        fetch(`https://mlmserver.herokuapp.com/referList/${email}`)
            .then(res => res.json())
            .then(data => {
                setGenerationUser(data)
            })
    }, [])

    return (
        <div>
            <div className='g-p'>
                <TopSection />
                <NavSection />
                <div className='container'>
                    <h1 className='p-i-h1'>Generation Commission</h1>
                    
                </div>
            </div>
            <div className='container mt-5 mb-5'>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>From</th>
                            <th>Amount</th>
                            <th>Income</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            generationUser.map((user, index) => {
                                amount = Number(user.accountType.split("/")[1])
                                totoal += (amount * 1) / 100
                                return <tr key={index}>
                                    <td >{user.date}</td>
                                    <td>{user.name}</td>
                                    <td>{amount}</td>
                                    <td>{(amount * 1) / 100}</td>
                                </tr>
                            })
                        }
                        <hr />
                        <tr>
                            <th colSpan={3}>Total</th>

                            <th>{totoal}</th>

                        </tr>
                    </tbody>

                </Table>
            </div>
            <Footer />
        </div>
    );
};

export default ComponentName;