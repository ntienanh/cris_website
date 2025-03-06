'use client';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className=''>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className='text-center'
      >
        <span className='text-3xl font-bold'>Welcome to my Website! 🚀</span>
      </motion.div>
    </div>
  );
};

export default HomePage;
