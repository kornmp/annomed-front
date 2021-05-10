import React, { useState } from 'react';
import './Styles.css';
import dummy from '../../asset/image/howitworks-bar1-on.png';
import Image from '../../asset/image/product-images.png';
import Video from '../../asset/image/product-video.png';
import Text from '../../asset/image/product-text.png';
import Dicom from '../../asset/image/product-dicom.png';
import Alex from '../../asset/image/ourTeam-alex.png';

function OurProduct() {
    const ourProductHeader = "Our Products";
    const ourProductDesc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ";
    const testimonialHeader = "Testimonials";
    const testimonialDesc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ";
    const ourProductBar = [
        {id: 1, icon: Image, desc:"Images"},
        {id: 2, icon: Video, desc:"Videos"},
        {id: 3, icon: Text, desc:"Text"},
        {id: 4, icon: Dicom, desc:"DICOM"},
    ]

    const [product, setProduct] = useState(1)

    const ourProduct = [
        [{id: 1, icon: dummy, image:[], desc: "Classification image"},
        {id: 2, icon: dummy, image:[], desc: "Bounding Box image"},
        {id: 3, icon: dummy, image:[], desc: "dummy"},
        {id: 4, icon: dummy, image:[], desc: "dummy"}],
        [{id: 1, icon: dummy, image:[], desc: "Classification video"},
        {id: 2, icon: dummy, image:[], desc: "Bounding Box video"},
        {id: 3, icon: dummy, image:[], desc: "dummy"},
        {id: 4, icon: dummy, image:[], desc: "dummy"}]
    ]
    const testimonial = [
        {id: 1, image: Alex, desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's "},
        {id: 2, image: Alex, desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's "},
        {id: 3, image: Alex, desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's "},
        {id: 4, image: Alex, desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's "},
    ]

    return (
        <div className="ourProduct-main">
            <div className="ourProduct-bg">
                <div className="ourProduct-con">
                    <div className="ourProduct-textbox">
                        <h1>{ourProductHeader}</h1>
                        <p>{ourProductDesc}</p>
                    </div>
                    <div className="ourProduct-body">
                        <div className="ourProduct-bar">
                            {ourProductBar.map((value) => (
                                <div key={value.id} className="productBar-card" onClick={() => setProduct(value.id)}>
                                    <img src={value.icon} alt="" height="45px" />
                                    <p>{value.desc}</p>
                                </div>
                            ))}
                        </div>
                        {product === 1 ? (
                        <div className="ourPorduct-con">
                            {ourProduct[0].map((value) => (
                                <div key={value.id} className="main-ourProduct">
                                    <div className="ourProduct-desc">
                                        <img src={value.icon} alt="" className=""/>
                                        <p>{value.desc}</p>
                                    </div>
                                    <div className="ourProduct-card">
                                        <div className="ourProduct-image">
                                            <img src={value.image} alt="" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        ) : (
                            <div className="ourPorduct-con">
                                {ourProduct[1].map((value) => (
                                    <div key={value.id} className="main-ourProduct">
                                        <div className="ourProduct-desc">
                                            <img src={value.icon} alt="" className=""/>
                                            <p>{value.desc}</p>
                                        </div>
                                        <div className="ourProduct-card">
                                            <div className="ourProduct-image">
                                                <img src={value.image} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className="testimonial-con">
                    <div className="testimonial-textbox">
                        <h1>{testimonialHeader}</h1>
                        <p>{testimonialDesc}</p>
                    </div>
                    <div className="testimonial-container">
                            {testimonial.map((value) => (
                                <div key={value.id} className="testimonial-main">
                                    <div className="testimonial-card">
                                        <img src={value.image} alt="" className="testimonial-image"/>
                                        <p className="testimonial-paragraph">{value.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                </div>
            </div>
        </div>
    )
}

export default OurProduct
