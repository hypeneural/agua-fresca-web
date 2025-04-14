
import { useRef, useEffect } from "react";

interface YouTubeBackgroundProps {
  videoId: string;
  className?: string;
}

const YouTubeBackground = ({ videoId, className = "" }: YouTubeBackgroundProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // This creates a YouTube Player API URL with the required parameters
    const youtubeUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${videoId}&disablekb=1&modestbranding=1&playsinline=1&enablejsapi=1&origin=${window.location.origin}`;
    
    if (iframeRef.current) {
      iframeRef.current.src = youtubeUrl;
    }
  }, [videoId]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <iframe
        ref={iframeRef}
        className="absolute w-[300%] h-[300%] -top-[100%] -left-[100%] max-w-none pointer-events-none"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Background video"
      ></iframe>
    </div>
  );
};

export default YouTubeBackground;
