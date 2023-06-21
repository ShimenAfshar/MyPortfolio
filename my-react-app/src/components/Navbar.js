import "./NabarStyle.css";

import React from 'react'
import { link } from "react-router-dom";

const Nabar = () => {
  return (
    <div className="Header">
      <link to="/">
        <h1>Portfolio</h1>
      </link>
    </div>
  )
}

export default Nabar
