import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SpiritualEntry = ({ setShowShiva, showShiva }: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowShiva(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const snakeVariants = {
    initial: {
      pathLength: 0,
      opacity: 0,
    },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      className="relative h-screen w-full bg-black overflow-hidden"
    >
      {/* Initial portal animation */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 1.5, 2],
          opacity: [0, 0.8, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 3,
          times: [0, 0.5, 1],
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="w-64 h-64 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 blur-xl" />
      </motion.div>

      {/* Swastik Background */}
      {showShiva && (
        <motion.div
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 0.15, rotate: 0 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <svg viewBox="0 0 100 100" className="w-96 h-96">
            <motion.path
              d="M 40 20 L 60 20 L 60 40 L 80 40 L 80 60 L 60 60 L 60 80 L 40 80 L 40 60 L 20 60 L 20 40 L 40 40 Z"
              fill="none"
              stroke="orange"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </svg>
        </motion.div>
      )}

      {/* Shiva Linga with Eye */}
      {showShiva && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 flex flex-col items-center justify-center"
        >
          {/* Shiva Linga */}
          <div className="relative">
            {/* Base of Linga */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "200px" }}
              transition={{ duration: 1 }}
              className="w-32 bg-gradient-to-b from-gray-700 to-gray-900 rounded-t-full relative overflow-hidden"
            >
              {/* Third Eye Container */}
              <motion.div
                className="absolute top-1/4 left-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                {/* Eye Background Glow */}
                <motion.div
                  className="absolute w-12 h-12 bg-red-500/20 blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />

                {/* Third Eye */}
                <motion.div
                  className="relative w-8 h-8 bg-gradient-to-b from-yellow-600 to-orange-600 rounded-full overflow-hidden"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2.5, duration: 0.5 }}
                >
                  {/* Eye Lid */}
                  <motion.div
                    className="absolute inset-0 bg-gray-900"
                    initial={{ scaleY: 1 }}
                    animate={{ scaleY: 0 }}
                    transition={{ delay: 3, duration: 1, ease: "easeOut" }}
                  />

                  {/* Inner Eye Detail */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-300 rounded-full"
                    initial={{ scale: 5 }}
                    animate={{ scale: 0 }}
                    transition={{ delay: 3.5, duration: 0.3 }}
                  >
                    <motion.div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-orange-600 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 3.8, duration: 0.2 }}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Snake Animation */}
            <motion.svg
              viewBox="0 0 100 200"
              className="absolute top-0 left-0 w-full h-full"
              initial="initial"
              animate="animate"
            >
              <motion.path
                d="M 50 200 C 20 150, 80 100, 50 50 C 20 0, 80 -50, 50 -100"
                fill="none"
                stroke="rgb(34, 197, 94)"
                strokeWidth="4"
                variants={snakeVariants}
              />
              <motion.circle
                cx="50"
                cy="-100"
                r="5"
                fill="rgb(34, 197, 94)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              />
            </motion.svg>

            {/* Glowing effect around Linga */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0.3] }}
              transition={{ delay: 1, duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-yellow-500/20 blur-xl rounded-full"
            />
          </div>

          {/* Om symbol */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 1 }}
            className="mt-8 text-6xl text-purple-500 font-semibold"
          >
            ॐ
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default SpiritualEntry;
