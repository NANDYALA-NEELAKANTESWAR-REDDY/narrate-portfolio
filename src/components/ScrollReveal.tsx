import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "blur";
}

export const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getAnimationClass = () => {
    const baseClass = "transition-all duration-1000";
    const timing = "cubic-bezier(0.16, 1, 0.3, 1)";

    if (!isVisible) {
      switch (direction) {
        case "up":
          return `${baseClass} opacity-0 translate-y-16`;
        case "down":
          return `${baseClass} opacity-0 -translate-y-16`;
        case "left":
          return `${baseClass} opacity-0 translate-x-16`;
        case "right":
          return `${baseClass} opacity-0 -translate-x-16`;
        case "scale":
          return `${baseClass} opacity-0 scale-90`;
        case "blur":
          return `${baseClass} opacity-0 blur-lg`;
        default:
          return `${baseClass} opacity-0 translate-y-16`;
      }
    }

    return `${baseClass} opacity-100 translate-y-0 translate-x-0 scale-100 blur-0`;
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${className}`}
      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      {children}
    </div>
  );
};
