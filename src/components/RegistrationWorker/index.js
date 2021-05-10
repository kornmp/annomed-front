import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./Styles.css";
import "react-datepicker/dist/react-datepicker.css";
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { signup } from '../../actions/worker';
import { useHistory } from "react-router-dom";
import AnnomedLogo from "../../asset/image/homepagebanner-logo.png";
import iconName from "../../asset/image/icon-name.png";
import iconEmail from "../../asset/image/icon-email.png";
import iconBirth from "../../asset/image/icon-birth.png";
import iconCall from "../../asset/image/icon-call.png";
import iconSpecialist from "../../asset/image/icon-specialist.png";
import iconCV from "../../asset/image/icon-cv.png";
import iconlicense from "../../asset/image/icon-license.png";
import iconPhoto from "../../asset/image/icon-photo.png";

const Registration = () => {
  const [startDate, setStartDate] = useState('');
  const [workerData, setWorkerData] = useState({ 
    fullName: '', 
    birthDate: '', 
    phoneNumber: '', 
    specialist: '', 
    email: '',
    password: '',
    cvData: '',
    licenseData: '',
    photoData: '',
  })

  const history = useHistory();

  const handleChange = e => {
    const { name, value } = e.target;
    setWorkerData(prevState => ({
        ...prevState,
        [name]: value
    }))
  };

  const handleDate = date => {
    setStartDate(date)
    setWorkerData(prevState => ({
        ...prevState,
        birthDate: startDate
    }))
  };

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('test', workerData)

      dispatch(signup(workerData))
      history.push('/LoginWorker')
  };
 
  return (
    <div className="register-main">
        <div className="register-container">
            <div className="main-content">
                <div className="anno-content">
                    <div className="annomed-main">
                        <img src={AnnomedLogo} alt="" className="annomed-image"/>
                        <h1 className="annomed-blue">Anno</h1>
                        <h1 className="annomed-green">med</h1>
                    </div>
                    <h5 className="anno-subcontent">Our platform provides a landscape for leading medical  professionals around the world with AI experts in vast majority of medical fields.</h5>
                    <h4 className="anno-maindesc">Doctor</h4>
                    <p className="anno-subdesc">Are you a doctor looking to partner with AnnoMed? Simply provide your details and our team will get back to you shortly with adequate training materials, confirmation</p>
                </div>
            </div>
            <div className="main-input">
                <div className="question-header">
                    <h3>Doctor Sign-up Questionnaire</h3>
                </div>
                <form className="signup-input" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <i className="icon">
                            <img alt="" src={iconName}/>
                        </i>
                        <input type="text" name="fullName" className="form-input" placeholder="Full Name" onChange={handleChange} />
                    </div>
                    <div className="form-control">
                        <i className="icon">
                            <img alt="" src={iconBirth}/>
                        </i>
                        <DatePicker
                        className="form-date" 
                        selected={startDate}
                        onChange={handleDate}
                        placeholderText="Birth Date"/>
                    </div>
                    <div className="form-control">
                        <i className="icon">
                            <img alt="" src={iconCall}/>
                        </i>
                        <input type="text" name="phoneNumber" className="form-input" placeholder="Phone number" onChange={handleChange} />
                    </div>
                    <div className="form-control">
                        <i className="icon">
                            <img alt="" src={iconSpecialist}/>
                        </i>
                        <input type="text" name="specialist" className="form-input" placeholder="Field of Specialist" onChange={handleChange} />
                    </div>
                    <div className="form-control">
                        <i className="icon">
                            <img alt="" src={iconEmail}/>
                        </i>
                        <input type="text "name="email" className="form-input" placeholder="Email" onChange={handleChange} />
                    </div>
                    <div className="form-control">
                        <i className="icon">
                            <img alt="" src={iconName}/>
                        </i>
                        <input type="text" name="password" className="form-input" placeholder="Password" onChange={handleChange} />
                    </div>
                    <div className="uploadProfile">
                        <div className="upload-con">
                            <div className="upload-main">
                                <i className="icon circle">
                                    <img alt="" src={iconCV} height="30px" />
                                </i>
                                <p>CV</p>
                            </div>
                            <div className="uploadFile"><FileBase type="file" multiple={false} onDone={({ base64 }) => setWorkerData({ ...workerData, cvData: base64 })} /></div>
                        </div>
                        <div className="upload-con">
                            <div className="upload-main">
                                <i className="icon circle">
                                    <img alt="" src={iconlicense} height="30px" />
                                </i>
                                <p>Medical License</p>
                            </div>
                            <div className="uploadFile"><FileBase type="file" multiple={false} onDone={({ base64 }) => setWorkerData({ ...workerData, licenseData: base64 })} /></div>
                        </div>
                        <div className="upload-con">
                            <div className="upload-main">
                                <i className="icon circle">
                                    <img alt="" src={iconPhoto} height="30px" />
                                </i>
                                <p>Professional Photo</p>
                            </div>
                            <div className="uploadFile"><FileBase type="file" multiple={false} onDone={({ base64 }) => setWorkerData({ ...workerData, photoData: base64 })} /></div>
                        </div>
                    </div>
                    <input className="signup-btn" type="submit" value="Sign Up" />
                </form>
            </div>
        </div>
    </div>
  )
}

export default Registration;