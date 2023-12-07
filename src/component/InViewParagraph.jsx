import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
const InViewParagraph=({text,className})=> {
    return (
      <motion.p
      className={`${className}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 1 }
        }}
      >
        {text}
      </motion.p>
    );
  }

  export default InViewParagraph;