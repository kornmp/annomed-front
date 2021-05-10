import React, { useState, useEffect } from 'react';
import './Styles.css';
import { useDispatch, useSelector } from 'react-redux';
// import { getProjects } from '../../actions/projects.js';
import { CircularProgress } from '@material-ui/core';

function ProjectShow() {
    const headerTab = [{id:1, name:'All Projects'}];
    const [currentPage, setCurrentPage] = useState(1);

    // const dispatch = useDispatch();
    const projects = useSelector((state) => state.projects);

    // useEffect(() => {
    //     dispatch(getProjects());
    // }, [dispatch])

    var pagenumber = Math.ceil(projects.length/12);
    
    let page = [];
    while (pagenumber > 0) {
        page.push(pagenumber);
        pagenumber--;
    }

    return (
        <div className="main">
            <div className="header-tab">
                {headerTab.map(value => (
                    <button key={value.id}>{value.name}</button>
                ))}
            </div>
            <div className="body-container">
                {!projects.length ? <CircularProgress /> : (
                    <div className="image-container">
                        {projects.map((value, index) => (
                            <div key={value._id}>
                                { Math.ceil((index+1)/12) === currentPage ? (
                                    <div className="imagecard">
                                        <img src={value.selectedFile} alt="" className=""/>
                                        <div className="desccard">
                                            <div>{value.labelType}</div>
                                            <div>{value.projectName}</div>
                                            <div>{value.dataType} files</div>
                                            <div>{value.labelTag}</div>
                                        </div>
                                    </div>
                                ) : 
                                    null
                                }
                            </div>
                        ))}
                    </div>
                )}
                <div className="page-container">
                    {page.map((value, index) => (
                        <div key={index}>
                        {currentPage === page ? (
                            <button className="active-btn">{value}</button>
                        ) : (
                            <button onClick={() => setCurrentPage(value)} className="inactive-btn">{value}</button>
                        )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectShow
