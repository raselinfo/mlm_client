import React from 'react';
import './ProfileUpdate.css'
import NavSection from '../Shared/NavSection/NavSection'
import TopSection from '../Shared/TopSection/TopSection'
import Footer from '../Shared/Footer/Footer'

const componentName = () => {
    return (
        <div>
            <div className='p-u'>
                <TopSection />
                <NavSection />
                <div className='container'>
                    <h1 className='p-i-h1'>Profile Update</h1>
                    
                </div>
            </div>
            <div className='upf-bg'>
                <div className='pu-from container'>
                    <form onSubmit='' className="up-form">

                        <h4 className='up-h4'>Update Your Profile</h4>

                        <h6 className='up-p'>Upload-Image</h6>
                        <input className="up-input mt-1" type="file" />
                        <br />
                        <h6 className='up-p mt-2'>Your Name</h6>
                        <input className="up-input" type="text" placeholder="Name" />
                        <br />
                        <h6 className='up-p mt-2'>Father's Name</h6>
                        <input className="up-input" type="text" placeholder="Father's Name" />
                        <br />
                        <h6 className='up-p mt-2'>Mother's Name</h6>
                        <input className="up-input" type="text" placeholder="Mother's Name" />
                        <br />
                        <h6 className='up-p mt-2'>Nominee Name</h6>
                        <input className="up-input" type="text" placeholder="Nominee Name" />
                        <br />
                        <h6 className='up-p mt-2'>Date of Birth</h6>
                        <input className="up-input " type="date" name="birth-date" placeholder="Date Of Birth" />
                        <br />
                        <h6 className='up-p mt-2'>National ID/ Birth Certificate</h6>
                        <input className="up-input " placeholder="NID/Birth " />
                        <br />
                        <h6 className='up-p mt-2'>Profession</h6>
                        <select className="up-input mt-1" aria-label="Select Profession">
                            <option selected>Select Profession</option>
                            <option>Job</option>
                            <option>Business</option>
                            <option>Doctor</option>
                            <option>Advocate</option>
                            <option>Freelancer</option>
                            <option>Net worker</option>
                        </select>
                        <br />
                        <h6 className='up-p mt-2'>Address</h6>
                        <h6 className='up-p mt-2'>Division</h6>
                        <select className="up-input mt-1" aria-label="Select Division">
                            <option selected>Select Division</option>
                            <option>Dhaka</option>
                            <option>Sylhet</option>
                            <option>Chittagong</option>
                            <option>Mymensingh</option>
                            <option>Rajshahi</option>
                            <option>Rangpur</option>
                            <option>Khulna</option>
                            <option>Barisal</option>
                        </select>
                        <h6 className='up-p mt-2'>District</h6>
                        <select className="up-input mt-1" aria-label="Select District">
                            <option selected>Select District</option>
                            <option>Barguna</option>
                            <option>Barisal</option>
                            <option>Bhola</option>
                            <option>Jhalokati</option>
                            <option>Patuakhal</option>
                            <option>Pirojpur</option>
                            <option>Bandarban</option>
                            <option>Brahmanbaria</option>
                            <option>Chandpur</option>
                            <option>Chittagong</option>
                            <option>Comilla</option>
                            <option>Cox's Bazar</option>
                            <option>Feni</option>
                            <option>Khagrachhari</option>
                            <option>Lakshmipur</option>
                            <option>Noakhali</option>
                            <option>rangamati</option>
                            <option>Dhaka</option>
                            <option>Faridpur</option>
                            <option>Gazipur</option>
                            <option>Gopalganj</option>
                            <option>Kishoreganj</option>
                            <option>Madaripur</option>
                            <option>Manikganj</option>
                            <option>Munshiganj</option>
                            <option>Narayanganj</option>
                            <option>Narsingdi</option>
                            <option>Rajbari</option>
                            <option>Sharitpur</option>
                            <option>Tangail</option>
                            <option>Bagerhat</option>
                            <option>Chuadanga</option>
                            <option>Jessore</option>
                            <option>Jhenaidah</option>
                            <option>Khulna</option>
                            <option>Kushtia</option>
                            <option>Magura</option>
                            <option>Meherpur</option>
                            <option>Mymensingh</option>
                            <option>Netrokon</option>
                            <option>Sherpur</option>
                            <option>Bogra</option>
                            <option>Joypurhat</option>
                            <option>Naogaon</option>
                            <option>Nator</option>
                            <option>Chapai Nawabganj</option>
                            <option>Pabna</option>
                            <option>Rajshahi</option>
                            <option>Sirajganj</option>
                            <option>Dinajpur</option>
                            <option>Gaibandha</option>
                            <option>Kurigram</option>
                            <option>Lalmonirhat</option>
                            <option>Nilphamari</option>
                            <option>Panchhagarh</option>
                            <option>Rangpur</option>
                            <option>Thakurgaon</option>
                            <option>Habiganj</option>
                            <option>Moulvibazar</option>
                            <option>Sunamganj</option>
                            <option>Sylhet</option>
                        </select>
                        <h6 className='up-p mt-2'>Upzilla</h6>
                        <input className="up-input " placeholder="Upzilla" />
                        <br />
                        <h6 className='up-p mt-2'>Post office</h6>
                        <input className="up-input " placeholder="Post" />
                        <br />
                        <input className="up-b mt-3" type="submit" value="Submit" />

                    </form>

                </div>
            </div>
            <Footer />
        </div>
    );
};


export default componentName;