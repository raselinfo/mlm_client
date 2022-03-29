import React from 'react';
import './Banner.css'
import TopSection from '../../Shared/TopSection/TopSection'
import NavSection from '../../Shared/NavSection/NavSection'



const componentName = () => {
    return (
        <div>
            <div className='banner'>
                <TopSection />
                <NavSection />

                <div className='container'>
                    <div className='banner-info'>
                        <div className='b-t'>
                            <div className='b-b'>
                                <h1 className='b-w'>Welcome to<br />
                                    SB.ONE GLOBAL SHOP</h1>
                                <p className='b-p'></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='call-back container'>
                <div className='c-box'>
                    <form onSubmit=''>
                        <div className="cb-form">
                            <div>
                                <p className='cb-p'>Full Name*</p>
                                <input className="cb-input"/>
                            </div>
                            <div>
                                <p className='cb-p'>Phone Number*</p>
                                <input className="cb-input" />
                            </div>
                            <div>
                                <p className='cb-p'>Email*</p>
                                <input className="cb-input" type="email"/>
                            </div>

                            <input className="cb-b" type="submit" value="REQUEST A CALLBACK" />

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default componentName;