import React, { useEffect, useState } from 'react';
import './News.css'
import NavSection from '../Shared/NavSection/NavSection'
import TopSection from '../Shared/TopSection/TopSection'
import Footer from '../Shared/Footer/Footer'

const ComponentName = () => {


    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('https://mlmserver.herokuapp.com/notice')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])


    return (
        <div>
            <div className='p-i'>
                <TopSection />
                <NavSection />
                <div className='container'>
                    <h1 className='p-i-h1'>NEWS</h1>
                </div>
            </div>

            <div className='news container'>
                <div className='news-f'>
                    {
                        news.map(news => <div className='news-box'>
                            <h4>{news.noticeTitle}</h4>
                            <p>{news.text}</p>
                        </div>)
                    }
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ComponentName;