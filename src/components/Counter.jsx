// src/components/Counter.jsx

import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

const Counter = ({ from = 0, to, duration = 2, delay = 0, suffix = "", prefix = "" }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, Math.round);
  const ref = useRef(null);
  
  // 1. useInView hook
  // once: false means it will re-trigger every time it enters view
  // margin: "-50px" means it triggers when it's 50px into the viewport
  const isInView = useInView(ref, { once: false, margin: "-100px 0px" }); 

  useEffect(() => {
    if (isInView) {
      // 2. Start animation only when in view
      const controls = animate(count, to, { 
        duration, 
        delay, 
        ease: "easeOut" 
      });
      return controls.stop;
    } else {
      // 3. Reset to 'from' value when it scrolls OUT of view
      count.set(from);
    }
  }, [isInView, from, to, duration, delay, count]); // Re-run effect when isInView changes

  return (
    // 4. Attach the ref to the <span>
    <span ref={ref}> 
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

export default Counter;