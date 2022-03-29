import React, { useEffect, useState } from 'react';
import './PersonalInfo.css'
import NavSection from '../Shared/NavSection/NavSection'
import TopSection from '../Shared/TopSection/TopSection'
import Footer from '../Shared/Footer/Footer'
import { Table } from 'react-bootstrap';

const ComponentName = () => {
    let [userInfo, setUserInfo] = useState({})
    let {
        accountType,
        date,
        dateOfBirth,
        district,
        division,
        email,
        fatherName,
        isValidUser,
        motherName,
        name,
        nidBirth,
        nomineeName,
        phoneNumber,
        post,
        profession,
        profilePic,
        referIncom,
        treeId,
        referId,
        upzilla
    } = userInfo;
    let userEmail = localStorage.getItem("email")
    useEffect(() => {
        fetch(`https://mlmserver.herokuapp.com/singleClient/${userEmail}`)
            .then(res => res.json())
            .then(data => {
               
                setUserInfo(data)
            })
    }, [])
    return (
        <div className='pi-bc'>
            <div className='p-i'>
                <TopSection />
                <NavSection />
                <div className='container'>
                    <h1 className='p-i-h1'>Personal Information</h1>
                    
                </div>
            </div>
            <div className='pi-table mt-4 mb-5 container'>

                <div className='pi-top'>
                    <img className='pi-i' src={profilePic} alt='' />
                </div>


                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Personal Information</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>1</td>
                            <td>Name</td>
                            <td>{name}</td>

                        </tr>
                        <tr>
                            <td>2</td>
                            <td>ID Status</td>
                            <td>{isValidUser ? "Active" : "Not Active"}</td>

                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Refer Id</td>
                            <td>{treeId}</td>
                        </tr>

                        <tr>
                            <td>4</td>
                            <td>Father Name</td>
                            <td>{fatherName}</td>

                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Mother</td>
                            <td>{motherName}</td>

                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Mobile</td>
                            <td>{phoneNumber}</td>

                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Date of Birth</td>
                            <td>{dateOfBirth}</td>

                        </tr>

                        <tr>
                            <td>8</td>
                            <td>National ID</td>
                            <td>{nidBirth}</td>

                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Email</td>
                            <td>{email}</td>

                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Address</td>
                            <td>{`${district} , ${post} , ${division}`}</td>

                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Refer to you</td>
                            <td>{referId ? referId : "(Admin)"}</td>

                        </tr>

                        <tr>
                            <td>12</td>
                            <td>Join Date</td>
                            <td>{date}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <Footer />
        </div>
    );
};

export default ComponentName;