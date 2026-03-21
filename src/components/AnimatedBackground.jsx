import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">

      {/* Gradient Glow */}
      <motion.div
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -100, 100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute w-[600px] h-[600px] bg-cyan-500 rounded-full blur-[150px] opacity-20"
      />

      <motion.div
        animate={{
          x: [0, -150, 150, 0],
          y: [0, 150, -150, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
        className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-purple-500 rounded-full blur-[150px] opacity-20"
      />

    </div>
  );
}