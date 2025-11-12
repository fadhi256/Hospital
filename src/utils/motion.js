// src/utils/motion.js

export const fadeIn = (direction = 'up', duration = 0.8, delay = 0) => { // 1. Default duration changed to 0.8s (was 0.5)
  return {
    hidden: {
      x: direction === 'left' ? 150 : direction === 'right' ? -150 : 0, // 2. Distance changed to 150px (was 100)
      y: direction === 'up' ? 150 : direction === 'down' ? -150 : 0, // 2. Distance changed to 150px (was 100)
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: duration, // Will now use our new 0.8s default
        delay: delay,
        ease: 'easeOut',
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      }
    }
  };
};

export const textVariant = (delay) => {
  return {
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay,
      }
    }
  };
};

export const scale = (delay) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay,
      }
    }
  };
}; 

export const characterAppear = {
  hidden: {
    opacity: 0,
    x: -10, // Slight movement from the left
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      ease: 'easeOut',
      duration: 0.04, // Very quick duration for each character
    }
  }
};