"use client";
import dynamic from "next/dynamic";
import Sparkles from "./components/Sparkles";

export default function Home() {
  // Client Components:
  const Scene = dynamic(() => import("./components/Scene"), {
    loading: () => (
      <>
        <div className="grid place-items-center h-full bg-black">
          <p className="text-center text-lg md:text-4xl lg:text-6xl font-bold text-white">
            <Sparkles color="#ffc700">Loading...</Sparkles>
          </p>
        </div>
      </>
    ),
    ssr: false,
  });

  return (
    <main className="relative h-[100svh]">
      <Scene />
    </main>
  );
}
