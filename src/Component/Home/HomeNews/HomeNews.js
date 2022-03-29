import React from 'react';
import './HomeNews.css'
import n1 from '../../../Image/News/n1.jpg'
import n2 from '../../../Image/News/n2.jpg'
import n3 from '../../../Image/News/n3.jpg'
import n4 from '../../../Image/News/n4.jpg'
import n5 from '../../../Image/News/n5.jpg'
import n6 from '../../../Image/News/n6.jpg'

const componentName = () => {
    return (
        <div>
            <div className='h-news container'>
                <div className=''>
                    <h1 className='h-n-ti'>News</h1>
                </div>
                <div className='h-news-part n-flex'>
                    <div className='company-news'>
                        <div className='cn-b'>
                            <h4 className='cn'>Company News</h4>
                            <div className='n-list'>
                                <div className='s-news d-flex'>
                                    <img className='n-i' src={n1} alt='' />
                                    <div>
                                        <h6 className='ms-4 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A itaque et</h6>
                                    </div>
                                </div>
                                <div className='s-news d-flex mt-2'>
                                    <img className='n-i' src={n2} alt='' />
                                    <div>
                                        <h6 className='ms-4 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A itaque et</h6>
                                    </div>
                                </div>
                                <div className='s-news d-flex mt-2'>
                                    <img className='n-i' src={n3} alt='' />
                                    <div>
                                        <h6 className='ms-4 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A itaque et</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='team-news'>
                        <div className='cn-b'>
                            <h4 className='tn'>Team Leader News</h4>
                            <div className='s-news d-flex mt-2'>
                                <img className='n-i' src={n4} alt='' />
                                <div>
                                    <h6 className='ms-4 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A itaque et</h6>
                                </div>
                            </div>
                            <div className='s-news d-flex mt-2'>
                                <img className='n-i' src={n5} alt='' />
                                <div>
                                    <h6 className='ms-4 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A itaque et</h6>
                                </div>
                            </div>
                            <div className='s-news d-flex mt-2'>
                                <img className='n-i' src={n6} alt='' />
                                <div>
                                    <h6 className='ms-4 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A itaque et</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default componentName;