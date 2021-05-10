import React from 'react'
import Annomedlogo from '../../asset/image/logo-annomed.png';
import { FaArrowAltCircleRight } from "react-icons/fa";
import './Styles.css';
import Login from '../../components/LoginWorker';

function LoginWorker() {
    return (
        <div className="login-bg">
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
                            <p>Login as Client</p>
                            <a href="/LoginClient">Login</a>
                            <FaArrowAltCircleRight />
                        </div>
                    </ul>
                </div>
            </div>
            <Login />
        </div>
    )
}


export default LoginWorker;
