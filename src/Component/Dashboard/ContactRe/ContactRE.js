import React, { useEffect, useState } from 'react';
import './ContactRE.css'

const ComponentName = () => {


    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch('https://mlmserver.herokuapp.com/contact')
            .then(res => res.json())
            .then(data => setContacts(data))
    }, [])


    return (
        <div>
            <h3>Contact</h3>
            {
                contacts.map(contact => <div className='contact-box'>
                    <div className='con-f'>
                        <h4>Name: {contact.name}</h4>
                        <h4>Email: {contact.email}</h4>
                    </div>
                    <h6 className='mt-4'>{contact.text}</h6>
                </div>)
            }
        </div>
    );
};

export default ComponentName;