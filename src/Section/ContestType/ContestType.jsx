import React from "react";
import AnimatedNumbers from "../../component/AnimatedNumbers";
import InViewParagraph from "../../component/InViewParagraph";



const ContestType = () => {
  return (
    <div className="bg-[#EEF1F4]">
      <div className="grid place-items-center pt-20 capitalize">
        <span className="inline-block text-7xl font-bold text-yellow-400">
          <AnimatedNumbers value={100} />+{" "}
          <span className="font-normal text-slate-950">Contest to Join</span>
        </span>
        <InViewParagraph className="py-10 text-lg max-w-2xl text-center" text="100+ Contest present for you to choose. Join today, Participate in a contest. And unleaseh 
          your inner potential."/>
          
       
      </div>
    </div>
  );
};

export default ContestType;
