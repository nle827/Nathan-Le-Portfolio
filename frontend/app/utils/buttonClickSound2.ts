import { useEffect, useRef } from "react";

export function useButtonClickSound2(soundFile = "/sounds/buttonClick2.mp3") {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(soundFile);
  }, [soundFile]);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) => {
        console.warn("Sound blocked until user interaction:", err);
      });
    }
  };

  return playSound;
}
