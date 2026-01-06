import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Preloader.module.css';

const Preloader = ({ onFinish }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const interval = 20;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onFinish, 500);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <motion.div 
      className={styles.preloader}
      exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className={styles.countWrapper}>
        <motion.span 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className={styles.count}
        >
          {Math.floor(count)}%
        </motion.span>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className={styles.label}
      >
        HESHAN THARUSHA / SOFTWARE ENGINEER
      </motion.div>

      <div className={styles.bar}>
        <motion.div 
          className={styles.progress} 
          animate={{ width: `${count}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </motion.div>
  );
};

export default Preloader;
