import React from "react";
import "./Overlay.css";
import { motion } from "framer-motion";

const Overlay = ({ children, close }) => {
  const variants = {
    open: { backgroundColor: "rgba(0, 0, 0 ,0.3)" },
    closed: { backgroundColor: "rgba(0,0,0,0)" },
  };

  return (
    <motion.div
      className="overlay fixed top-0 left-0 w-full h-full  bg-opacity-60 z-100 flex lg:overflow-y-scroll lg:justify-center lg:items-start lg:p-10 md:items-center"
      onClick={close}
      variants={variants}
      initial={"closed"}
      animate={"open"}
      exit={"closed"}
      key="overlay"
    >
      {children}
    </motion.div>
  );
};

export default Overlay;
