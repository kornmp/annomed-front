import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import DummyImage from '../../asset/image/dummy-xray1.png';
import { Input, InputLabel, NativeSelect } from '@material-ui/core';
import FileBase from 'react-file-base64';
import './Styles.css';

function ProjectCreate() {

    const [button, setButton] = useState('Detail');
    const [projData, setProjData] = useState({ 
        instruction: '', 
    })
    console.log(projData);

    const sideBarDetail = [
        {header:'Tips on Project Creation', image: DummyImage, desc: 'Please fill labeling instruction with a list of desired lables. Please fill labeling instruction with a list of desired lables. Please fill labeling instruction with a list of desired lables. Please fill labeling instruction with a list of desired lables.' },
        {header:'Tips on Uploads', image: DummyImage, desc: 'Please fill labeling instruction with a list of desired lables. Please fill labeling instruction with a list of desired lables. Please fill labeling instruction with a list of desired lables. Please fill labeling instruction with a list of desired lables. ' }
    ]

    return (
        <div className="project-bg">
            <div className="project-container">
                <div className="project-headbar">
                    <Button className="header-btn" onClick={() => setButton('Detail')}><p>Detail</p></Button>
                    <Button className="header-btn" onClick={() => setButton('Upload')}><p>Upload</p></Button>
                </div>
                <div className="project-main">
                    <div className="project-body">
                        {button === 'Detail' ? (
                            <div className="project-inputcon">
                                <div className="proj-header">
                                    <p>Create New Project</p>
                                </div>
                                <div className="proj-input">
                                    <InputLabel htmlFor="select">Project Name*</InputLabel>
                                    <Input placeholder="Project Name..." className="input-bar" />
                                </div>
                                <div className="prej-dropdown">
                                    <div className="inner-dropdown">
                                        <InputLabel htmlFor="select">Data Type*</InputLabel>
                                        <NativeSelect className="nativeselect">
                                            <option value="10">Ten</option>
                                            <option value="20">Twenty</option>
                                        </NativeSelect>
                                    </div>
                                    <div className="inner-dropdown">
                                        <InputLabel htmlFor="select">Annotation Type*</InputLabel>
                                        <NativeSelect className="nativeselect">
                                            <option value="10">Ten</option>
                                            <option value="20">Twenty</option>
                                        </NativeSelect>
                                    </div>
                                </div>
                                <div className="prej-dropdown">
                                    <div className="inner-dropdown">
                                        <InputLabel htmlFor="select">Annotator Type*</InputLabel>
                                        <NativeSelect className="nativeselect">
                                            <option value="10">Ten</option>
                                            <option value="20">Twenty</option>
                                        </NativeSelect>
                                    </div>
                                    <div className="inner-dropdown">
                                        <InputLabel htmlFor="select">Speciality*</InputLabel>
                                        <NativeSelect className="nativeselect">
                                            <option value="10">Ten</option>
                                            <option value="20">Twenty</option>
                                        </NativeSelect>
                                    </div>
                                </div>
                                <div className="proj-input">
                                    <InputLabel htmlFor="select">Instructions*</InputLabel>
                                    <Input placeholder="Lorem Ipsum..." className="biginput-bar" />
                                </div>
                                <div className="proj-input">
                                    <InputLabel htmlFor="select">Upload Instruction</InputLabel>
                                    <div className="uploadFile"><FileBase type="file" multiple={false} onDone={({ base64 }) => setProjData({ ...projData, instruction: base64 })} /></div>
                                </div>
                                <Button className="header-btn" onClick={() => setButton('Upload')}><p>Next</p></Button>
                            </div>
                        ) : (
                            <div className="project-inputcon">
                                <div className="proj-header">
                                    <p>Create New Batch</p>
                                </div>
                                <div className="proj-input">
                                    <InputLabel htmlFor="select">Batch Name*</InputLabel>
                                    <Input placeholder="Benchmark Batch" className="input-bar" />
                                </div>
                                <div className="proj-input">
                                    <InputLabel htmlFor="select">Upload Type*</InputLabel>
                                    <NativeSelect id="select" className="longselect">
                                        <option value="10">none</option>
                                        <option value="20">Twenty</option>
                                    </NativeSelect>
                                </div>
                                <div className="proj-input">
                                    <InputLabel htmlFor="select">Export Type*</InputLabel>
                                    <NativeSelect id="select" className="longselect">
                                        <option value="10">none</option>
                                        <option value="20">Twenty</option>
                                    </NativeSelect>
                                </div>
                                <Button className="header-btn"><p>Complete</p></Button>
                            </div>
                        )}
                    </div>
                    <div className="project-sidebar">
                        {button === 'Detail' ? (
                            <div className="sidebar-main">
                                <div className="sidebar-box">
                                    <h3>{sideBarDetail[0].header}</h3>
                                    <img src={sideBarDetail[0].image} alt="" height="200px" />
                                    <p>{sideBarDetail[0].desc}</p>
                                </div>
                            </div>
                        ) : (
                            <div className="sidebar-main">
                                <div className="sidebar-box">
                                    <h3>{sideBarDetail[1].header}</h3>
                                    <img src={sideBarDetail[1].image} alt="" height="200px" />
                                    <p>{sideBarDetail[1].desc}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCreate
