import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "BoST Portal - Our College's Website for all things Tech",
    img: "/Bost.png",
    desc: "Built a responsive Website along with a team for our College's Board of Science of Technology",
  },
  {
    id: 2,
    title: "Advitiya Tech Fest",
    img: "/Advitiya.png",
    desc: "Built a responsive Website for our College's Tech Fest Advitiya along with a group of students",
  },
  {
    id: 6,
    title: "Gemini Clone",
    img: "/gemini.png",
    desc: "Built a frontend clone of Gemini's Official Website using React.js and used the official gemini api for fetching data",
  },
  {
    id: 3,
    title: "Nike Commerce Website Using React",
    img: "/nikeapp.png",
    desc: "Built a Fully Responsive Frontend Clone of Nike's Official Website using React.js and tailwind css",
    link:"https://github.com/VedantBedi12/Nike-Clone-React",
  },
  // {
  //   id: 4,
  //   title: "Facial-Emotion-Recognition",
  //   img: "/emotion.jpeg",
  //   desc: "Built a Facial Emotion Recognition Model using Convolutional Neural Networks and OpenCV",
  //   link:"",
  // },
  {
    id: 5,
    title: "Portfolio Website",
    img: "/portfolio.png",
    desc: "Built a Fully Responsive Portfolio Website using React.js and SCSS, including framer motion",
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
            {item.link && <a href={item.link} target="_blank"><button>See Demo</button></a>}
           {/* <a href = {item.link}><button>See Demo</button></a> */}
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
        <h1>Website Portfolio</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
