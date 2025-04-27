
import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  easing?: (t: number) => number;
}

const defaultEasing = (t: number) => {
  // Easing function: easeOutExpo
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

export const AnimatedCounter = ({
  end,
  duration = 2,
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
  easing = defaultEasing,
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(nodeRef, { once: true, amount: 0.5 });
  const countRef = useRef(0);
  const startTimeRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isInView) return;

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const progress = Math.min((timestamp - startTimeRef.current) / (duration * 1000), 1);
      const easedProgress = easing(progress);
      const currentCount = Math.floor(easedProgress * end);
      
      countRef.current = currentCount;
      setCount(currentCount);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [isInView, end, duration, easing]);

  const formattedCount = count.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div ref={nodeRef} className={className}>
      {prefix}{formattedCount}{suffix}
    </div>
  );
};

export default AnimatedCounter;
