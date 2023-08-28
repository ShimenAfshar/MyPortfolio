import React from "react"

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from "../components/HeroImg2";
import { Form } from "react-router-dom";


const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT" text="Get in Touch" />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
