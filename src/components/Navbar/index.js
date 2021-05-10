import React, { useState } from 'react'
import Annomedlogo from '../../asset/image/logo-annomed.png'
import './Styles.css'
import { Button } from 'react-bootstrap';
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    var prevScrollpos = window.pageYOffset;
    const [scroll, setScroll] = useState(true)
    
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            setScroll(true);
        } else {
            setScroll(false)
        }
        prevScrollpos = currentScrollPos;
    }

    return (
        <div className={scroll ? "navbar sticky" : "navbar"} >
            <div className="navbar-container">
                <div className="navbarLogo-container">
                    <a href="/">
                        <img             
                        alt=""
                        src={Annomedlogo}
                        className=""/>
                    </a>
                </div>
                <div className="navbar-con">
                    <ul className={click ? "menu active" : "menu"}>
                        <Button className="navbarMenu-link-btn">
                            <a href="/LoginWorker">Log in</a>
                        </Button>
                        <Button className="navbarMenu-link-btn">
                            <a href="/RegistrationWorker">Sign Up</a>
                        </Button>
                    </ul>
                    <div className="moblie-menu" onClick={handleClick}>
                        {click ? (
                            <FiX />
                        ) : (
                            <FiMenu />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar