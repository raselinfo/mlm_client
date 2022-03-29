import React, { useState } from 'react';
import './Joining.css'
import NavSection from '../Shared/NavSection/NavSection'
import TopSection from '../Shared/TopSection/TopSection'
import Footer from '../Shared/Footer/Footer'
import { Input } from '@mui/material';
import Axios from "axios"
const ComponentName = () => {

    const [act, setAct] = useState('');
    const [referId, setReferId] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [motherName, setMotherName] = useState('');
    const [nomineeName, setNomineeName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [nidBirth, setNidBirth] = useState('');
    const [profession, setProfession] = useState('');
    const [division, setDivision] = useState('');
    const [district, setDistrict] = useState('');
    const [upzilla, setUpzilla] = useState('');
    const [post, setPost] = useState('');
    const [email, setEmail] = useState('');
    const [profilePic, setProfilePic] = useState(null);
    function handleImageUpload(e) {
        let file = e.target.files[0]
        let formData = new FormData()
        formData.append('file', file)
        formData.append("upload_preset", 'otzztpio')

        Axios.post(`https://api.cloudinary.com/v1_1/sb-one-global-shop/image/upload`, formData).then(res => {
            setProfilePic(res.data.url)
        })
    }


    const handleSubmit = e => {
        e.preventDefault()
        if (!profilePic) {
            return;
        }
        const formData = new FormData();
        formData.append('accountType', act);
        formData.append('referId', referId);
        formData.append('name', name);
        formData.append('phoneNumber', number);
        formData.append('fatherName', fatherName);
        formData.append('motherName', motherName);
        formData.append('nomineeName', nomineeName);
        formData.append('dateOfBirth', dateOfBirth);
        formData.append('nidBirth', nidBirth);
        formData.append('profession', profession);
        formData.append('division', division);
        formData.append('district', district);
        formData.append('upzilla', upzilla);
        formData.append('post', post);
        formData.append('profilePic', profilePic);
        formData.append("email", email)


        fetch('http://localhost:5000/client-request', {
            method: 'POST',
            body: formData,

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Registration Successful');
                    e.target.reset();
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });


        e.preventDefault();
    }

    return (
        <div>
            <div className='j-b'>
                <TopSection />
                <NavSection />
                <div className='container'>
                    <h1 className='p-i-h1'>Joining</h1>

                </div>
            </div>
            <div className='pu-from container mt-5'>

                <form onSubmit={handleSubmit} className="up-form" >
                    <p>My Email : {localStorage.getItem("email")}</p>
                    <h4 className='up-h4'></h4>
                    <h6 className='up-p mt-2'>Account Type</h6>
                    <select className="up-input mt-1" aria-label="Select Account" onChange={e => setAct(e.target.value)}>
                        <option selected>Select Account</option>
                        <option>General-Member / 1000</option>
                        <option>Sliver-Member / 3000</option>
                        <option>Gold-Member / 6000</option>
                        <option>Elite-Member / 20000</option>
                    </select>
                    <br />
                    <h6 className='up-p mt-2'>Refer Id</h6>
                    <input className="up-input" type="text" placeholder="Refer Id" onChange={e => setReferId(e.target.value)} />
                    <br />
                    <h6 className='up-p mt-2'>Upload-Image</h6>
                    <label htmlFor="contained-button-file">
                        <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={e => handleImageUpload(e)} />

                    </label>
                    <br />
                    <h6 className='up-p mt-2'>Phone Number</h6>
                    <input className="up-input" placeholder="Number" onChange={e => setNumber(e.target.value)} />

                    <br />
                    <h6 className='up-p mt-2'>Your Name</h6>
                    <input className="up-input" type="text" placeholder="Name" onChange={e => setName(e.target.value)} />
                    <br />
                    <h6 className='up-p mt-2'>Your Email</h6>
                    <input className="up-input" type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                    <br />
                    <h6 className='up-p mt-2'>Father's Name</h6>
                    <input className="up-input" type="text" placeholder="Father's Name" onChange={e => setFatherName(e.target.value)} />
                    <br />
                    <h6 className='up-p mt-2'>Mother's Name</h6>
                    <input className="up-input" type="text" placeholder="Mother's Name" onChange={e => setMotherName(e.target.value)} />
                    <br />
                    <h6 className='up-p mt-2'>Nominee Name</h6>
                    <input className="up-input" type="text" placeholder="Nominee Name" onChange={e => setNomineeName(e.target.value)} />
                    <br />
                    <h6 className='up-p mt-2'>Date of Birth</h6>
                    <input className="up-input " type="date" name="birth-date" placeholder="Date Of Birth" onChange={e => setDateOfBirth(e.target.value)} />
                    <br />
                    <h6 className='up-p mt-2'>National ID/ Birth Certificate</h6>
                    <input className="up-input " placeholder="NID/Birth " onChange={e => setNidBirth(e.target.value)} />
                    <br />
                    <h6 className='up-p mt-2'>Profession</h6>
                    <select className="up-input mt-1" aria-label="Select Profession" onChange={e => setProfession(e.target.value)}>
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
                    <select className="up-input mt-1" aria-label="Select Division" onChange={e => setDivision(e.target.value)}>
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
                    <select className="up-input mt-1" aria-label="Select District" onChange={e => setDistrict(e.target.value)}>
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
                    <input className="up-input " placeholder="Upzilla" onChange={e => setUpzilla(e.target.value)} />
                    <br />
                    <h6 className='up-p mt-2'>Post office</h6>
                    <input className="up-input" onChange={e => setPost(e.target.value)}  placeholder="Post" />
                    <br />
                    <input className="up-b mt-3" type="submit" value="Submit" />

                </form>
            </div>
            <Footer />
        </div>
    );
};

export default ComponentName;