import React, { useState } from 'react';
import Everlogo from '../../asset/image/logo-ever.png';
import BillingIcon from '../../asset/image/BillingIcon.png';
import BrowseIcon from '../../asset/image/BrowseIcon.png';
import CreateProjIcon from '../../asset/image/CreateProjIcon.png';
import ActCreateProjIcon from '../../asset/image/ActCreateProjIcon.png';
import DashboardIcon from '../../asset/image/DashboardIcon.png';
import ActDashboardIcon from '../../asset/image/ActDashboardIcon.png';
import IntegrationIcon from '../../asset/image/IntegrationIcon.png';
import ProjIcon from '../../asset/image/ProjIcon.png';
import ActProjIcon from '../../asset/image/ActProjIcon.png';
// import GearIcon from '../../asset/image/GearIcon.png';
// import Account from '../../asset/image/AccountIcon.png';
import './Styles.css';


const ClientPlatform = () => {

  const [click, setClick] = useState("Dashboard")

  return (
    <div className="platform-bg">
      <div className="platform-body">
      <div className="sidebar">
        <img src={Everlogo} alt="" className="everlogo" width="132" height="48"/>
        <div className="sidebar-container">
            {click === "Dashboard" ? (
              <div className="sidebar-active">
                <div className="inner-sidebar">
                  <img src={ActDashboardIcon} alt="" className="image-active"/>
                  <p>Dashboard</p>
                </div>
              </div>
            ) : (
              <div className="sidebar-inactive" onClick={() => setClick("Dashboard")}>
                  <img src={DashboardIcon} alt="" className="image-inactive"/>
                  <p>Dashboard</p>
              </div>
            )}
            {click === "CreateProj" ? (
              <div className="sidebar-active">
                <div className="inner-sidebar">
                  <img src={ActCreateProjIcon} alt="" className="image-active"/>
                  <p>Create Project</p>
                </div>
              </div>
            ) : (
              <div className="sidebar-inactive" onClick={() => setClick("CreateProj")}>
                  <img src={CreateProjIcon} alt="" className="image-inactive"/>
                  <p>Create Project</p>
              </div>
            )}
            {click === "Projects" ? (
              <div className="sidebar-active">
                <div className="inner-sidebar">
                  <img src={ActProjIcon} alt="" className="image-active"/>
                  <p>Projects</p>
                </div>
              </div>
            ) : (
              <div className="sidebar-inactive" onClick={() => setClick("Projects")}>
                <img src={ProjIcon} alt="" className="image-inactive"/>
                <p>Projects</p>
              </div>
            )}
            {click === "Billing" ? (
              <div className="sidebar-active">
                <div className="inner-sidebar">
                  <img src={BillingIcon} alt="" className="image-active"/>
                  <p>Billing</p>
                </div>
              </div>
            ) : (
              <div className="sidebar-inactive" onClick={() => setClick("Billing")}>
                  <img src={BillingIcon} alt="" className="image-inactive"/>
                  <p>Billing</p>
              </div>
            )}
            {click === "Integrations" ? (
              <div className="sidebar-active">
                <div className="inner-sidebar">
                  <img src={IntegrationIcon} alt="" className="image-active"/>
                  <p>Integrations</p>
                </div>
              </div>
            ) : (
              <div className="sidebar-inactive" onClick={() => setClick("Integrations")}>
                  <img src={IntegrationIcon} alt="" className="image-inactive"/>
                  <p>Integrations</p>
              </div>
            )}
            {click === "Browse" ? (
              <div className="sidebar-active">
                <div className="inner-sidebar">
                  <img src={BrowseIcon} alt="" className="image-active"/>
                  <p>Browse Datasets</p>
                </div>
              </div>
            ) : (
              <div className="sidebar-inactive" onClick={() => setClick("Browse")}>
                  <img src={BrowseIcon} alt="" className="image-inactive"/>
                  <p>Browse Datasets</p>
              </div>
            )}
        </div>
      </div>
      <div className="platform-main">
        {/* {click === "Dashboard" ? (
          <ProjectDashBoard />
        ) : 
        click === "CreateProj" ? (
          <ProjectCreate />
        ) : (
          <ProjectShow />
        )} */}
      </div>
      </div>
    </div>
  );
}