import { useEffect, useRef, useState } from 'react';

export function FadingVideo({ src }: { src: string }) {
  const [opacity, setOpacity] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let fadeOutStartTime = 0;
    const fadeDuration = 500;

    const animate = () => {
      const video = videoRef.current;
      if (!video) return;

      const currentTime = video.currentTime;
      const duration = video.duration;

      // Fade In
      if (currentTime < fadeDuration / 1000) {
        setOpacity(currentTime / (fadeDuration / 1000));
      } 
      // Fade Out begins 0.55 seconds before video ends
      else if (duration > 0 && currentTime > duration - 0.55) {
        if (fadeOutStartTime === 0) fadeOutStartTime = currentTime;
        const progress = (currentTime - fadeOutStartTime) / 0.55;
        setOpacity(Math.max(0, 1 - progress));
      } 
      // Fully visible
      else {
        setOpacity(1);
        fadeOutStartTime = 0;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleLoadedData = () => {
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleEnded = () => {
      const video = videoRef.current;
      if (video) {
        video.currentTime = 0;
        video.play().catch(() => {});
      }
    };

    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('ended', handleEnded);
      video.play().catch(() => {});
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (video) {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('ended', handleEnded);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full bg-black">
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        className="w-full h-full object-cover"
        style={{ opacity }}
      />
      {/* Cinematic dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
}
