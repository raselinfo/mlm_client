import React, { useEffect, useState } from 'react';
import './ReferList.css'
import NavSection from '../Shared/NavSection/NavSection'
import TopSection from '../Shared/TopSection/TopSection'
import Footer from '../Shared/Footer/Footer'
import { Table } from 'react-bootstrap';

const ComponentName = () => {
    let email = localStorage.getItem("email") || null
    let [referalUsers,setreferalUser]=useState([])
    useEffect(() => {
        fetch(`https://mlmserver.herokuapp.com/referList/${email}`)
            .then(res => res.json())
            .then(data => {
                setreferalUser(data)
            })
    }, [])




    return (
        <div>
            <div className='r-l'>
                <TopSection />
                <NavSection />
                <div className='container'>
                    <h1 className='p-i-h1'>Refer List</h1>
                    
                </div>
            </div>
            <div className='container mt-5 mb-5'>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Rank</th>
                            <th>Type</th>
                            <th>Date</th>

                        </tr>
                    </thead>
                    <tbody>
                        {referalUsers.map(user=>{
                            return <tr>
                                <td>{user.name}</td>
                                <td>Member</td>
                                <td>{user.accountType}</td>
                                <td>{user.date}</td>
                            </tr>
                        })}                  
                    </tbody>
                </Table>
            </div>
            <Footer />
        </div>
    );
};

export default ComponentName;