
import "./HeroImgStyles.css";

import React from 'react'

import IntroImg from "../assets/heroimg.jpg";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
              <img className="intro-img" src={IntroImg} alt="IntroImg"/>

      </div>
    </div>
  )
}

export default HeroImg
