import React, { useContext } from "react";
import "./Services.css";
import Code from './Code';
import HeartEmoji from "../Img/heartemoji.png";
import Glasses from "../Img/glasses.png";
import Humble from "../Img/humble.png";
import { themeContext } from "../Context";
import { motion } from "framer-motion";
// import Resume from '../Img/resume.pdf';

const Services = () => {
  const transition ={duration:1,type:'spring'}
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome" id="aws_all">
        {/* dark mode */}
        <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
        <span>services</span>
        <spane>
        I design and build responsive, user-friendly websites tailored to your business needs, 
        ensuring seamless functionality across all devices.<br/><br />
        I create robust online stores with secure payment integrations, offering a smooth shopping experience to boost your sales.
        <br/><br/>
        I Can Build a Comercial Website and Portfolio and also themes
        </spane>
        <a href="https://drive.google.com/file/d/1g_7g7mOGzF1pOmkxFyFIglzV7mwmerXF/view?usp=drive_link" target="_blank">
          <button className="button s-button" id="btn_down">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards" id="cards_all">
        {/* first card */}
        <motion.div
        initial={{left: '40 rem'}}
          whileInView={{ left: "15rem" }}
          transition={transition}
        >
          <Code
            emoji={HeartEmoji}
            heading={"Developer"}
            detail={"Web Developer"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
        initial={{left: '-11rem', top: "12rem",}}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Code
            emoji={Glasses}
            heading={"Design"}
            detail={"Backend Developer, Python,Django,MySQL                "}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
        initial={{top: "19rem", left: '25rem'}}
          initial1={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "15rem" }}
          transition={transition}
        >
          <Code
            emoji={Humble}
            heading={"UI/UX"}
            detail={'Html, Css, Bootstrap,  JavaScript,React js'}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}></div>
      </div>
    </div>
  );
  };
export default Services 