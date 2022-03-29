import React from 'react';
import './Hfeatures.css'
import hf from '../../../Image/Banner/hf.jpeg'

const componentName = () => {
    return (
        <div>
            <div className='h-fe'>
                <div className='container'>
                    <div className='hf-flex'>
                        <div className='hf-ib'>
                            <img className='hf-i' src={hf} alt='' />
                        </div>
                        <div className='hf-info'>
                            <h4 className='hf-h4'>আপনি কেন এস.বি ওয়ান গ্লোবাল এর সদস্য হবেন।</h4>
                            <p className='hf-p mt-4'> এই প্রতিষ্ঠানের মূল ফান্ড আসে বিভিন্ন ব্যক্তি বা প্রতিষ্ঠানের অনুদানের মাধ্যমে । যা সবার জন্য বৈধ বা হালাল ।</p>
                            <p className='hf-p'>এই প্রতিষ্ঠানের কোন জামানত বা বিনিয়োগ নেই।</p>
                            <p className='hf-p'>এই প্রতিষ্ঠানের অর্থনৈতিক দেনদেন হয় এমআরসিএস বা মানি রিসাইকেল সিস্টেম এর মাধ্যমে যা সম্পূর্ণ ঝুঁকি মুক্ত বা ১০০% নিরাপদ ।</p>
                         
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default componentName;