import React, { useMemo } from "react";

const HeartRain = () => {
  const hearts = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: -(Math.random() * 200 + 50),
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 5,
    }));
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none z-50">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-2xl heart"
          style={{
            left: `${heart.left}%`,
            top: `${heart.top}px`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default React.memo(HeartRain);
