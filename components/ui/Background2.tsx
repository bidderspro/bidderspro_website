"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-950">
      {/* Blurred Gradient Blob 1 */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-[150px] opacity-30"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Blurred Gradient Blob 2 */}
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-full blur-[150px] opacity-20"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
}
