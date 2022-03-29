import React, { useEffect, useState } from 'react';
import './AllUsers.css'

const ComponentName = () => {
    let [users,setUsers]=useState([])
    // /client-request
    useEffect(()=>{
        fetch(`https://mlmserver.herokuapp.com/client-request`)
        .then(res=>res.json())
        .then(data=>{
         
            setUsers(data)
        })
    },[])
    return (
        <div>
            <div>
                <h1>All User</h1>
            </div>
            <ul>
                {users.map(user=>{
                    if (user.isValidUser){
                        return <li>
                            <h4>Name: {user.name}</h4>
                            <h4>Email: {user.email}</h4>
                            <h4>Phone: {user.phoneNumber}</h4>
                            <hr />
                        </li>
                    }
                })}
            </ul>
        </div>
    );
};

export default ComponentName;