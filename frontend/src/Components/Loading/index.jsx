import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white dark:bg-gray-900">
      <motion.div
        className="w-14 h-14 border-4 border-blue-500 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 1
        }}
      />
    </div>
  );
};

export default Loading;
