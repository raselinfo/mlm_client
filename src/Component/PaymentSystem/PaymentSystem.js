import React from 'react';
import './PaymentSystem.css'
import NavSection from '../Shared/NavSection/NavSection'
import TopSection from '../Shared/TopSection/TopSection'
import Footer from '../Shared/Footer/Footer'

const componentName = () => {
    return (
        <div>
            <div className='p-s'>
                <TopSection />
                <NavSection />
                <div className='container'>
                    <h1 className='p-i-h1'>Payment System</h1>
                    
                </div>
            </div>
            <div className='pu-from container'>
                    <form onSubmit='' className="up-form mt-5">

                        <h4 className='up-h4'>Payment Information Send</h4>
                        <h6 className='up-p mt-2'>Sender Mobile No.</h6>
                        <input className="up-input" type="text" placeholder="Sender Mobile No." />
                        <br />
                        <h6 className='up-p mt-2'>Receiver Mobile No.</h6>
                        <input className="up-input" type="text" placeholder="Receiver Mobile No." />
                        <br />
                    
                        <h6 className='up-p mt-2'>Operator</h6>
                        <select className="up-input mt-1" aria-label="Select Operator" >
                            <option selected>Select Operator</option>
                            <option>Bkash</option>
                            <option>Nagad</option>
                        </select>
                        <h6 className='up-p mt-2'>Trx ID</h6>
                        <input className="up-input" type="text" placeholder="trx id" />
                        <br />
                        <h6 className='up-p mt-2'>Amount</h6>
                        <input className="up-input" type="number" placeholder="Enter Amount" />
                        <br />
                    

                  
                        <input className="up-b mt-3" type="submit" value="Submit" />

                    </form>
                  
                </div>
            <Footer />
        </div>
    );
};

export default componentName;