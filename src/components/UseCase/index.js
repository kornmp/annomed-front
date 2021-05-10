import React, { useState } from 'react';
import './Styles.css';
import Cancer from '../../asset/image/usecase-cancer.png';
import Dental from '../../asset/image/usecase-dental.png';
import Neuron from '../../asset/image/usecase-neuron.png';
import Radiology from '../../asset/image/usecase-radiology.png';
import Cardiology from '../../asset/image/usecase-cardiology.png'
import Computer from '../../asset/image/computer.jpg';
import Cost from '../../asset/image/project-cost.png';
import Assurance from '../../asset/image/project-assurance.png';
import Scalability from '../../asset/image/project-scalability.png';
import Workforce from '../../asset/image/project-workforce.png';
import Secure from '../../asset/image/project-secure.png';
import CostBefore from '../../asset/image/cost-before.png';
import CostAfter from '../../asset/image/cost-after.png';
import WorkforceBefore from '../../asset/image/workforce-before.png';
import WorkforceAfter from '../../asset/image/workforce-after.png';
import { BsChevronRight } from 'react-icons/bs';
import { BsChevronLeft } from 'react-icons/bs';

const UseCaseCard = [
    {id:1, image:Cancer, desc:'Oncology', detail:"PET scans, Complete blood count (CBC) and cancer biomarkers"},
    {id:2, image:Cardiology, desc:'Cardiology', detail:"Label Angiographs, Cardiac biomarkers, Ultrasound and ECGs."},
    {id:3, image:Neuron, desc:'Neurology', detail:"MRI, CT, Cerebral angiograms, EEG and Nerve conduction studies"},
    {id:4, image:Radiology, desc:'Radiology', detail:"Disease detection in X rays,  CT  scans, MRI, Ultrasound"},
    {id:5, image:Dental, desc:'Dentistry', detail:"Lorem Ipsum is simply dummy text"},
    {id:6, image:Radiology, desc:'Radiology', detail:"Lorem Ipsum is simply dummy text"},
]

const ComHeader = "Simplify Your AI Workload";
const ComDesc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ";

const ProjectCost = [
    {id:1, image:Cost, desc:'Project Cost'},
    {id:2, image:Assurance, desc:'Quality Assurance'},
    {id:3, image:Scalability, desc:'Scalability'},
    {id:4, image:Secure, desc:'Secure'},
    {id:5, image:Workforce, desc:'Workforce Management'},
]

const ChangeData = [
    {   id:1, beforeImage:CostBefore, afterImage:CostAfter, 
        beforeDesc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
        afterDesc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
    },
    {   id:2, beforeImage:WorkforceBefore, afterImage:WorkforceAfter, 
        beforeDesc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
        afterDesc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
    },
]
 

const UseCase = () => {
    const [before, setBefore] = useState(true)
    const [cost, setCost] = useState(1)

    const handleToggle = () => {
        setBefore(!before)
        console.log(before)
    }

    return (
        <div className="main-usecase">
            <div className="usecase-bg">
                <div className="usecase-container">
                    <div className="usecase-con">
                    {UseCaseCard.map((value) => (
                        <div key={value.id} className="main-usecase">
                            <div className="usecase-space">
                                <div className="usecase-card">
                                    <div className="usecase-image">
                                        <img src={value.image} alt="" className="UseCaseImage" />
                                    </div>
                                </div>
                                <div className="usecase-desc">
                                    <p>{value.desc}</p>
                                </div>
                                <div className="usecase-detail">
                                    <p>{value.detail}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            <div className="computer-bg">
                <div className="computer-container">
                    <div className="com-image">
                        <img src={Computer} alt="" height="450px"/>
                    </div>
                    <div className="com-text">
                        <h1 className="com-header">{ComHeader}</h1>
                        <p className="com-desc">{ComDesc}</p>
                    </div>
                </div>
            </div>
            <div className="cost-bg">
                <div className="cost-container">
                    <div className="cost-con">
                    {ProjectCost.map((value) => (
                        <div key={value.id} className="main-cost" onClick={() => setCost(value.id)}>
                            <div className="cost-card">
                                <div className="cost-image">
                                    <img src={value.image} alt="" className="CostImage" height="30px" />
                                </div>
                            </div>
                            <div className="cost-desc">
                                <p>{value.desc}</p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            <div className="annomedchange-bg">
                {cost === 1 ? (
                    <div>
                        {before ? (
                        <div className="annomedchange-container">
                            <div className="annomedchange-textbefore">
                                <h1>Before Anno Med</h1>
                            </div>
                            <div className="annomedchange-con">
                                <img src={ChangeData[0].beforeImage} alt="" className="" height="30px" />
                                <p>{ChangeData[0].beforeDesc}</p>
                                <div className="changearrow" onClick={handleToggle}>
                                    <BsChevronRight />
                                </div>
                            </div>
                        </div>
                        ) : (
                        <div className="annomedchange-container">
                            <div className="annomedchange-textafter">
                                <h1>After Anno Med</h1>
                            </div>
                            <div className="annomedchange-con">
                                <div className="changearrow" onClick={handleToggle}>
                                    <BsChevronLeft />
                                </div>
                                <img src={ChangeData[0].afterImage} alt="" className="" height="30px" />
                                <p>{ChangeData[0].afterDesc}</p>
                            </div>
                        </div>
                        )}
                    </div>

                ) : (
                    <div>
                        {before ? (
                        <div className="annomedchange-container">
                            <div className="annomedchange-textbefore">
                                <h1>Before Anno Med</h1>
                            </div>
                            <div className="annomedchange-con">
                                <img src={ChangeData[1].beforeImage} alt="" className="" height="30px" />
                                <p>{ChangeData[1].beforeDesc}</p>
                                <div className="changearrow" onClick={handleToggle}>
                                    <BsChevronRight />
                                </div>
                            </div>
                        </div>
                        ) : (
                        <div className="annomedchange-container">
                            <div className="annomedchange-textafter">
                                <h1>After Anno Med</h1>
                            </div>
                            <div className="annomedchange-con">
                                <div className="changearrow" onClick={handleToggle}>
                                    <BsChevronLeft />
                                </div>
                                <img src={ChangeData[1].afterImage} alt="" className="" height="30px" />
                                <p>{ChangeData[1].afterDesc}</p>
                            </div>
                        </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default UseCase