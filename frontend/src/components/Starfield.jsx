import React, { useMemo } from "react";

const STAR_COUNT = 150;

const generateStars = () =>
  Array.from({ length: STAR_COUNT }).map((_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 2 + 1, // 1px - 3px
    duration: Math.random() * 3 + 2, // 2s - 5s
    delay: Math.random() * 5,
  }));

export const StarField = () => {
  const stars = useMemo(() => generateStars(), []);

  return (
    <div className="fixed inset-0 -z-10 bg-[#05060f] overflow-hidden">
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: "0 0 4px rgba(255,255,255,0.8)",
            animation: `star-twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
          }}
        />
      ))}

      <style>{`
        @keyframes star-twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
};