// import React, {useState} from 'react'
// import ProjectCreate from '../ProjectCreate';
// import ProjectDashBoard from '../ProjectDashboard';
// import ProjectDetail from '../ProjectDetail';
// import ProjectShow from '../ProjectShow';
// import './Styles.css'


// function ProjectBody() {
//     const [click, setClick] = useState(false);
//     const [mainBody, setMainBody] = useState('default');

//     return (
//         <div className="projectbody-main">
//             <div className="projectbanner-bg">
//                 <div className="projectbanner-con">
//                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
//                     <a href="/">Guildes: New Project</a>
//                 </div>
//             </div>
//             <div className="projectbody-container">
//                 <div className="projectbar-container">
//                     {click === 'Projects' ? 
//                     (<div>
//                         <button onClick={() => setClick('Projects')} className="projectbar-btnfirst">Projects</button>
//                         <div className="subprojectbar">
//                             <button onClick={() => setMainBody('ProjectCreate')}>Create New Project</button>
//                             <button onClick={() => setMainBody('ProjectShow')}>All Projects</button>
//                             <button onClick={() => setMainBody('ProjectDetail')}>Project Detail</button>
//                         </div>
//                     </div>
//                     ) : (
//                     <div>
//                         <button onClick={() => setClick('Projects')} className="projectbar-btnfirst">Projects</button>
//                     </div>
//                     )}
//                     <div>
//                         <button onClick={() => setClick('Integrations')} className="projectbar-btn">Integrations</button>
//                     </div>
//                     <div>
//                         <button onClick={() => setClick('Billing')} className="projectbar-btn">Billing</button>
//                     </div>
//                     <div>
//                         <button onClick={() => setClick('DataCenter')} className="projectbar-btn">Data Center</button>
//                     </div>
//                     <div>
//                         <button onClick={() => setClick('Documentation')} className="projectbar-btnlast">Documentation</button>
//                     </div>
//                 </div>
//                 <div className="projectbody-content">
//                         {mainBody === 'default' ? (
//                             <ProjectDashBoard /> ) : 
//                         mainBody === 'ProjectCreate' ? (
//                             <ProjectCreate />) :
//                         mainBody === 'ProjectShow' ? (
//                             <ProjectShow />
//                         ) : (
//                             <ProjectDetail />
//                         )}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ProjectBody
