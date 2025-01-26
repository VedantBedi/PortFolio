import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 6,
    title: "Inter IIT - Deep fake detection and explanation generation",
    img: "/interiit.png",
    desc: "Built a pipeline for deepfake detection and Explanation Generation using VLM on 32 x 32 Images. Ranked 11 out of 23 IIT's",
  },
  {
    id: 1,
    title: "Flappy Bird with Reinforcement Learning",
    img: "/flappy.png",
    desc: "Built a Flappy Bird implementation from scratch using pygame, and implemented Deep Q learning",
    link:"https://github.com/VedantBedi12/FlappyBird_RL",
  },
  {
    id: 3,
    title: "Intelligent Surveillance System for BOST Room",
    img: "/security.png",
    desc: "Currently Working on a Intelligent Surveillance System for our Board of Science and Technology Room along with a group of freshers. In Progress - Anomaly Detection and Database Integration",
    link:"https://github.com/VedantBedi12/Surveillance-System",
  },
  {
      id: 4,
      title: "Facial-Emotion-Recognition",
      img: "/emotion.jpeg",
      desc: "Built a Facial Emotion Recognition Model using Convolutional Neural Networks and OpenCV",
      link:"https://github.com/VedantBedi12/Facial-Emotion-Recognition",
    },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {item.link && <a href={item.link} target="_blank"><button>View Code</button></a>}
           {/* <a href = {item.link}><button>See Demo</button></a> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio_P = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Project Portfolio</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio_P;
