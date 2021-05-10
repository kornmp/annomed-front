import React from 'react';
import './Styles.css';
import FacebookIcon from '../../asset/image/icon-facebook.png'
import InstagramIcon from '../../asset/image/icon-instagram.png'
import TwitterIcon from '../../asset/image/icon-twitter.png'

function ContactUs() { 
    const ContactUsHeader = "Speak to us";
    const ContactUsDesc = "Fill up the form and our team will get back to you within 48 hours.";
    

    return (
            <div className="contactUs-bg">
                <div className="contactUs-con">
                    <div className="contactUs-textbox">
                        <h1>{ContactUsHeader}</h1>
                        <p>{ContactUsDesc}</p>
                    </div>
                    <div className="contactUs-contact">
                        <div className="contact">
                            <img             
                                alt=""
                                src={FacebookIcon}
                                width="15px"
                                height="15px"
                            />
                            <p>+66 43045244</p>
                        </div>
                        <div className="contact">
                            <img             
                                alt=""
                                src={FacebookIcon}
                                width="15px"
                                height="15px"
                            />
                            <p>kumar@everapp.io</p>
                        </div>
                        <div className="contact">
                            <img             
                                alt=""
                                src={FacebookIcon}
                                width="15px"
                                height="15px"
                            />
                            <p>See Google Maps here.</p>
                        </div>
                    </div>
                    <div className="socialmedia">
                        <img             
                            alt=""
                            src={FacebookIcon}
                            width="15px"
                            height="15px"
                        />
                        <img             
                            alt=""
                            src={TwitterIcon}
                            width="15px"
                            height="15px"
                        />
                        <img             
                            alt=""
                            src={InstagramIcon}
                            width="15px"
                            height="15px"
                        />
                    </div>
                </div>
                <div className="contactUs-container">
                    <form className="contactUs-form">
                        <p>Name:</p>
                        <input className="contactUs-input" type="text" name="name" placeholder="" />
                        <p>Email:</p>
                        <input className="contactUs-input" type="text" name="email" placeholder="" />
                        <p>Message:</p>
                        <input className="contactUs-input" type="text" name="message" placeholder="" />
                        <input className="contactUs-submit" type="submit" value="Send Message" />
                    </form>
                </div>
            </div>
    )
}

export default ContactUs
