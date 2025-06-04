import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState, useRef } from "react";

const Reveal = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const wrapperRef = useRef(null);
  const [height, setHeight] = useState("auto");

  useEffect(() => {
    if (wrapperRef.current) {
      setHeight(wrapperRef.current.offsetHeight);
    }
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{ minHeight: height, position: "relative" }}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay }}
        style={{ position: "relative" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
