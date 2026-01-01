import { motion } from "framer-motion";

export const FilmOverlay = () => {
  return (
    <>
      {/* Film Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100]">
        <div 
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Letterbox Bars */}
      <div className="fixed top-0 left-0 right-0 h-[5vh] bg-black z-[1000] pointer-events-none" />
      <div className="fixed bottom-0 left-0 right-0 h-[5vh] bg-black z-[1000] pointer-events-none" />

      {/* Vignette */}
      <div 
        className="fixed inset-0 pointer-events-none z-[99]"
        style={{
          background: "radial-gradient(ellipse at center, transparent 30%, hsl(0 0% 0% / 0.5) 100%)"
        }}
      />

      {/* Ambient Light Leak */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-[98]"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, transparent 0%, hsl(35 100% 50% / 0.02) 30%, hsl(45 100% 60% / 0.03) 50%, transparent 100%)"
          }}
        />
      </motion.div>
    </>
  );
};
