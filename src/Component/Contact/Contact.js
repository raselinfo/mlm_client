import React, { useRef } from 'react';
import './Contact.css'
import NavSection from '../Shared/NavSection/NavSection'
import TopSection from '../Shared/TopSection/TopSection'
import Footer from '../Shared/Footer/Footer'
import { MdLocationPin } from "react-icons/md";
import { MdPhoneEnabled } from "react-icons/md";
import { MdEmail } from "react-icons/md";


const ComponentName = () => {


    const nameRef = useRef();
    const emailRef = useRef();
    const textRef = useRef();



    const handleAddContact = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const text = textRef.current.value;


        const newContact = { name, email, text };


        fetch('https://mlmserver.herokuapp.com/contact', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(newContact)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Request Successfully');
                    e.target.reset();
                }
            })


        e.preventDefault();
    }




    return (
        <div>
            <div className='c-u'>
                <TopSection />
                <NavSection />
                <div className='container'>
                    <h1 className='p-i-h1'>Contact With Us.</h1>
                    
                </div>
            </div>
            <div className='contact container'>

                <form onSubmit={handleAddContact} className="c-m">

                    <input className="up-input mt-3" ref={nameRef} placeholder="Name" />
                    <br />
                    <input className="up-input mt-3" ref={emailRef} type="email" placeholder="Email" />
                    <br />
                    <textarea className="up-input text mt-3" ref={textRef} placeholder="write massage" />
                    <br />
                    <input className="up-b mt-3" type="submit" value="Sent" />

                </form>
                <div className='c-i-in'>
                    <div className='d-flex mt-4'>
                        <MdLocationPin className='con-i' />
                        <h6 className='con-h6'> প্লট ॥ ০১ সি.ডব্লিউ,এন.বি, রোড ॥ <br/>৪৫, গুলশান-০২, ঢাকা-১২১২</h6>
                    </div>
                    <div className='d-flex mt-4'>
                        <MdPhoneEnabled className='con-i' />
                        <h6 className='con-h6 mt-2'> ০১৮-৮৬৫৯-৮১৭৪</h6>
                    </div>
                   
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ComponentName;