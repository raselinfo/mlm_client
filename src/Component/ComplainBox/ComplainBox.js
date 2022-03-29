import React, { useRef } from 'react';
import './ComplainBox.css'
import NavSection from '../Shared/NavSection/NavSection'
import TopSection from '../Shared/TopSection/TopSection'
import Footer from '../Shared/Footer/Footer'

const ComponentName = () => {



    const nameRef = useRef();
    const emailRef = useRef();
    const textRef = useRef();



    const handleAddComplain = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const text = textRef.current.value;


        const newComplain = { name, email, text };


        fetch('https://mlmserver.herokuapp.com/complain', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(newComplain)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Complain Posted Successfully');
                    e.target.reset();
                }
            })


        e.preventDefault();
    }



    return (
        <div>
            <div className='c-b'>
                <TopSection />
                <NavSection />
                <div className='container'>
                    <h1 className='p-i-h1'>Write Your Complain</h1>
                    
                </div>
            </div>
            <div className=' container'>

                <form onSubmit={handleAddComplain} className="c-m2">

                    <input className="up-input mt-3" ref={nameRef} placeholder="Name" />
                    <br />
                    <input className="up-input mt-3" ref={emailRef} type="email" placeholder="Email" />
                    <br />
                    <textarea className="up-input text mt-3" ref={textRef} placeholder="write massage" />
                    <br />
                    <input className="up-b mt-3" type="submit" value="Sent" />

                </form>
                </div>
                <Footer />
            </div>
            );
};

            export default ComponentName;