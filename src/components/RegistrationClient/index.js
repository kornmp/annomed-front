import React, { useState } from "react";
import "./Styles.css";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from 'react-redux';
import { signup } from '../../actions/client';
import { useHistory } from "react-router-dom";
import AnnomedLogo from "../../asset/image/homepagebanner-logo.png";
import iconName from "../../asset/image/icon-name.png";
import iconEmail from "../../asset/image/icon-email.png";
import iconCall from "../../asset/image/icon-call.png";
import iconSpecialist from "../../asset/image/icon-specialist.png";

const Registration = () => {
    const [clientData, setClientData] = useState({ 
      fullName: '', 
      company: '', 
      phoneNumber: '', 
      email: '',
      password: '',
    })
  
    const history = useHistory();
  
    const handleChange = e => {
      const { name, value } = e.target;
      setClientData(prevState => ({
          ...prevState,
          [name]: value
      }))
    };
  
    const dispatch = useDispatch();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
        dispatch(signup(clientData))
        history.push('/LoginClient')
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
                      <h3>Client Sign-up Questionnaire</h3>
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
                              <img alt="" src={iconCall}/>
                          </i>
                          <input type="text" name="phoneNumber" className="form-input" placeholder="Phone number" onChange={handleChange} />
                      </div>
                      <div className="form-control">
                          <i className="icon">
                              <img alt="" src={iconSpecialist}/>
                          </i>
                          <input type="text" name="company" className="form-input" placeholder="Field of Specialist" onChange={handleChange} />
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
                      <input className="signup-btn" type="submit" value="Sign Up" />
                  </form>
              </div>
          </div>
      </div>
    )
  }
  
  export default Registration;