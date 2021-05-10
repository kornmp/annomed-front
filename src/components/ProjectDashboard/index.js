import React, { useState } from 'react'
import './Styles.css'
import dummydashboard from '../../asset/image/dummydashboard.png'

function ProjectDashBoard() {
    const projectDashBoardTab = [{id: 1, name:'Tasks'}, {id: 2, name:'Auditing'}, {id: 3, name:'Billing'}, {id: 4, name:'Manage'}, {id: 5, name:'New'}];
    const [active, setActive] = useState("Tasks")

    return (
        <div>
            <div className="projectdashboard-main">
                <div className="projectheader-tab">
                    {projectDashBoardTab.map((value) => (
                        <div key={value.id}>
                        {active === value.name ? (
                            <button className="dashboardtab-active">{value.name}</button>
                        ) : ( 
                            <button onClick={() => setActive(value.name)} className="dashboardtab-inactive">{value.name}</button>
                        )}
                        </div>
                    ))}
                </div>
                <div className="dashboardtask-submit">
                    <p>Tasks Submitted Over Time</p>
                    <img src={dummydashboard} alt="" className=""/>
                </div>
                <div className="dashboardtask-complete">
                    <p>Task Completed Over Time</p>
                    <img src={dummydashboard} alt="" className=""/>
                </div>
            </div>
        </div>
    )
}

export default ProjectDashBoard
