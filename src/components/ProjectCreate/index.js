import React, { useState } from 'react'
import './Styles.css'
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';

import { createProject } from '../../actions/projects.js';

function ProjectCreate() {
    const [addProject, setAddProject] = useState({ projectName: '', labelType: '', dataType: '', labelTag: '', labelInstruction: '', selectedFile: '' });
    const dispatch = useDispatch();

    const handleChange = e => {
        const { name, value } = e.target;
        setAddProject(prevState => ({
            ...prevState,
            [name]: value
        }))
        console.log(addProject)
    }

    const clear = () => {
        setAddProject({ projectName: '', labelType: '', dataType: '', labelTag: '', labelInstruction: '', selectedFile: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch(createProject(addProject));
        clear();
    };

    return (
        <div className="projectcreate-main">
            <div className="projectcreate-bar">
                <p>New Projects</p>
            </div>
            <div className="projectcreate-container">
                <div className="projectcreate-header">
                    <p>Project Detail</p>
                </div>
                <div className="projectcreate-con">
                    <form className="projectcreate-form" onSubmit={handleSubmit}>
                        <div className="projectinput-name">
                            <p className="projectbox-label">Project Name</p>
                            <input className="projectbox-name" type="text" onChange={handleChange} name="projectName" placeholder="Project Name" />
                        </div>
                        <div className="projecttype-tag">
                            <div className="projectinput-type">
                                <p className="projectbox-label">Type of Label</p>
                                <input className="projectbox-dropdown" type="text"  onChange={handleChange} name="labelType" placeholder="Lorem Ipsum"></input>
                                <p className="projectbox-label">Data Type</p>
                                <input className="projectbox-dropdown" type="text" onChange={handleChange} name="dataType" placeholder="Lorem Ipsum"></input>
                            </div>
                            <div className="projectinput-tage">
                                <p className="projectbox-label">Label Tages</p>
                                <input className="projectbox-dropdown" type="text" onChange={handleChange} name="labelTag" placeholder="Label Tags"></input>
                            </div>
                        </div>
                        <div className="projectinput-instruction">
                            <p className="projectbox-label">Instruction of Label</p>
                            <input className="projectbox-dropdown" type="text" onChange={handleChange} name="labelInstruction" placeholder="Lorem Ipsum"></input>
                        </div>
                        <div className="projectinput-filebase"><FileBase type="file" multiple={false} onDone={({ base64 }) => setAddProject({ ...addProject, selectedFile: base64 })} /></div>
                        <input className="projectinput-submit" type="submit" value="Create Project" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProjectCreate
