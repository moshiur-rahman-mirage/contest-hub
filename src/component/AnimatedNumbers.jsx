import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";


const AnimatedNumbers = ({ value }) => {
    const ref = useRef();
  
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 1000 });
    const isInView = useInView(ref, { once: true });
  
    useEffect(() => {
      if (isInView) {
        motionValue.set(value);
      }
    }, [isInView, motionValue, value]);
  
    useEffect(() => {
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      });
    }, []);
  
    return <span ref={ref}></span>;
  };

  export default AnimatedNumbers;