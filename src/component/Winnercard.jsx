import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Winnercard.css"
const Winnercard = (user) => {
  const { name, img, win } = user.user;
  const [isFliped, setIsFliped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFliped(!isFliped);
      setIsAnimating(true);
    }
  }

  return (
    <div className="flex  items-center justify-center  h-[600px] cursor-pointer">
      <div
        className="flip-card w-[600px] h-[360px] rounded-md"
        onMouseEnter={handleFlip}
      >
        <motion.div
          className="flip-card-inner w-[100%] h-[100%]"
          initial={false}
          whileHover={{ scale: 1.05 }}
          animate={{ rotateY: isFliped ? 180 : 360 }}
          transition={{duration:0.6,animationDirection:"normal"}}
          onAnimationComplete={()=>{setIsAnimating(false)}}
        >
            <div className="flip-card-front w-full h-full bg-cover border-[1px] text-white rounded-lg p-4"
            style={{backgroundImage:`url(${img})`}}
            >
                <h1 className="text-2xl font-bold"> Name:{name}</h1>
                <p className="text-xl font-bold">Total Win:{win}</p>

            </div>

        </motion.div>
      </div>
    </div>
  );
};

export default Winnercard;
