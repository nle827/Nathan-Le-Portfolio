"use client";
import Link from "next/link";
import WelcomePageVideo from "./components/welcomePageVideo";
import { useButtonClickSound } from "./utils/buttonClickSound";
import { useButtonHoverSound } from "./utils/buttonHoverSound";

export default function Page() {
  const playClickSound = useButtonClickSound();
  const playHoverSound = useButtonHoverSound();
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <WelcomePageVideo />
      <h1 className="font-neuestance-bold text-5xl sm:text-8xl font-bold text-center text-metallic mb-6">
        Nathan Le
      </h1>
        <h1 className="font-neuestance-bold text-3xl sm:text-3xl font-bold text-center text-metallic">
        Software Developer
      </h1>

      <Link href="\home" className="relative group">
      <button className="font-neuestance-bold mt-12 relative text-2xl text-white bg-transparent parallelogram " onClick={playClickSound} onMouseEnter={playHoverSound}>
        Enter
      </button>
      </Link>
    </div>
  );
}
