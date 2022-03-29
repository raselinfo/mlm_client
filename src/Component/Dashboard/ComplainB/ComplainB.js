import React, { useEffect, useState } from 'react';
import './ComplainB.css'

const ComponentName = () => {


    const [complain, setComplain] = useState([]);

    useEffect(() => {
        fetch('https://mlmserver.herokuapp.com/complain')
            .then(res => res.json())
            .then(data => setComplain(data))
    }, [])

    return (
        <div>
             <h3>Complain</h3>
            {
                complain.map(com => <div className='call-box'>
                    <div className='con-f'>
                        <h4>Name: {com.name}</h4>
                        <h4>Email: {com.email}</h4>
                    </div>
                    <h6 className='mt-4'>{com.text}</h6>
                </div>)
            }
        </div>
    );
};

export default ComponentName;