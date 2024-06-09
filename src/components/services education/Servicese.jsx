import { useRef } from "react";
import "./services.scss";
import { useState } from "react";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I am a College Student who loves to code and learn new things. 
          <br /> I am a Web Developer and an AI/ML enthusiast.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>My Education</motion.b> 
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Schooling</h2>
          <p>
            I have always been a top scorer throughout my school life, consistently placing at the top of my class. I finished Amity International School, Noida with countless awards and accolades and with 96% in both board examinations
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
          
        >
          <h2>College</h2>
          <p>
            My primary Motto has always been "skills over everything". I am currently pursuing a Bachelors of Technology in Mechanical Engineering from IIT Ropar. I have finished my first year with CGPA of 8.82, placing me near the top of the class.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Positions of Responsibility</h2>
          <p>
            Coordinator for the AI Club of IIT Ropar IOTA Cluster
          </p>
          <p>
            Contributed to the development of the official website of BOST(Board of Science and Technology) IIT Ropar, along with the official website of IOTA-Cluster.
          </p>
        </motion.div>
        <div className="mobilebox">
          <p>
          I have always been a top scorer throughout my school life, consistently placing at the top of my class. I finished Amity International School, Noida with countless awards and accolades and with 96% in both board examinations.  My primary Motto has always been "skills over everything". I am currently pursuing a Bachelors of Technology in Mechanical Engineering from IIT Ropar. I have finished my first year with CGPA of 8.82, placing me near the top of the class.
          Coordinator for the AI Club of IIT Ropar IOTA Cluster.Contributed to the development of the official website of BOST(Board of Science and Technology) IIT Ropar, along with the official website of IOTA-Cluster.

          </p>
        </div>
        
      </motion.div>
    </motion.div>
  );
};

export default Services;
