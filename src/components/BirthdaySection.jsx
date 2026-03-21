import { motion } from "framer-motion";
import RevealImage from "./RevealImage";

import img1 from "../assets/birthday1.jpg";
import img2 from "../assets/birthday2.jpg";
import img3 from "../assets/birthday3.jpg";
import img4 from "../assets/birthday4.jpg";

export default function BirthdaySection() {
  const images = [
    { src: img1, title: "Birthday Party" },
    { src: img2, title: "Cake Celebration" },
    { src: img3, title: "Kids Party" },
    { src: img4, title: "Decoration" },
  ];

  return (
    <section className="py-32 px-10 text-center bg-black overflow-hidden">

      {/* 🔥 GRADIENT TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1 }}
        viewport={{ amount: 0.3 }}
        className="text-5xl md:text-6xl font-bold mb-24 
        bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 
        bg-clip-text text-transparent"
      >
        🎂 Birthday Events
      </motion.h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12">

        {images.map((item, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              x: i < 2 ? -400 : 400,
              scale: 0.6,
              rotate: 10,
              filter: "blur(10px)"
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
              rotate: 0,
              filter: "blur(0px)"
            }}
            transition={{
              duration: 0.9,
              delay: i * 0.2,
              ease: "easeOut"
            }}
            viewport={{ amount: 0.2 }}
            className="animate-float"
          >
            <RevealImage {...item} />
          </motion.div>
        ))}

      </div>
    </section>
  );
}