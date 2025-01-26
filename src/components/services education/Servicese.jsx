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
        <p className="quote">
          The walls between Art and Engineering exist only in our minds.
          <br /> ~ Theo Jansen
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
          <p>
          I am currently pursuing a Bachelors of Technology in Mechanical Engineering from IIT Ropar. I have finished my first year with CGPA of 8.92, placing me comfortably at the top of the class.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}

        >
          <h2>Achievments</h2>
          <p>
            Participated in the Inter IIT tech meet 2024, where i participated in the computer vision PS.
          </p>
          <p>
            Received Scholorship from my College for being in the top 7% of the whole batch.
          </p>
          <p>

          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Positions of Responsibility</h2>
          <p>
            Coordinator for the AI Club of IIT Ropar IOTA Cluster and the Student Executive of Google Developer's Student Club IIT Ropar. Currently mentoring a promising group of freshers to build Impactful Projects under the domains of CV and Robotics.
          </p>
          <p>
            Contributed to the development of the official website of BOST(Board of Science and Technology) IIT Ropar, along with the official website of IOTA-Cluster and the Advitiya Tech Fest Website.
          </p>

        </motion.div>
        <div className="mobilebox">
          <p>
          I have always been a top scorer throughout my school life, consistently placing at the top of my class. I finished Amity International School, Noida with countless awards and accolades and with 96% in both board examinations.  My primary Motto has always been "skills over everything". I am currently pursuing a Bachelors of Technology in Mechanical Engineering from IIT Ropar. I have finished my first year with CGPA of 8.82, placing me near the top of the class.
          Coordinator for the AI Club of IIT Ropar IOTA Cluster.Contributed to the development of the official website of BOST(Board of Science and Technology) IIT Ropar, along with the official website of IOTA-Cluster.

          </p>
        </div>

      </motion.div>
      <p className="mob">View on Laptop Please</p>
    </motion.div>
  );
};

export default Services;
