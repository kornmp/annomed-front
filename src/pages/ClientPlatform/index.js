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
import GearIcon from '../../asset/image/GearIcon.png';
import AccountIcon from '../../asset/image/AccountIcon.png';
import DocIcon from '../../asset/image/DocIcon.png';
import supportIcon from '../../asset/image/supportIcon.png';
import { VscBellDot } from "react-icons/vsc";
import { Button } from 'react-bootstrap';
import './Styles.css';


const ClientPlatform = () => {

  const [click, setClick] = useState("Dashboard")

  return (
    <div className="platform-bg">
      <div className="platform-body">
      <div className="sidebar">
        <img src={Everlogo} alt="" className="everlogo" width="132" height="48"/>
        <div className="sidebar-container">
          <div className="sidebar-upper">
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
          <div className="sidebar-lower">
            <div className="sidebar-inactive" onClick="">
              <img src={supportIcon} alt="" className="image-inactive"/>
              <p>Support</p>
            </div>
            <div className="sidebar-inactive" onClick="">
              <img src={DocIcon} alt="" className="image-inactive"/>
              <p>Documentation</p>
            </div>
            <div className="sidebar-inactive" onClick="">
              <img src={AccountIcon} alt="" className="image-inactive"/>
              <p>My Account</p>
            </div>
          </div>
        </div>
      </div>
      <div className="platform-main">
        <div className="platform-navbar sticky">
              <p>Welcome Back Kumar!</p>
              <form>
                <input className="contactUs-input" type="text" name="name" placeholder="" />
              </form>
              <div className="notice-bell" onClick="">
                <VscBellDot />
              </div>
              <div className="option-gear" onClick="">
                <img src={GearIcon} alt="" className=""/>
              </div>
              <Button className="navbar-btn">
                <a href="/">Log out</a>
              </Button>
        </div>
        <div className="platform-body">
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
    </div>
  );
}

export default ClientPlatform;