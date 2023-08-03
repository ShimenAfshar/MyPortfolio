import "./WorkCardStyles.css";

import React from "react";

import pro1 from "../assets/finalll.jpg";
import { NavLink } from "react-router-dom";

const WorkCard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={pro1} alt="image"/>
                <h2 className="project-title">Project's Title</h2>
                <div className="pro-detailes">
                      <p>this is a text</p>
                      <div className="pro-btns">
                        <NavLink to="url.com" className="btn">View</NavLink>

                      </div>
                </div>

            </div>

        </div>
    
    </div>
  )
}

export default WorkCard
