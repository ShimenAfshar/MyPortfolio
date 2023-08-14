import "./WorkCardStyles.css";

import React from "react";

import pro1 from "../assets/finalll.jpg";
import { NavLink } from "react-router-dom";

const WorkCard = () => {
  return (
      <div className="project-card">
          <img src={pro1} alt="image" />
          <h2 className="project-title">Attendance Tracker</h2>
          <div className="pro-detailes">
              <p>Developed a class registration system to track attendance, ensuring accurate record-keeping and streamlined administrative processes</p>
              <div className="pro-btns">
                  <NavLink to="url.com"
                      className="btn">
                      View
                  </NavLink>
                  <NavLink to="url.com" className="btn">Source</NavLink>

              </div>
          </div>

      </div>
  )
}

export default WorkCard
