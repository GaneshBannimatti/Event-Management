import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import heroImg from "../assets/hero.jpg";

export default function Hero() {
  const navigate = useNavigate();
  const btnRef = useRef(null);

  // 🔥 Spotlight
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPos({ x: e.clientX, y: e.clientY });

    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btnRef.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const reset = () => {
    btnRef.current.style.transform = "translate(0,0)";
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative h-screen flex items-center justify-center text-center overflow-hidden"
    >

      {/* 🖼️ BACKGROUND IMAGE */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      />

      {/* 🌌 SPOTLIGHT */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          left: pos.x - 200,
          top: pos.y - 200,
          background: "radial-gradient(circle, rgba(0,255,255,0.2), transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* ✨ FLOATING GLOW */}
      <motion.div
        animate={{ x: [0, 100, -100, 0], y: [0, -100, 100, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] bg-cyan-500 opacity-20 blur-[120px]"
      />

      {/* 🌑 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* 🔥 CONTENT */}
      <div className="relative z-10 px-5">

        {/* ✍️ TYPING TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold 
          bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 
          bg-clip-text text-transparent 
          drop-shadow-[0_0_50px_rgba(255,255,255,0.5)]"
        >
          <Typewriter
            words={["SARVAM EVENTS"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </motion.h1>

        {/* ✨ SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-gray-300 text-lg"
        >
          Creating unforgettable celebrations ✨
        </motion.p>

        {/* 🚀 BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-10 flex justify-center"
        >
          <button
            ref={btnRef}
            onMouseLeave={reset}
            onClick={() => navigate("/events")}
            className="px-10 py-4 rounded-full border border-white text-white 
            backdrop-blur-md bg-white/10 
            hover:bg-white hover:text-black 
            transition duration-300"
          >
            Explore
          </button>
        </motion.div>

      </div>
    </section>
  );
}