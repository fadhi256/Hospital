import React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

const Counter = ({ from, to, duration = 2, delay = 0.5, suffix = "", prefix = "" }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, Math.round); // This creates a new MotionValue

  useEffect(() => {
    const animation = animate(count, to, { duration, delay });
    return animation.stop;
  }, [from, to, duration, delay, count]);

  // **THE FIX:**
  // We wrap the 'rounded' MotionValue in its own <motion.span>
  // This tells Framer Motion to read the value and render it.
  // The outer <span> is just a normal wrapper.
  return (
    <span>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

export default Counter;