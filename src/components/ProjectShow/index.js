import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { BiFilter } from 'react-icons/bi';
import { AiOutlinePlusCircle } from "react-icons/ai";
import DummyImage from '../../asset/image/dummy-xray.png';
import "./Styles.css";

function ProjectShow() {
    // const [currentPage, setCurrentPage] = useState(1);
    const [click, setClick] = useState(false);
    const [active, setActive] = useState("Overview");

    const dummyData = [
        {   id: '1',
            imageset: [DummyImage, DummyImage, DummyImage, DummyImage, DummyImage, DummyImage, DummyImage, DummyImage,],
            name: "Chest X Ray-COVID",
            files: "200,000",
            labels: "50,000",
            type: "Image Classification"
        },
        {   id: '2',
            imageset: [DummyImage, DummyImage, DummyImage, DummyImage, DummyImage, DummyImage, DummyImage, DummyImage,],
            name: "Chest X Ray-COVID",
            files: "200,000",
            labels: "50,000",
            type: "Bounding Box"
        },
        {   id: '3',
            imageset: [DummyImage, DummyImage, DummyImage, DummyImage, DummyImage, DummyImage, DummyImage, DummyImage,],
            name: "Chest X Ray-COVID",
            files: "200,000",
            labels: "50,000",
            type: "Bounding Box"
        },
        {   id: '4',
            imageset: [DummyImage, DummyImage, DummyImage, DummyImage, DummyImage, DummyImage, DummyImage, DummyImage,],
            name: "Chest X Ray-COVID",
            files: "200,000",
            labels: "50,000",
            type: "Bounding Box"
        },
    ]

    const auditData = [
        {name: 'Total Audited', number: '56k' },
        {name: 'Accepted', number: '52k' },
        {name: 'Redo', number: '3k'},
        {name: 'Rejected', number: '1k'}
    ];

    return (
        <div className="project-bg">
            <div className="project-container">
                {click ? (
                    <div className="btn-headbar">
                        {active === "Overview" ? (
                            <div>
                                <Button className="header-btn"><p>Overview</p></Button>
                            </div>
                        ) : (
                            <div>
                                <Button className="inactive-btn" onClick={() => setActive('Overview')}><p>Overview</p></Button>
                            </div>
                        )}
                        {active === "Batches" ? (
                            <div>
                                <Button className="header-btn"><p>Batches</p></Button>
                            </div>
                        ) : (
                            <div>
                                <Button className="inactive-btn" onClick={() => setActive('Batches')}><p>Batches</p></Button>
                            </div>
                        )}
                        {active === "Datasets" ? (
                            <div>
                                <Button className="header-btn"><p>Datasets</p></Button>
                            </div>
                        ) : (
                            <div>
                                <Button className="inactive-btn" onClick={() => setActive('Datasets')}><p>Datasets</p></Button>
                            </div>
                        )}
                        {active === "Upload" ? (
                            <div>
                                <Button className="header-btn"><AiOutlinePlusCircle /><p>Upload</p></Button>
                            </div>
                        ) : (
                            <div>
                                <Button className="inactive-btn" onClick={() => setActive('Upload')}><AiOutlinePlusCircle /><p>Upload</p></Button>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="btn-headbar">
                        <Button className="filter-btn"><BiFilter /><p>Filter</p></Button>
                        <Button className="header-btn"><AiOutlinePlusCircle /><p>Create</p></Button>
                    </div>
                )}
                {click ? (
                    <div className="overview-container">
                        <p>Overview</p>
                        <div className="audit-summary">
                            <div className="audit-main">
                                <div className="audit-number" style={{color:'#000000'}}>{auditData[0].number}</div>
                                <div className="audit-desc">{auditData[0].name}</div>
                            </div>
                            <div className="audit-main">
                                <div className="audit-number" style={{color:'#37C2A1'}}>{auditData[1].number}</div>
                                <div className="audit-desc">{auditData[1].name}</div>
                            </div>
                            <div className="audit-main">
                                <div className="audit-number" style={{color:'#FFD87D'}}>{auditData[2].number}</div>
                                <div className="audit-desc">{auditData[2].name}</div>
                            </div>
                            <div className="audit-main">
                                <div className="audit-number" style={{color:'#DB5454'}}>{auditData[3].number}</div>
                                <div className="audit-desc">{auditData[3].name}</div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="overview-main">
                        <div className="overview-body">
                            {dummyData.map((value, index) => (
                                <Button className="project-con" key={index} onClick={() => setClick(true)}>
                                    <div className="grid-gallery">
                                        {value.imageset.map((value, index) => (
                                            <div className="project-image" key={index}>
                                                <img alt="" src={value} height="80px" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="inner-con">
                                        <div className="inner-header">
                                            <p>{value.name}</p>
                                        </div>
                                        <div className="inner-desc">
                                            <p>{value.files} Files</p>
                                            <p>{value.labels} Labels</p>
                                            <p>{value.type}</p>
                                        </div>
                                    </div>
                                </Button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProjectShow
