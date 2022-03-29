import React, { useEffect, useState } from 'react';
import './IncomeReport.css'
import NavSection from '../Shared/NavSection/NavSection'
import TopSection from '../Shared/TopSection/TopSection'
import Footer from '../Shared/Footer/Footer'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ComponentName = () => {
    let [incomReport, setIncomReport] = useState([])
    let { totalPaid,
        dailyPaid,
        totalSponsorIncome,
        totalGeneration,
        totalWithdraw } = incomReport
       

    totalPaid = Math.floor(totalPaid)
    dailyPaid = Math.floor(dailyPaid)
    totalSponsorIncome = Math.floor(totalSponsorIncome)
    totalGeneration = Math.floor(totalGeneration)
    totalWithdraw = Math.floor(totalWithdraw)

    useEffect(() => {
        let email = localStorage.getItem("email")
        fetch(`http://localhost:5000/incomReport/${email}`)
            .then(res => res.json())
            .then(data => {
                setIncomReport(data)
            })
    }, [])

    let totalIncome = (dailyPaid + totalSponsorIncome + totalGeneration)

    let currentBalance = totalIncome - totalWithdraw

    return (
        <div className='inc'>
            <div className='i-r'>
                <TopSection />
                <NavSection />
                <div className='container'>
                    <h1 className='p-i-h1'>Income Report</h1>

                </div>
            </div>
            <div className='container mt-5 mb-5'>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th colSpan={3}>Income Report</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>sl</td>
                            <td colSpan={2}>Particulars</td>
                            <td>Amount</td>

                        </tr>
                        <tr>
                            <td>1</td>
                            <td rowSpan={6}>Income</td>
                            <td> <Link className='linn' to='/total-paid-balance-by-company'>Total Paid Balance by Company</Link></td>
                            <td>{totalPaid}</td>

                        </tr>
                        <tr>
                            <td></td>

                            <td>Daily Paid Balance by Company</td>
                            <td>{dailyPaid}</td>
                            

                        </tr>

                        <tr>
                            <td></td>

                            <td>Sponsor income from Company</td>
                            <td>{totalSponsorIncome}</td>
                        </tr>

                        <tr>
                            <td></td>

                            <td>Generation income from Company</td>
                            <td>{totalGeneration}</td>

                        </tr>

                        <tr>
                            <td></td>

                            <td>Monthly Salary from Company</td>
                            <td>0.00</td>

                        </tr>

                        <tr>
                            <td></td>

                            <td>Monthly Agent income from Company</td>
                            <td>0.00</td>

                        </tr>


                        <tr>
                            <td></td>
                            <td colSpan={2}>total income</td>
                            <td>{totalIncome}</td>

                        </tr>
                        <tr>
                            <td>2</td>
                            <td rowSpan={1}>Expense</td>
                            <td>Withdrawal</td>
                            <td>{totalWithdraw}</td>

                        </tr>
                        <hr />

                        <tr>
                            <td></td>
                            <td colSpan={2}>Current Balance</td>
                            <td>{currentBalance}</td>

                        </tr>
                    </tbody>
                </Table>
            </div>
            <Footer />
        </div>
    );
};

export default ComponentName;