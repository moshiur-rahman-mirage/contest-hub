import React from "react";
import AnimatedText from "../../component/AnimatedText";
import banner1 from "../../../public/benner2.jpg";
const Hero = () => {
  return (
    <div className="carousel w-full min-h-screen rounded-xl">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner1} className="w-full" />
        <div
          className="absolute  pl-12 rounded-xl  flex items-center transform left-0 top-0 h-full gap-2  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]);

]"
        >
          <div className=" text-white  space-y-7 w-1/2">
            <AnimatedText varitants="quote" className="text-6xl  w-1/2 font-semibold uppercase" text="Ignite Your Inner Creativity"/>
            <AnimatedText varitants="quote" className="text-4xl " text="Join A Contest Now!"/>
              
           
            <div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
