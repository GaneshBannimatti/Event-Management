import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function RevealImage({ src, title }) {

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const smoothX = useSpring(x, { stiffness: 150, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 150, damping: 20 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{
        rotateX,
        rotateY,
        perspective: 1000
      }}
      whileHover={{ scale: 1.08 }}
      className="relative rounded-2xl overflow-hidden group"
    >

      {/* IMAGE */}
      <img
        src={src}
        className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-110"
      />

      {/* GLASS */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
        <h3 className="text-white text-xl font-bold">{title}</h3>
      </div>

      {/* LIGHT REFLECTION */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
        <div className="absolute w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] duration-1000"></div>
      </div>

      {/* GLOW */}
      <div className="absolute inset-0 border border-transparent group-hover:border-cyan-400 group-hover:shadow-[0_0_40px_rgba(34,211,238,1)] transition"></div>

    </motion.div>
  );
}