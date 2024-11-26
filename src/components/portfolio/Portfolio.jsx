import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Nike Commerce Website Using React",
    img: "public/nikeapp.png",
    desc: "Built a Fully Responsive Frontend Clone of Nike's Official Website using React.js and tailwind css",
    link:"https://github.com/VedantBedi12/Nike-Clone-React",
  },
  {
    id: 2,
    title: "Facial-Emotion-Recognition",
    img: "public/emotion.jpeg",
    desc: "Built a Facial Emotion Recognition Model using Convolutional Neural Networks and OpenCV",
    link:"",
  },
  {
    id: 3,
    title: "Portfolio Website",
    img: "public/portfolio.png",
    desc: "Built a Fully Responsive Portfolio Website using React.js and SCSS, including framer motion",
  },
  {
    id: 4,
    title: "Gemini Clone",
    img: "public/gemini.png",
    desc: "Built a frontend clone of Gemini's Official Website using React.js and used the official gemini api for fetching data",
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
           <a href = {item.link}><button>See Demo</button></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
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
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
