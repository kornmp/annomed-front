import React, { useState } from 'react';
import IconReady from '../../asset/image/activity-ready.png';
import IconComplete from '../../asset/image/activity-complete.png';
import IconCredited from '../../asset/image/activity-credited.png';
import IconInsufficient from '../../asset/image/activity-insufficient.png';
import IconUpload from '../../asset/image/activity-upload.png';
import { LineChart, XAxis, Tooltip, CartesianGrid, Line } from 'recharts';
import DummyImage from '../../asset/image/ourTeam-alex.png';
import { Button } from 'react-bootstrap';
import './Styles.css';

function ProjectDashBoard() {

    const [button, setButton] = useState('Tasks');

    const activityData = [
        {id:1, name:"Audit Ready!", image:IconReady, date:"2:30 PM 29 Apr 2021"},
        {id:2, name:"Audit Complete", image:IconComplete, date:"2:30 PM 29 Apr 2021"},
        {id:3, name:"Data Uploaded", image:IconUpload, date:"2:30 PM 29 Apr 2021"},
        {id:4, name:"Account Credited", image:IconCredited, date:"2:30 PM 29 Apr 2021"},
        {id:5, name:"Insufficient Balance", image:IconInsufficient, date:"2:30 PM 29 Apr 2021"},
    ];

    const auditData = [
        {name: 'Total Audited', number: '56k' },
        {name: 'Accepted', number: '52k' },
        {name: 'Redo', number: '3k'},
        {name: 'Rejected', number: '1k'}
    ];

    const Labelers = [
        {name: 'Dr. Suvrayam', position: 'Radiologist', image: DummyImage},
        {name: 'Dr. Nutt', position: 'Radiologist', image: DummyImage},
        {name: 'Dr. John', position: 'Radiologist', image: DummyImage},
        {name: 'Dr. Jack', position: 'Radiologist', image: DummyImage},
    ]

    const data = [
        {name: 'A', uv: 400, pv: 240, amt: 240},
        {name: 'b', uv: 300, pv: 130, amt: 150},
        {name: 'c', uv: 200, pv: 230, amt: 190},
        {name: 'd', uv: 270, pv: 260, amt: 220},
        {name: 'e', uv: 350, pv: 210, amt: 250},
    ]

    return (
        <div className="project-bg">
            <div className="project-container">
                <div className="project-headbar">
                    <Button className="header-btn" onClick={() => setButton('Tasks')}><p>Task</p></Button>
                    <Button className="header-btn" onClick={() => setButton('Audit')}><p>Audit</p></Button>
                </div>
                <div className="project-main">
                    <div className="project-body">
                        {button === 'Tasks' ? (
                            <div>
                                <div className="taskgraph-container">
                                    <p>Tasks Submitted Over Time</p>
                                    <LineChart
                                    width={400}
                                    height={400}
                                    data={data}
                                    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                                    >
                                        <XAxis dataKey="name" />
                                        <Tooltip />
                                        <CartesianGrid stroke="#f5f5f5" />
                                        <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
                                        <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
                                    </LineChart>      
                                </div>
                                <div className="taskgraph-container">
                                    <p>Total Files by Projects</p>
                                    <LineChart
                                    width={400}
                                    height={400}
                                    data={data}
                                    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                                    >
                                        <XAxis dataKey="name" />
                                        <Tooltip />
                                        <CartesianGrid stroke="#f5f5f5" />
                                        <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
                                        <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
                                    </LineChart>            
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className="taskgraph-container">
                                    <p>Audit Summary</p>
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
                                <div className="taskgraph-container">
                                    <p>Qaulity Over Time</p>
                                    <LineChart
                                    width={400}
                                    height={400}
                                    data={data}
                                    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                                    >
                                        <XAxis dataKey="name" />
                                        <Tooltip />
                                        <CartesianGrid stroke="#f5f5f5" />
                                        <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
                                        <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
                                    </LineChart>                  
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="project-sidebar">
                        {button === 'Tasks' ? (
                            <div>
                                <div className="sidebar-header">
                                    <p>Activity</p>
                                </div>
                                <div className="sidebar-content">
                                    {activityData.map((value, index) => (
                                        <div className="sidebar-con" key={index}>
                                            <img alt="" src={value.image} />
                                            <div className="sidebar-desc">
                                                <p className="sidebox-header">{value.name}</p>
                                                <p className="sidebox-desc">{value.date}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className="sidebar-header">
                                    <p>Labelers</p>
                                </div>
                                <div className="sidebar-content">
                                    {Labelers.map((value, index) => (
                                        <div className="sidebar-con" key={index}>
                                            <img alt="" src={value.image} />
                                            <div className="sidebar-desc">
                                                <p className="sidebox-header">{value.name}</p>
                                                <p className="sidebox-desc">{value.position}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDashBoard
