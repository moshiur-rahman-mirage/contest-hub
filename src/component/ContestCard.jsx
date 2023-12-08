import React from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

const cardhover = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.3,
      // staggerChildren: 1,
    },
  },
};


const ContestCard = ({ contest }) => {
  return (
    <motion.div
    whileHover={{}}
    >
      <div className="card rounded-none w-96 bg-base-500 shadow-lg">
        <figure>
          <img src={contest.contest_image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-md">
            {contest.contest_name}
           
          </h2>
          

        </div>
      </div>
    </motion.div>
  );
};

export default ContestCard;
