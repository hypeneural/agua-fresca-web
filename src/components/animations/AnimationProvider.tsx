
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define context type
interface AnimationContextType {
  shouldReduceMotion: boolean;
  prefersReducedMotion: boolean;
  enableAnimations: () => void;
  disableAnimations: () => void;
}

// Create context with default values
const AnimationContext = createContext<AnimationContextType>({
  shouldReduceMotion: false,
  prefersReducedMotion: false,
  enableAnimations: () => {},
  disableAnimations: () => {},
});

// Hook to use the animation context
export const useAnimation = () => useContext(AnimationContext);

interface AnimationProviderProps {
  children: React.ReactNode;
}

export const AnimationProvider = ({ children }: AnimationProviderProps) => {
  // Check if user prefers reduced motion
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  // Manual override to disable animations
  const [userDisabledAnimations, setUserDisabledAnimations] = useState(false);
  
  // Combined value - reduce motion if user prefers it or manually disabled
  const shouldReduceMotion = prefersReducedMotion || userDisabledAnimations;

  useEffect(() => {
    // Check for prefers-reduced-motion media query
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes to the media query
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  // Functions to enable/disable animations
  const enableAnimations = () => setUserDisabledAnimations(false);
  const disableAnimations = () => setUserDisabledAnimations(true);

  const value = {
    shouldReduceMotion,
    prefersReducedMotion,
    enableAnimations,
    disableAnimations,
  };

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
};

export default AnimationProvider;
