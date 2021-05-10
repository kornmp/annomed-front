import React from 'react';
import Annomedlogo from '../../asset/image/logo-annomed.png';
import { FaArrowAltCircleRight } from "react-icons/fa";
import './Styles.css';
import Registration from '../../components/RegistrationClient';

function RegistrationClient() {

    return (
        <div className="register-bg">
            <div className="navbar-con">
                <div className="header-con">
                    <div className="logo-con">
                        <a href="/">
                            <img             
                            alt=""
                            src={Annomedlogo}
                            className="d-inline-block align-top"/>
                        </a>
                    </div>
                    <ul className="navbar-menu">
                        <div className="signin-link" >
                            <p>Registration as Doctor</p>
                            <a href="/RegistrationWorker">Sign Up</a>
                            <FaArrowAltCircleRight />
                        </div>
                    </ul>
                </div>
            </div>
            <Registration />
        </div>
    )
}

export default RegistrationClient