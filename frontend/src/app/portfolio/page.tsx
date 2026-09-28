"use client";

import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { techProjects, creativeProjects } from "../data/projects";
import { useButtonClickSound2 } from "../utils/buttonClickSound2";
import { useButtonHoverSound } from "../utils/buttonHoverSound";
import ContactForm from "../components/ContactForm";

export default function ProjectsPage() {
  const [techIndex, setTechIndex] = useState(0);
  const [creativeIndex, setCreativeIndex] = useState(0);

  const playClickSound = useButtonClickSound2();
  const playHoverSound = useButtonHoverSound();

  const techProject = techProjects[techIndex];
  const creativeProject = creativeProjects[creativeIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#001f2f] to-black text-cyan-400 p-6 font-mono">
      <h1 className="font-neuestance-bold text-5xl leading-tight font-bold text-center mb-15 text-metallic">
        Projects
      </h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Tech Projects */}
        <section>
          <h2 className="font-neuestance-bold text-2xl font-bold mb-4 text-cyan-300">
            Technical Projects
          </h2>
          <ProjectCard {...techProject} />
          <div className="flex justify-between mt-4">
            <button
              onClick={() => {
                playClickSound();
                setTechIndex((prev) => Math.max(prev - 1, 0));
              }}
              onMouseEnter={playHoverSound}
              disabled={techIndex === 0}
              className="px-4 py-2 border rounded border-cyan-400 text-cyan-200 disabled:opacity-30 hover:bg-cyan-800 hover:text-cyan-100 hover:shadow-[0_0_15px_#00f0ffcc] transition-all"
            >
              [ Previous ]
            </button>
            <button
              onClick={() => {
                playClickSound();
                setTechIndex((prev) =>
                  prev + 1 < techProjects.length ? prev + 1 : prev
                );
              }}
              onMouseEnter={playHoverSound}
              disabled={techIndex + 1 >= techProjects.length}
              className="px-4 py-2 border rounded border-cyan-400 text-cyan-200 disabled:opacity-30 hover:bg-cyan-800 hover:text-cyan-100 hover:shadow-[0_0_15px_#00f0ffcc] transition-all"
            >
              [ Next ]
            </button>
          </div>
        </section>

        {/* Creative Projects */}
        <section>
          <h2 className="font-neuestance-bold text-2xl font-bold mb-4 text-cyan-300">
            Creative and Visual Projects
          </h2>
          <ProjectCard {...creativeProject} />
          <div className="flex justify-between mt-4">
            <button
              onClick={() => {
                playClickSound();
                setCreativeIndex((prev) => Math.max(prev - 1, 0));
              }}
              onMouseEnter={playHoverSound}
              disabled={creativeIndex === 0}
              className="px-4 py-2 border rounded border-cyan-400 text-cyan-200 disabled:opacity-30 hover:bg-cyan-800 hover:text-cyan-100 hover:shadow-[0_0_15px_#00f0ffcc] transition-all"
            >
              [ Previous ]
            </button>
            <button
              onClick={() => {
                playClickSound();
                setCreativeIndex((prev) =>
                  prev + 1 < creativeProjects.length ? prev + 1 : prev
                );
              }}
              onMouseEnter={playHoverSound}
              disabled={creativeIndex + 1 >= creativeProjects.length}
              className="px-4 py-2 border rounded border-cyan-400 text-cyan-200 disabled:opacity-30 hover:bg-cyan-800 hover:text-cyan-100 hover:shadow-[0_0_15px_#00f0ffcc] transition-all"
            >
              [ Next ]
            </button>
          </div>
        </section>
      </div>
       <ContactForm topMargin="mt-8" transparent />
    </div>
  );
}
