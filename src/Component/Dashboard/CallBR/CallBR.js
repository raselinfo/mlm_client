import React, { useEffect, useState } from 'react';
import './CallBR.css'

const ComponentName = () => {


    const [callback, setCallback] = useState([]);

    useEffect(() => {
        fetch('https://mlmserver.herokuapp.com/callback')
            .then(res => res.json())
            .then(data => setCallback(data))
    }, [])

    return (
        <div>
            <h3>Call Back Request</h3>
            {
                callback.map(call => <div className='call-box'>
                    <div className='con-f'>
                        <h4>Name: {call.name}</h4>
                        <h4>Number: {call.number}</h4>
                        <h4>Email: {call.email}</h4>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ComponentName;