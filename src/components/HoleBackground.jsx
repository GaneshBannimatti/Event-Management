import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function HoleBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 bg-black overflow-hidden">

      {/* 🔥 Moving Spotlight (Hole Effect) */}
      <motion.div
        style={{
          WebkitMaskImage: "radial-gradient(circle 200px at var(--x) var(--y), transparent 0%, black 100%)",
          maskImage: "radial-gradient(circle 200px at var(--x) var(--y), transparent 0%, black 100%)",
          "--x": smoothX,
          "--y": smoothY,
        }}
        className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 opacity-30"
      />

      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15),transparent_70%)]"></div>

    </div>
  );
}