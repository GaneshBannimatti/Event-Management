import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() || 0;

    if (current > previous && current > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      animate={{
        y: hidden ? -100 : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/60 border-b border-gray-800"
    >
      <div className="flex justify-between items-center px-10 py-4 text-white">
        <h1 className="text-xl font-bold text-cyan-400">
          SARVAM EVENTS
        </h1>

        <div className="space-x-6">
          <Link to="/" className="hover:text-cyan-400">Home</Link>
          <Link to="/about" className="hover:text-cyan-400">About</Link>
        </div>
      </div>
    </motion.nav>
  );
}