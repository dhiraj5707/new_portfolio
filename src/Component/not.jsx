import React from "react";
import "./Services.css";
import Heartemoji from "../Img/heartemoji.png";
import Glasses from "../Img/glasses.png";
import Code from "./Code";
import Humble from "../Img/humble.png";
// import Resume from "../Img/resume.pdf";
import { useContext } from "react";
import { themeContext } from "../Context";
import { motion } from "framer-motion";

function Services() {
  const transition = { duration: 1, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span id="servi">
          <p>
            {" "}
            I design and build responsive, user-friendly websites tailored to
            your business needs,
            <br /> ensuring seamless functionality across all devices.
            <br />
            <br /> I create robust online stores with secure payment
            integrations, offering a smooth shopping experience to
            boost your sales.
            <br />I Can Build a Comercial Website and Portfolio and also themes
          </p>
        </span>
        <a href="https://drive.google.com/file/d/1g_7g7mOGzF1pOmkxFyFIglzV7mwmerXF/view?usp=drive_link" target="_blank">
          <button className="button s-button" id="btn1">
            Download CV
          </button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}

      <div className="cards">
        <motion.div
          id="card1"
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ left: "16rem" }}
        >
          <Code emoji={Glasses} heading={"Design"} detail={"Website Design"} />
        </motion.div>

        {/* second card */}

        <motion.div
          id="card2"
          initial={{ left: "-10rem" }}
          whileInView={{ left: "-2rem" }}
          transition={transition}
          style={{ top: "12rem", left: "-3rem" }}
        >
          <Code
            emoji={Heartemoji}
            heading={"Developer"}
            detail={"I'm Developer!"}
          />
        </motion.div>

        {/* third card */}

        <motion.div
          id="card3"
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ top: "19rem", left: "14rem" }}
        >
          <Code
            emoji={Humble}
            heading={"UI"}
            detail={"Bootstap,Tailwind,Reactjs"}
          />
        </motion.div>

        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
}

export default Services;
