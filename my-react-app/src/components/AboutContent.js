
import { Link } from "react-router-dom"
import "./AboutContentStyles.css"

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <p>After gaining valuable experience in the beauty industry, I embarked on an exciting journey in the tech world, driven by a desire for fresh challenges. By enrolling in Code Your Future's 10-month part-time full-stack bootcamp, I not only honed my skills but also expanded my knowledge. Now, I am actively seeking a company that nurtures a positive work culture and provides a supportive environment for growth. With unwavering motivation, I am dedicated to continuous personal and professional development.</p>
            <Link TO="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default AboutContent
