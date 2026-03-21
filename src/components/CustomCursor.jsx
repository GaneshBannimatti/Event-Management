import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed w-6 h-6 bg-cyan-400 rounded-full pointer-events-none blur-md z-50"
      style={{
        left: pos.x - 10,
        top: pos.y - 10,
      }}
    />
  );
}