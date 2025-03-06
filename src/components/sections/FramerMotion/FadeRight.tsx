'use client';
import { motion } from 'framer-motion';
import React from 'react';

interface FadeRightProps extends React.PropsWithChildren {
  duration?: number; // Thời gian animation (mặc định 0.8s)
}

export const FadeRight: React.FC<FadeRightProps> = ({ children, duration = 0.8 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};
