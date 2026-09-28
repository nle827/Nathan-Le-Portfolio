"use client";

import { ReactNode } from "react";
import { useButtonClickSound } from "../utils/buttonClickSound";
import { useButtonHoverSound } from "../utils/buttonHoverSound";

type Props = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function ClickButton({ children, className, onClick }: Props) {
  const playClickSound = useButtonClickSound();
  const playHoverSound = useButtonHoverSound();

  return (
    <button
      onClick={(e) => {
        playClickSound();
        onClick?.();
      }}
      onMouseEnter={playHoverSound}
      className={className}
    >
      {children}
    </button>
  );
}
