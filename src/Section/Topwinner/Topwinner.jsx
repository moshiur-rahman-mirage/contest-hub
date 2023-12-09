import React from 'react';
import AnimatedText from '../../component/AnimatedText';

const Topwinner = () => {
    return (
        <div className="bg-[#EEF1F4] grid place-items-center">
           <AnimatedText
              varitants="signelWord"
              className="text-xl lg:text-5xl font-bold my-10 md:text-4xl "
              text="FIND OUR TOP WINNER"
            />
        </div>
    );
};

export default Topwinner;