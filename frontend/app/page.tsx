"use client";
import Link from "next/link";
import { useButtonClickSound } from "./utils/buttonClickSound";
import { useButtonHoverSound } from "./utils/buttonHoverSound";

export default function Page() {
  const playClickSound = useButtonClickSound();
  const playHoverSound = useButtonHoverSound();

  return (
    <div className="relative w-full h-screen">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/videos/welcomePageVideo.mp4"
      />

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center">
        <h1 className="font-neuestance-bold text-5xl sm:text-8xl text-metallic mb-4">
          Nathan Le
        </h1>
        <h2 className="font-neuestance-bold text-3xl sm:text-3xl text-metallic mb-12">
          Software Developer
        </h2>

        <Link href="/home">
          <button
            className="parallelogram relative z-20 px-8 py-4 text-2xl font-neuestance-bold text-white"
            onClick={playClickSound}
            onMouseEnter={playHoverSound}
          >
            Enter
          </button>
        </Link>
      </div>
    </div>
  );
}
