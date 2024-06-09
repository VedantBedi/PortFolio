import { useRef } from "react";
import "./services.scss";
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
          <h1>
            <motion.b whileHover={{color:"orange"}}>Skills</motion.b> 
          </h1>
          <button><motion.b whileHover={{color:"purple"}}>technologies used</motion.b> </button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Frontend Development</h2>
          <p>
            Extremely familiar with HTML, CSS, and JavaScript. I have worked with React, Next.js I have also worked with Tailwind CSS and various other component libraries
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Backend Development</h2>
          <p>
            Familiar with Node.js and Express.js. Have working knowledge of MongoDB and SQL databases.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Machine Learning</h2>
          <p>
            Extremely Familiar with Python and its libraries like NumPy, Pandas, Matplotlib, and Scikit-learn. Have worked with and implemented various different types of Neural networks from scratch. Including Projects like Facial-Emotion-Recognition, and Digit Recognition.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Others</h2>
          <p>
            Have Worked with various CAD softwares like Solidworks, Onshape. Have worked with Arduino and Raspberry Pi. Have worked with various other libraries and technologies like OpenCV, TensorFlow, and Keras.
          </p>
        </motion.div>
        <div className="mobilebox">
          <p>
          Extremely familiar with HTML, CSS, and JavaScript. I have worked with React, Next.js I have also worked with Tailwind CSS and various other component libraries
          Familiar with Node.js and Express.js. Have working knowledge of MongoDB and SQL databases.
          Extremely Familiar with Python and its libraries like NumPy, Pandas, Matplotlib, and Scikit-learn. Have worked with and implemented various different types of Neural networks from scratch. Including Projects like Facial-Emotion-Recognition, and Digit Recognition.
          Have Worked with various CAD softwares like Solidworks, Onshape. Have worked with Arduino and Raspberry Pi. Have worked with various other libraries and technologies like OpenCV, TensorFlow, and Keras.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
