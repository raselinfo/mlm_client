import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import NavSection from '../../Shared/NavSection/NavSection'
import TopSection from '../../Shared/TopSection/TopSection'

const ComponentName = () => {
    let [user,setUser]=useState({})
    let email = localStorage.getItem("email")
    useEffect(() => {
        fetch(`https://mlmserver.herokuapp.com/singleClient/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUser(data)
            })
    }, [])

    return (
        <div>
            <div className='i-r'>
                <TopSection />
                <NavSection />
                <div className='container'>
                    <h1 className='p-i-h1'>Total Paid Balance Details</h1>
                </div>
            </div>

            <div className='container mt-5 mb-5'>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>From</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{user.date}</td>
                            <td>Company</td>
                            <td>{user.totalPaid}</td>                            
                        </tr>                       
                    </tbody>
                </Table>
            </div>

        </div>
    );
};

export default ComponentName;