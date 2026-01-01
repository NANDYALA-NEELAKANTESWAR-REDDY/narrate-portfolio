import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pen } from "lucide-react";

interface ClickEffect {
  id: number;
  x: number;
  y: number;
}

interface TrailPoint {
  id: number;
  x: number;
  y: number;
}

export const PenCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [clickEffects, setClickEffects] = useState<ClickEffect[]>([]);
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const trailIdRef = useRef(0);

  useEffect(() => {
    let lastTime = 0;
    const minInterval = 16; // ~60fps

    const updatePosition = (e: MouseEvent) => {
      const now = Date.now();
      setPosition({ x: e.clientX, y: e.clientY });

      // Add trail point with throttling
      if (now - lastTime > minInterval) {
        lastTime = now;
        const newPoint: TrailPoint = {
          id: trailIdRef.current++,
          x: e.clientX,
          y: e.clientY,
        };
        
        setTrail((prev) => {
          const updated = [...prev, newPoint].slice(-12); // Keep last 12 points
          return updated;
        });

        // Remove point after animation
        setTimeout(() => {
          setTrail((prev) => prev.filter((p) => p.id !== newPoint.id));
        }, 300);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      const newEffect: ClickEffect = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      setClickEffects((prev) => [...prev, newEffect]);
      
      setTimeout(() => {
        setClickEffects((prev) => prev.filter((effect) => effect.id !== newEffect.id));
      }, 600);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Trail Effect */}
      <AnimatePresence>
        {trail.map((point, index) => (
          <motion.div
            key={point.id}
            className="fixed pointer-events-none z-[9997] hidden md:block"
            initial={{ 
              x: point.x - 3, 
              y: point.y - 3, 
              opacity: 0.6, 
              scale: 1 
            }}
            animate={{ 
              opacity: 0, 
              scale: 0.3 
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div 
              className="rounded-full bg-primary/50"
              style={{ 
                width: Math.max(2, 6 - index * 0.3), 
                height: Math.max(2, 6 - index * 0.3) 
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Custom Pen Cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: position.x,
          y: position.y,
          scale: isClicking ? 0.85 : 1,
          rotate: isClicking ? 155 : 150,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <Pen 
          size={16} 
          className="text-primary drop-shadow-lg" 
          strokeWidth={1.5}
        />
      </motion.div>

      {/* Click Effects */}
      <AnimatePresence>
        {clickEffects.map((effect) => (
          <motion.div
            key={effect.id}
            className="fixed pointer-events-none z-[9998] hidden md:block"
            initial={{ x: effect.x - 20, y: effect.y - 20, opacity: 1, scale: 0 }}
            animate={{ opacity: 0, scale: 2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="w-10 h-10 rounded-full border-2 border-primary/60" />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Ink Splatter Effect */}
      <AnimatePresence>
        {clickEffects.map((effect) => (
          <motion.div
            key={`ink-${effect.id}`}
            className="fixed pointer-events-none z-[9997] hidden md:block"
            initial={{ x: effect.x - 4, y: effect.y - 4, opacity: 0.8, scale: 0 }}
            animate={{ opacity: 0, scale: 1.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="w-2 h-2 rounded-full bg-primary/40" />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Global cursor hide style */}
      <style>{`
        @media (min-width: 768px) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
};
