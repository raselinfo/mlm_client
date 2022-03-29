import React from 'react';
import './Home.css'
import Banner from './Banner/Banner'
import MLM from './MLM/MLM'
import Hfeatures from './Hfeatures/Hfratures'
import HomeNews from './HomeNews/HomeNews'
import Footer from '../Shared/Footer/Footer'



const componentName = () => {
    return (
        <div>
            <Banner />
            <MLM />
            <Hfeatures />
            <HomeNews />
            <div className='h-footer'>
                <Footer />
            </div>
        </div>
    );
};

export default componentName;