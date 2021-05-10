import React, { useState } from 'react';
import './Styles.css';
import Bar1on from '../../asset/image/howitworks-bar1-on.png';
import Bar1off from '../../asset/image/howitworks-bar1-off.png';
import Screen1 from'../../asset/image/howitworks-screen1.png';
import { Button } from 'react-bootstrap';

const HowItWorks = () => {
    const [step, setStep] = useState(1);
    const [active, setActive] = useState(1);

    const HowItWorksHeader = "How it Works";
    const HowItWorksDesc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ";
    const HowItWorksScreen = [
        {id: 1, header: "Upload", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "},
        {id: 2, header: "step2", desc: "desc2"},
        {id: 3, header: "step3", desc: "desc3"},
        {id: 4, header: "step4", desc: "desc4"},
    ]


    function barStepOne() {
        setStep(1);
        setActive(1);
    }

    function barStepTwo() {
        setStep(2);
        setActive(2);
    }

    function barStepThree() {
        setStep(3);
        setActive(3);
    }

    function barStepFour() {
        setStep(4);
        setActive(4);
    }

    return (
        <div className="howItWorks-main">
            <div className="howItWorks-bg">
                <div className="howItWork-textbox">
                    <h1>{HowItWorksHeader}</h1>
                    <p>{HowItWorksDesc}</p>
                </div>
                <div className="howItWorks-body">
                    <div className="howItWorks-bar">
                        { active === 1 ? 
                            (
                            <Button className="howItWorks-on" onClick={barStepOne}>
                                    <img src={Bar1on} alt="" height="40px" />
                            </Button>
                            ) : (
                                <Button className="howItWorks-off" onClick={barStepOne}>
                                        <img src={Bar1off} alt="" height="40px" />
                                </Button>
                            )
                        }
                        { active === 2 ? 
                            (
                            <Button className="howItWorks-on" onClick={barStepTwo}>
                                    <img src={Bar1on} alt="" height="40px" />
                            </Button>
                            ) : (
                                <Button className="howItWorks-off" onClick={barStepTwo}>
                                        <img src={Bar1off} alt="" height="40px" />
                                </Button>
                            )
                        }
                        { active === 3 ? 
                            (
                            <Button className="howItWorks-on" onClick={barStepThree}>
                                    <img src={Bar1on} alt="" height="40px" />
                            </Button>
                            ) : (
                                <Button className="howItWorks-off" onClick={barStepThree}>
                                        <img src={Bar1off} alt="" height="40px" />
                                </Button>
                            )
                        }
                        { active === 4 ? 
                            (
                            <Button className="howItWorks-on" onClick={barStepFour}>
                                    <img src={Bar1on} alt="" height="40px" />
                            </Button>
                            ) : (
                                <Button className="howItWorks-off" onClick={barStepFour}>
                                        <img src={Bar1off} alt="" height="40px" />
                                </Button>
                            )
                        }
                    </div>
                    <div className="howItWorks-screen">
                        {step === 1 ?
                            (
                                <div className="howItWorks-screen-con">
                                    <div className="howItWorks-screen-header">{HowItWorksScreen[0].header}</div>
                                    <div className="howItWork-screen-desc">{HowItWorksScreen[0].desc}</div>
                                    <img src={Screen1} alt="" height="400px" />
                                </div>
                            ) : step === 2 ? (
                                <div className="howItWorks-screen-con">
                                    <div className="howItWorks-screen-header">{HowItWorksScreen[1].header}</div>
                                    <div className="howItWork-screen-desc">{HowItWorksScreen[1].desc}</div>
                                    <img src={Screen1} alt="" height="400px" />
                                </div>
                            ) : step === 3 ? (
                                <div className="howItWorks-screen-con">
                                    <div className="howItWorks-screen-header">{HowItWorksScreen[2].header}</div>
                                    <div className="howItWork-screen-desc">{HowItWorksScreen[2].desc}</div>
                                    <img src={Screen1} alt="" height="400px" />
                                </div>
                            ) : step === 4 ? (
                                <div className="howItWorks-screen-con">
                                    <div className="howItWorks-screen-header">{HowItWorksScreen[3].header}</div>
                                    <div className="howItWork-screen-desc">{HowItWorksScreen[3].desc}</div>
                                    <img src={Screen1} alt="" height="400px" />
                                </div>
                            ) : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks;
