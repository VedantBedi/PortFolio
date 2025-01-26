import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  let background, heading, planetsImage;

  if (type === "background") {
    background = "linear-gradient(180deg, #111132, #0c0c1d)";
    heading = "My Past";
    planetsImage = "/planets.png";
  } else if (type == "portfolio") {
    background = "linear-gradient(180deg, #111132, #505064)";
    heading = "Website Portfolio";
    planetsImage = "/sun.png";
  }
  else {
    background = "linear-gradient(180deg, #111132, #505064)";
    heading = "Project Portfolio";
    planetsImage = "/sun.png";
  }

  return (
    <div className="parallax" ref={ref} style={{ background }}>
      <motion.h1 style={{ y: yText }}>{heading}</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${planetsImage})`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
