import React, { useState } from 'react';
import './ProfileUpdate.css'
import NavSection from '../Shared/NavSection/NavSection'
import TopSection from '../Shared/TopSection/TopSection'
import Footer from '../Shared/Footer/Footer'

const ComponentName = () => {
    let [name, setName] = useState("")
    let [fatherName, setFatherName] = useState("")
    let [motherName, setMotherName] = useState("")
    let [nomineeName, setNomineeName] = useState("")
    let [bith, setBirth] = useState("")
    let [nid, setNid] = useState("")
    let [profession, setProfission] = useState("")
    let [division, setDivision] = useState("")
    let [district, setDistict] = useState("")
    let [upzilla, setUpzilla] = useState("")
    let [post, setPost] = useState("")

    let email = localStorage.getItem("email")
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://mlmserver.herokuapp.com/clientUpdate/${email}`, {
            method: "PUT",
            body: JSON.stringify({
                name,
                fatherName,
                motherName,
                nomineeName,
                bith,
                nid,
                profession,
                division,
                district,
                upzilla,
                post
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

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
                    <form onSubmit={handleSubmit} className="up-form">
                        <h4 className='up-h4'>Update Your Profile</h4>
                        <br />
                        <h6 className='up-p mt-2'>Your Name</h6>
                        <input onChange={e => setName(e.target.value)} className="up-input" type="text" placeholder="Name" />
                        <br />
                        <h6 className='up-p mt-2'>Father's Name</h6>
                        <input onChange={e => setFatherName(e.target.value)} className="up-input" type="text" placeholder="Father's Name" />
                        <br />
                        <h6 className='up-p mt-2'>Mother's Name</h6>
                        <input onChange={e => setMotherName(e.target.value)} className="up-input" type="text" placeholder="Mother's Name" />
                        <br />
                        <h6 className='up-p mt-2'>Nominee Name</h6>
                        <input onChange={e => setNomineeName(e.target.value)} className="up-input" type="text" placeholder="Nominee Name" />
                        <br />
                        <h6 className='up-p mt-2'>Date of Birth</h6>
                        <input onChange={e => setBirth(e.target.value)} className="up-input " type="date" name="birth-date" placeholder="Date Of Birth" />
                        <br />
                        <h6 className='up-p mt-2'>National ID/ Birth Certificate</h6>
                        <input onChange={e => setNid(e.target.value)} className="up-input " placeholder="NID/Birth " />
                        <br />
                        <h6 className='up-p mt-2'>Profession</h6>
                        <select onChange={e => setProfission(e.target.value)} className="up-input mt-1" aria-label="Select Profession">
                            <option defaultValue="" selected>Select Profession</option>
                            <option defaultValue="Job" >Job</option>
                            <option defaultValue="Business" >Business</option>
                            <option defaultValue="Doctor" >Doctor</option>
                            <option defaultValue="Advocate" >Advocate</option>
                            <option defaultValue="Freelancer" >Freelancer</option>
                            <option defaultValue="Net worker" >Net worker</option>
                        </select>
                        <br />
                        <h6 className='up-p mt-2'>Address</h6>
                        <h6 className='up-p mt-2'>Division</h6>
                        <select onChange={e => setDivision(e.target.value)} className="up-input mt-1" aria-label="Select Division">
                            <option defaultValue="" selected>Select Division</option>
                            <option defaultValue="Dahaka" >Dhaka</option>
                            <option defaultValue="Sylhet" >Sylhet</option>
                            <option defaultValue="Chittagong" >Chittagong</option>
                            <option defaultValue="Mymensingh" >Mymensingh</option>
                            <option defaultValue="Rajshahi" >Rajshahi</option>
                            <option defaultValue="Rangpur" >Rangpur</option>
                            <option defaultValue="Khulna" >Khulna</option>
                            <option defaultValue="Barisal" >Barisal</option>
                        </select>
                        <h6 className='up-p mt-2'>District</h6>
                        <select onChange={e => setDistict(e.target.value)} className="up-input mt-1" aria-label="Select District">
                            <option defaultValue="" selected>Select District</option>
                            <option defaultValue="Barguna" >Barguna</option>
                            <option defaultValue="Barisal" >Barisal</option>
                            <option defaultValue="Jhalokati" >Jhalokati</option>
                            <option defaultValue="Patuakhal" >Patuakhal</option>
                            <option defaultValue="Pirojpur" >Pirojpur</option>
                            <option defaultValue="Bandarban" >Bandarban</option>
                            <option defaultValue="Brahmanbaria" >Brahmanbaria</option>
                            <option defaultValue="Chandpur" >Chandpur</option>
                            <option defaultValue="Chittagong" >Chittagong</option>
                            <option defaultValue="Comilla" >Comilla</option>
                            <option defaultValue="Cox's Bazar" >Cox's Bazar</option>
                            <option defaultValue="Feni" >Feni</option>
                            <option defaultValue="Khagrachhari" >Khagrachhari</option>
                            <option defaultValue="Lakshmipur" >Lakshmipur</option>
                            <option defaultValue="Noakhali" >Noakhali</option>
                            <option defaultValue="rangamati" >rangamati</option>
                            <option defaultValue="Dahaka" >Dhaka</option>
                            <option defaultValue="Faridpur" >Faridpur</option>
                            <option defaultValue="Gazipur" >Gazipur</option>
                            <option defaultValue="Gopalganj" >Gopalganj</option>
                            <option defaultValue="Kishoreganj" >Kishoreganj</option>
                            <option defaultValue="Madaripur" >Madaripur</option>
                            <option defaultValue="Manikganj" >Manikganj</option>
                            <option defaultValue="Munshiganj" >Munshiganj</option>
                            <option defaultValue="Narayanganj" >Narayanganj</option>
                            <option defaultValue="Narsingdi" >Narsingdi</option>
                            <option defaultValue="Rajbari" >Rajbari</option>
                            <option defaultValue="Sharitpur" >Sharitpur</option>
                            <option defaultValue="Tangail" >Tangail</option>
                            <option defaultValue="Bagerhat" >Bagerhat</option>
                            <option defaultValue="Chuadanga" >Chuadanga</option>
                            <option defaultValue="Jessore" >Jessore</option>
                            <option defaultValue="Jhenaidah" >Jhenaidah</option>
                            <option defaultValue="Khulna" >Khulna</option>
                            <option defaultValue="Kushtia" >Kushtia</option>
                            <option defaultValue="Magura" >Magura</option>
                            <option defaultValue="Meherpur" >Meherpur</option>
                            <option defaultValue="Mymensingh" >Mymensingh</option>
                            <option defaultValue="Dahaka" >Netrokon</option>
                            <option defaultValue="Netrokon" >Sherpur</option>
                            <option defaultValue="Bogra" >Bogra</option>
                            <option defaultValue="Joypurhat" >Joypurhat</option>
                            <option defaultValue="Naogaon" >Naogaon</option>
                            <option defaultValue="Nator" >Nator</option>
                            <option defaultValue="Chapai Nawabganj" >Chapai Nawabganj</option>
                            <option defaultValue="Pabna" >Pabna</option>
                            <option defaultValue="Rajshahi" >Rajshahi</option>
                            <option defaultValue="Sirajganj" >Sirajganj</option>
                            <option defaultValue="Dinajpur" >Dinajpur</option>
                            <option defaultValue="Gaibandha" >Gaibandha</option>
                            <option defaultValue="Kurigram" >Kurigram</option>
                            <option defaultValue="Lalmonirhat" >Lalmonirhat</option>
                            <option defaultValue="Nilphamari" >Nilphamari</option>
                            <option defaultValue="Panchhagarh" >Panchhagarh</option>
                            <option defaultValue="Rangpur" >Rangpur</option>
                            <option defaultValue="Thakurgaon" >Thakurgaon</option>
                            <option defaultValue="Habiganj" >Habiganj</option>
                            <option defaultValue="Moulvibazar" >Moulvibazar</option>
                            <option defaultValue="Sunamganj" >Sunamganj</option>
                            <option defaultValue="Sylhet" >Sylhet</option>
                        </select>
                        <h6 className='up-p mt-2'>Upzilla</h6>
                        <input onChange={e => setUpzilla(e.target.value)} className="up-input " placeholder="Upzilla" />
                        <br />
                        <h6 className='up-p mt-2'>Post office</h6>
                        <input onChange={e => setPost(e.target.value)} className="up-input " placeholder="Post" />
                        <br />
                        <input className="up-b mt-3" type="submit" defaultValue="Submit" />

                    </form>

                </div>
            </div>
            <Footer />
        </div>
    );
};


export default ComponentName;