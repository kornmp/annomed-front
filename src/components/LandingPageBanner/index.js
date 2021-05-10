import React from 'react'
import './Styles.css'
import EverLogo from "../../asset/image/logo-ever.png";
import RamaLogo from "../../asset/image/logo_rama.png";
import IdairLogo from "../../asset/image/logo_i-dair.png";
import KKULogo from "../../asset/image/logo-kku.png";
import homepagebanner from "../../asset/image/homepagebanner-image.png"

let bannerData = {
    title: "Medical Data Annotation Service",
    desc: "Take your training dataset to a whole new level by outsourcing annotations to AnnoMed. We partner with best medical universities to label, sourcec and create best training data for AI."
}

const index = () => {
    return (
        <div className="banner-main">
            <div className="banner-bg">
                <div className="banner-container">
                    <div className="banner-con">
                        <div className="banner-text">
                            <p className="banner-title">{bannerData.title}</p>
                            <p className="banner-dsc">{bannerData.desc}</p>
                            <form className="banner-input">
                                <input className="input-box" type="text" name="name" placeholder="Enter your email" />
                                <input className="input-btn" type="submit" value="Getting Start!" />
                            </form>
                        </div>
                    </div>
                    <div className="banner-img bounce">
                        <img src={homepagebanner} alt="" className="homepagebanner" / >
                    </div>
                </div>
            </div>
            <div className="partner-logo">
                <div>
                    <img src={EverLogo} alt="" className="partner-image" />
                </div>
                <div>
                    <img src={RamaLogo} alt="" className="partner-image" />
                </div>
                <div>
                    <img src={IdairLogo} alt="" className="partner-image" />
                </div>
                <div>
                    <img src={KKULogo} alt="" className="partner-image" />
                </div>
            </div>
        </div>
    )
}

export default index
