import "./NavbarStyle.css";

import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Nabar = () => {

 const [click, setClick] = useState(false);
 // eslint-disable-next-line no-unused-vars
 const handleClick = () => setClick(!click);



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
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
            <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  )
}

export default Nabar
