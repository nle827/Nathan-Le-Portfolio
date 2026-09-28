// buttonHoverSound.ts
import { useRef, useEffect } from "react";

export function useButtonHoverSound(soundFile = "/sounds/buttonHover.mp3") {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(soundFile);
    audioRef.current.volume = 0.5;
  }, [soundFile]);

  const playHoverSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) => {
        console.warn("Hover sound play blocked until user interaction:", err);
      });
    }
  };

  return playHoverSound;
}
