import React, { useEffect, useState } from 'react';
import './WithdrawReport.css'
import NavSection from '../Shared/NavSection/NavSection'
import TopSection from '../Shared/TopSection/TopSection'
import Footer from '../Shared/Footer/Footer'
import { Table } from 'react-bootstrap';

const ComponentName = () => {
    let [withdrawReport, setWithdrawReport] = useState([])
    let totalWithdraw = 0
    let email = localStorage.getItem("email")
    useEffect(() => {
        fetch(`https://mlmserver.herokuapp.com/withdrawStateu/${email}`)
            .then(res => res.json())
            .then(data => {
                setWithdrawReport(data)
            }
            )
    }, [])


    return (
        <div>
            <div className='w-b'>
                <TopSection />
                <NavSection />
                <div className='container'>
                    <h1 className='p-i-h1'>Withdraw Report</h1>
                    
                </div>
            </div>
            <div className='container mt-5 mb-5'>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Amount</th>
                            <th>Request</th>
                            <th>W.Charge</th>
                            <th>Withdraw</th>
                            <th>Balance</th>
                            <th>P.System</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            withdrawReport.map(report => {
                                totalWithdraw += report.total
                                return <tr>
                                    <td>{report.amount}</td>
                                    <td>{report.amount}</td>
                                    <td>{report.totalCost}</td>
                                    <td>{report.total}</td>
                                    <td>{(report.total + report.totalCost) - report.amount}</td>
                                    <td>{report.withdrawOption}</td>
                                    <td>{report.date}</td>
                                    <td>{!report.pending && "Clear"}</td>
                                </tr>
                            })
                        }


<hr />
                        <tr>
                            <td colSpan={2}>Total</td>
                            <td colSpan={2}></td>
                            <td colSpan={3}></td>
                            <td>{totalWithdraw}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <Footer />
        </div>
    );
};

export default ComponentName;