import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  enableSound?: boolean;
  onComplete?: () => void;
}

// Create a click sound using Web Audio API
const createClickSound = (audioContext: AudioContext) => {
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  // Random frequency for variety (like different keys)
  oscillator.frequency.value = 800 + Math.random() * 400;
  oscillator.type = "square";
  
  // Quick attack and decay for click sound
  const now = audioContext.currentTime;
  gainNode.gain.setValueAtTime(0.08, now);
  gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
  
  oscillator.start(now);
  oscillator.stop(now + 0.05);
};

export const TypewriterText = ({
  text,
  speed = 50,
  delay = 0,
  className = "",
  enableSound = true,
  onComplete,
}: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Initialize audio context on first interaction
  const initAudio = useCallback(() => {
    if (!audioContextRef.current && enableSound) {
      audioContextRef.current = new AudioContext();
    }
  }, [enableSound]);

  useEffect(() => {
    // Initialize audio on user interaction
    const handleInteraction = () => {
      initAudio();
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
    };
    
    window.addEventListener("click", handleInteraction);
    window.addEventListener("keydown", handleInteraction);
    
    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
    };
  }, [initAudio]);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsTyping(true);
      initAudio();
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay, initAudio]);

  useEffect(() => {
    if (!isTyping) return;

    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
        
        // Play click sound for non-space characters
        if (enableSound && audioContextRef.current && text[displayedText.length] !== " ") {
          createClickSound(audioContextRef.current);
        }
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      onComplete?.();
    }
  }, [displayedText, text, speed, isTyping, onComplete, enableSound]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {displayedText}
      <span
        className={`inline-block w-[2px] h-[1em] bg-primary ml-1 align-middle transition-opacity duration-100 ${
          showCursor ? "opacity-100" : "opacity-0"
        }`}
      />
    </motion.span>
  );
};
