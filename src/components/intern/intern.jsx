import { useRef } from "react";
import "./intern.scss";
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

const Internships = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="internships"
      variants={variants}
      initial="initial"
      animate="animate"
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        <p className="quote">
          Experience is the name everyone gives to their mistakes.
          <br /> ~ Oscar Wilde
        </p>
        <hr />
      </motion.div>

      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Work Experience</motion.b>
          </h1>
          <a href="/resume.pdf" download>
            <button className = "downloadBtn">
              <motion.b whileHover={{ color: "purple" }}>Download Resume</motion.b>
            </button>
          </a>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Research Work under Dr Manish Agrawal</h2>
          <p>
            -Developed and researched uncertainty quantification techniques for Deep Neural Networks using Active Learning, leading
            to a 60% improvement over the industry standard.
            – Optimized indicator functions for uncertainty estimation using Genetic Algorithms, improving decision-making between
            FEM and neural network-based simulations. Reduced the time impact of predicting maximum stress values from 1 day to
            a matter of seconds
        </p>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Research Internship at IISc Bangalore under Dr Akshay Joshi</h2>
          <p>
            - Developed and Researched various methods to make Unets invariant to rotation and scaling, by modifying the CNN feed
                forward process, performing custom convolutions, changing the operating coordinate system of the CNN layers
            <br />
            – Used this to help segment defects in a 3D print xtf files, significantly reducing the time required for classifying such defects
            from an hour to a matter of seconds
          </p>
        </motion.div>

        <div className="mobilebox">
          <p>
            1. Internship @ ABC Research Lab: Worked on physics-informed neural networks for simulating functionally graded materials with uncertainty quantification.
            2. Internship @ XYZ Robotics: Built embedded control systems for robotic arms using ROS and OpenCV.
          </p>
        </div>
      </motion.div>

      <p className="mob">View on Laptop Please</p>
    </motion.div>
  );
};

export default Internships;
