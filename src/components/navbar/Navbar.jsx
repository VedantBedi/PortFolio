import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Vedant Singh Bedi
        </motion.span>
        <div className="social">
          <a href="https://www.instagram.com/vedant_bedi21/" target = "_blank">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/vedant-singh-bedi-22194527b" target = "_blank">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://github.com/VedantBedi12" target = "_blank">
            <img src="/github.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
