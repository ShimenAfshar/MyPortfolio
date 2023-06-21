import "./NavbarStyle.css";

import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";

const Nabar = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className="nav-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="Project">Project</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nabar
