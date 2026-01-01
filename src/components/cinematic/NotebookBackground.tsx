import { motion } from "framer-motion";

export const NotebookBackground = () => {
  // Generate notebook lines
  const lines = Array.from({ length: 200 }, (_, i) => i);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Aged paper texture */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(180deg, 
              hsl(45 30% 96% / 0.03) 0%, 
              hsl(40 25% 94% / 0.05) 50%,
              hsl(35 20% 92% / 0.03) 100%
            )
          `,
        }}
      />

      {/* Notebook margin line (red) */}
      <div 
        className="absolute top-0 bottom-0 w-[2px] opacity-10"
        style={{
          left: '80px',
          background: 'linear-gradient(180deg, hsl(0 70% 50% / 0.4), hsl(0 70% 50% / 0.2))',
        }}
      />

      {/* Secondary margin line */}
      <div 
        className="absolute top-0 bottom-0 w-[1px] opacity-5"
        style={{
          left: '85px',
          background: 'hsl(0 60% 45% / 0.3)',
        }}
      />

      {/* Horizontal ruled lines */}
      <div className="absolute inset-0">
        {lines.map((i) => (
          <div
            key={i}
            className="absolute w-full h-[1px]"
            style={{
              top: `${i * 32}px`,
              background: `linear-gradient(90deg, 
                transparent 0%, 
                hsl(210 30% 70% / ${0.06 + Math.random() * 0.04}) 5%, 
                hsl(210 30% 70% / ${0.08 + Math.random() * 0.04}) 50%,
                hsl(210 30% 70% / ${0.06 + Math.random() * 0.04}) 95%,
                transparent 100%
              )`,
            }}
          />
        ))}
      </div>

      {/* Handwritten-style decorative elements */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.02]">
        <defs>
          <pattern id="notebook-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="16" cy="16" r="0.5" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#notebook-dots)" />
      </svg>

      {/* Spiral binding holes (left side) */}
      <div className="absolute left-4 top-0 bottom-0 flex flex-col gap-16 opacity-10">
        {Array.from({ length: 50 }, (_, i) => (
          <motion.div
            key={i}
            className="w-4 h-4 rounded-full border-2 border-muted-foreground/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.02 }}
          />
        ))}
      </div>

      {/* Coffee stain effect (subtle) */}
      <div 
        className="absolute opacity-[0.015] rounded-full blur-xl"
        style={{
          width: '300px',
          height: '300px',
          top: '40%',
          right: '10%',
          background: 'radial-gradient(circle, hsl(30 60% 40%), transparent 70%)',
        }}
      />

      {/* Ink smudge effects */}
      <div 
        className="absolute opacity-[0.01] rounded-full blur-2xl"
        style={{
          width: '200px',
          height: '100px',
          top: '60%',
          left: '20%',
          background: 'radial-gradient(ellipse, hsl(220 50% 30%), transparent 60%)',
          transform: 'rotate(-15deg)',
        }}
      />

      {/* Page fold shadow (top right) */}
      <div 
        className="absolute top-0 right-0 w-32 h-32 opacity-[0.03]"
        style={{
          background: 'linear-gradient(135deg, transparent 50%, hsl(0 0% 0%) 100%)',
        }}
      />

      {/* Aged paper edges */}
      <div 
        className="absolute inset-y-0 left-0 w-8 opacity-[0.02]"
        style={{
          background: 'linear-gradient(90deg, hsl(35 30% 70%), transparent)',
        }}
      />
      <div 
        className="absolute inset-y-0 right-0 w-8 opacity-[0.02]"
        style={{
          background: 'linear-gradient(-90deg, hsl(35 30% 70%), transparent)',
        }}
      />
    </div>
  );
};
