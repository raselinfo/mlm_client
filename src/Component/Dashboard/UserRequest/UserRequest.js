import React, { useEffect, useState } from 'react';
import './UserRequest.css'

const UserRequest = () => {
    const [isActive, setIsActive] = useState(false)
    const [userR, setUserR] = useState([]);
    useEffect(() => {
        fetch('https://mlmserver.herokuapp.com/client-request')
            .then(res => res.json())
            .then(data => setUserR(data))
    }, [isActive])


    // Send Message to the user

    const activeUser = (id, phoneNumber) => {
        // let USERNAME = "saiful682"
        let PASSWORD = 'lUCvYcYk94E41RH26okbUOYYMnf9wDUE86Ef6dO9'
        let number = `88${phoneNumber}`
        let message = `Congratulation! You have joined successfully and created an account in SB One Global Shop.Your balance paid by the company is also added in your account.Thank You.`

        fetch('https://mlmserver.herokuapp.com/activeuser', {
            method: 'PUT',
            body: JSON.stringify({
                id: id,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.message === 1) {
                    fetch(`https://api.sms.net.bd/sendsms?api_key=${PASSWORD}&msg=${message}&to=${number}`, {
                        method: "POST",
                    }).then(res => {
                        console.log(res)
                    })

                    // fetch(`https://66.45.237.70/api.php?username=${USERNAME}&password=${PASSWORD}&number=${number}&message=${message}`, {
                    //     method: "POST",
                    //     headers: {
                    //         "Content-Type": "application/x-www-form-urlencoded",
                    //     },
                    //     body: "",
                    //     redirect: 'follow'
                    // })
                    //     .then((res) => {
                    //         return res.text()
                    //     })
                    //     .then(result => {


                    //     }).catch(err => {

                    //         setIsActive(!isActive)
                    //     })

                }
            })
            .catch(err => {

            })

    }
    return (
        <div>
            <h2>
                User Request
            </h2>
            {
                userR.map((user, index) => <div key={index} className='user-r-box'>
                    <img src={user.profilePic} alt='ggg' className='img-fluid profilePicDesh' />
                    <h6>User ID: {user._id}</h6>
                    <h6>Account-Type: {user.accountType}</h6>
                    <h6>Refer ID: {user.referId}</h6>
                    <h6>Name: {user.name}</h6>
                    <h6>Phone: {user.phoneNumber}</h6>
                    <h6>Father's Name: {user.fatherName}</h6>
                    <h6>Mother's Name: {user.motherName}</h6>
                    <h6>Nominee Name: {user.nomineeName}</h6>
                    <h6>Date Of Birth: {user.dateOfBirth}</h6>
                    <h6>Nid/Birth: {user.nidBirth}</h6>
                    <h6>Profession: {user.profession}</h6>
                    <h6>{user.referId}</h6>
                    <h5>Address:</h5>
                    <h6>UpZilla: {user.upzilla}, Post: {user.post}, District: {user.district}, Division: {user.division}</h6>
                    <button onClick={() => !user.isValidUser && activeUser(user._id, user.phoneNumber)} className="up-b bbm mt-3">{user.isValidUser ? "Activated" : "Not Active"}</button>

                </div>)
            }
        </div>
    );
};

export default UserRequest;