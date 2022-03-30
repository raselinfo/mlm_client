import React from 'react';
import './MLM.css'
import mlm from '../../../Image/Banner/mlm.jpg'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from '../../../Image/logo.png'
import sl1 from '../../../Image/Banner/sl-1.jpg'
import sl2 from '../../../Image/Banner/sl-2.png'
import sl3 from '../../../Image/Banner/sl-3.jpg'



const componentName = () => {


    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    speed: 1000,
                    dots: true,
                    arrows: false,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    speed: 1000,
                    dots: true,
                    arrows: false,

                }
            },
        ]
    };



    return (
        <div>
            <div className='mlm container'>
                <div className='mlm-flex'>
                    <div className='mlm-info'>
                        <Slider {...settings}>
                            <div>
                                <img className='sl-i' src={sl1} alt='' />
                            </div>
                            <div>
                                <img className='sl-i' src={sl2} alt='' />
                            </div>
                            <div>
                                <img className='sl-i' src={sl3} alt='' />
                            </div>

                        </Slider>
                    </div>
                    <div className='mlm-i'>
                        <img className='mlm-img' src={mlm} alt='' />
                    </div>
                </div>
            </div>
            <div className='black-b'>
                <div className='container'>
                    <div className='m-at'>
                        <div className='d-flex'>
                            <img className='logo' src={logo} alt='' />
                            <div className='ms-1'>
                                <h4 className='logo-h5'>SB.ONE GLOBAL SHOP</h4>
                                <p className='logo-p'>MONEY MAKES MONEY</p>
                            </div>
                        </div>
                    </div>

                    <h2 className='mlm-h2 ccc2 mt-4'>মিশন।ভিশন</h2>
                    <p className='hf-p'>
                        এস,বি ওয়ান গ্লোবাল সৌদি আরবের বেসরকারী সংস্থা কিং ফয়সাল ওয়েলফেয়ার ট্রাস্ট এর
                        আদলে গঠিত এমন একটি প্রতিষ্ঠান যারা বিভিন্ন অনুদানের মাধ্যমে ফান্ড সংগ্রহ করে মানি
                        রিসাইকেল সিস্টেম বা এমআরসিএস এর মাধ্যমে স্বল্প ও মধ্যম আয়ের মানুষের ভাগ্য উন্নয়নের
                        কাজ করে । বর্তমান বিশ্বে বহু সংস্থা বা প্রতিষ্ঠান রয়েছে যারা দীর্ঘ দিন যাবত প্রান্তিক ও দারিদ্র
                        জনগোষ্ঠির ভাগ্য উন্নয়নে প্রতি বছর মিলিয়ন মিলিয়ন ডলার ব্যয় করে যাচ্ছে। কিন্তু স্বল্প ও মধ্যম আয়ের মানুষের ভাগ্য উন্নয়নের জন্য তেমন কোন কার্যক্রম দেখা যায় না। অথচ সারা বিশ্বে এই শ্রেণীর মানুষের সংখ্য কম নয় তাই এই শ্রেণীর মানুষের ভাগ্য উন্নয়নের জন্য সর্ব প্রথম সৌদি আরবের কিং ফয়সাল ওয়েলফেয়ার ট্রাস্ট কার্যক্রম শুরু করে এবং অল্প সময়ের মধ্যে
                        আফ্রিকা অঞ্চল সহ সারা বিশ্বের অনুন্নত দেশগুলোতে স্বল্প ও মধ্যম আয়ের মানুষের মাঝে
                        ব্যাপক সফলতা লাভ করে এরই ধারা বাহিকতায় এবং এই সংস্থার অনুকরণে বাংলাদেশে
                        এস.বি ওয়ান গ্লোবাল প্রতিষ্ঠানটি যাত্রা শুরু করে । এই প্রতিষ্ঠানটি প্রাথমিক ভাবে প্রতিটি
                        জেলায় মাত্র ২০০০ জন সদস্যের মাধ্যমে এই কার্যক্রম চালু করা হবে। এই প্রতিষ্ঠানের মূল
                        উদ্দেশ্যে হলে স্বল্প ও মধ্যম আয়ের মানুষদেরকে দ্রুত অধিক উপার্জনশীল ও সাবলম্বী করে
                        তোলা ।</p>
                </div>

            </div>

        </div>
    );
};

export default componentName;