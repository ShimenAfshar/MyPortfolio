import "./FooterStyles.css";
import React from "react";
import { FaHome, FaPhone, FaMailBulk, FaGithub, FaLinkedin } from "react-icons/fa";
const email = "AfsharShimen@gmail.com";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>Stockport, Manchester</p>
                        </div>
                    </div>
                    <div className="Phone">
                        <h4>
                            <FaPhone
                                size={20}
                                style={{ color: "#fff", marginRight: "2rem" }}
                            />
                            07889999359
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk
                                size={20}
                                style={{ color: "#fff", marginRight: "2rem" }}
                            />
                            <a href={`mailto:${email}`}>{email}</a>
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About me </h4>
                    <p>
                        After gaining valuable experience in the beauty industry, I embarked
                        on an exciting journey in the tech world, driven by a desire for
                        fresh challenges
                    </p>
                    <div className="social">
                        {/* <FaCodewars size={20} style={{
                          color:
                              "#fff", marginRight: "1rem"
                      }} /> */}
                        <br></br>
                        <FaGithub
                            size={20}
                            style={{
                                color: "#fff",
                                marginRight: "1rem",
                            }}
                        />
                        <FaLinkedin
                            size={20}
                            style={{
                                color: "#fff",
                                marginRight: "1rem",
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer