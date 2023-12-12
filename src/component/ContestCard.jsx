import React from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import "./Card.css";
//import contest_image from "../../public/banner1.jpg"
import { Link } from "react-router-dom";
const ContestCard = ({ open, contest,color,onClick }) => {
  const {
    _id,
     contest_image,
    contest_creator,
    contest_category,
    contest_deadline,
    contest_description,
    contest_instruction,
    contest_name,
    contest_prize,
    contest_price,
    contest_status,
  } = contest;
  return (
    <motion.div onClick={open} className=" listing bg-white relative cursor-pointer w-[25%] max-w-sm min-w-[300px] m-5 shadow-slate-500  rounded-xl overflow-hidden" whileHover={{ scale: 1.01 }}>
      <div onClick={() => onClick(contest)} className="absolute left-0 top-0 w-full h-full bg-white rounded-lg overflow-hidden">
        <div className="w-full h-[65%] overflow-hidden ">
          <img
            className="w-full h-full object-cover"
            alt="Contest Card"
            src={contest_image}
          />
        </div>
        <div className="flex flex-col relative justify-evenly py-0 px-4">
          <div className={`absolute text-xs right-2 top-2 ${color} py-1.5 px-2.5 rounded-md `}>
            {contest_category}
          </div>
          <div className="my-1.5 mx-0 top-2 flex items-center">
            <span className="text-lg">
              Prize: {contest_prize.substring(0, 5)}
            </span>
          </div>
          <div className="my-6 mx-0 flex items-center">
            <span className="text-[#737373]">{contest_name}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContestCard;
