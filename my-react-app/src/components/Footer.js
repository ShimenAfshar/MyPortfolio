
import "./FooterStyles.css"

import React from 'react'
import { FaHome, FaPhone, FaMailBulk } from "react-icons/fa"


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
         <div className="left">
            <div className="location">
                <FaHome size={20} style={{ color:
                    "#fff", marginRight: "2rem" }} />
                    <div>
                        <p>Stockport, Manchester</p> 
                  </div>
            </div>
            <div className="Phone">
                    <h4><FaPhone size={20} style={{ color:
                        "#fff", marginRight: "2rem" }} />
                          07889999359</h4>
            </div>
                  <div className="email">
                      <h4><FaMailBulk size={20} style={{ color:
                         "#fff", marginRight: "2rem" }} />
                       Shimenafshar@gmail.com</h4>
                  </div>
         </div>
         <div className="right"></div>
        </div>
    </div>
  );
};

export default Footer
