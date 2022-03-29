import React from 'react';
import './TopSection.css'
import { FaFacebookF } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const componentName = () => {
    return (
        <div>
            <div className='t-border'>
                <div className='top-section'>
                    <div className='top-flex'>
                        <div className='d-flex'>
                            <h6 className='top-info'>Phone: 018-8659-8174</h6>
                        </div>
                        <div className=''>
                            <a href='' className='top-social'><FaPhone /></a>
                            <a href='' className='top-social ms-3'><FaWhatsapp /></a>
                            <a href='' className='top-social ms-3'><FaFacebookF /></a>
                            <a href='' className='top-social ms-3'><FaTwitter /></a>
                            <a href='' className='top-social ms-3'><FaLinkedin /></a>
                            <a href='' className='top-social ms-3'><FaInstagram /></a>
                            <a href='' className='top-social ms-3'><FaYoutube /></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default componentName;