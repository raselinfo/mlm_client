import React from 'react';
import './Footer.css'
import m1 from '../../../Image/Footer/m1.PNG'
import m2 from '../../../Image/Footer/m2.PNG'
import m3 from '../../../Image/Footer/m3.PNG'
import m4 from '../../../Image/Footer/m4.PNG'
import m5 from '../../../Image/Footer/m5.PNG'
import m6 from '../../../Image/Footer/m6.PNG'

const componentName = () => {
    return (
        <div>
            <div className='footer'>
                <div className='container'>
                    <div className='d-grid'>
                        <img className='f-i-i' src={m1} alt='' />
                        <img className='f-i-i' src={m2} alt='' />
                        <img className='f-i-i' src={m3} alt='' />
                        <img className='f-i-i' src={m4} alt='' />
                        <img className='f-i-i' src={m5} alt='' />
                        <img className='f-i-i' src={m6} alt='' />
                    </div>
                    <h6 className='copy'>Copyright © 2022 SB One Global Shop All rights reserved.</h6>
                </div>
            </div>
        </div>
    );
};

export default componentName;