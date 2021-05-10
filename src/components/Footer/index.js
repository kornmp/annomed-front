import React from 'react'
import './Styles.css'
import Everlogo from '../../asset/image/logo-ever.png'
import FacebookIcon from '../../asset/image/icon-facebook.png'
import InstagramIcon from '../../asset/image/icon-instagram.png'
import TwitterIcon from '../../asset/image/icon-twitter.png'

const Footer = () => {
    return (
        <div className="FooterContainer">
            <div className="FooterMain">
                <div className="footerLogo-container">
                    <a href="/">
                        <img             
                        alt=""
                        src={Everlogo}
                        width="132"
                        height="48"
                        className="d-inline-block align-top"/>
                    </a>
                </div>
                <div className="FooterLinkWrapper">
                    <div className="FooterLinkItems">
                        <div className="FooterLinkTitle">PRODUCTS</div>
                        <a href="/" className="FooterLink">Text</a>
                        <a href="/" className="FooterLink">Video</a>
                        <a href="/" className="FooterLink">Imaging</a>
                        <a href="/" className="FooterLink">3D</a>
                        <a href="/" className="FooterLink">Medical</a>
                        <a href="/" className="FooterLink">Audio</a>
                    </div>
                </div>
                <div className="FooterLinkWrapper">
                    <div className="FooterLinkItems">
                        <div className="FooterLinkTitle">VALUE</div>
                        <a href="/" className="FooterLink">For Doctors</a>
                        <a href="/" className="FooterLink">Enterprise</a>
                        <a href="/" className="FooterLink">Start-Up</a>
                        <a href="/" className="FooterLink">Researcher</a>
                        <a href="/" className="FooterLink">Innovator</a>
                    </div>
                </div>
                <div className="FooterLinkWrapper">
                    <div className="FooterLinkItems">
                        <div className="FooterLinkTitle">COMPANY</div>
                        <a href="/" className="FooterLink">About Us</a>
                        <a href="/" className="FooterLink">Activity</a>
                    </div>
                </div>
                <div className="FooterLinkWrapper">
                    <div className="FooterLinkItems">
                        <div className="FooterLinkTitle">BLOGS</div>
                        <a href="/" className="FooterLink">Research</a>
                        <a href="/" className="FooterLink">News</a>
                        <a href="/" className="FooterLink">Thoughts</a>
                    </div>
                </div>
                <div className="FooterLinkWrapper">
                    <div className="FooterLinkItems">
                        <div className="FooterLinkTitle">CONTACT US</div>
                        <div className="IconWrapper">
                            <a href="/" className="FooterLogo">
                                <img             
                                    alt=""
                                    src={FacebookIcon}
                                    width="15px"
                                    height="15px"
                                />            
                            </a>
                            <a href="/" className="FooterLogo">
                                <img             
                                    alt=""
                                    src={TwitterIcon}
                                    width="15px"
                                    height="15px"
                                />
                            </a>
                            <a href="/" className="FooterLogo">
                                <img             
                                    alt=""
                                    src={InstagramIcon}
                                    width="15px"
                                    height="15px"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright © 2020 EverAnno Scale AI, Inc. All right reserved</p>
            </div>
        </div>
    )
}

export default Footer