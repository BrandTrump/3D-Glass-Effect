"use client";
import dynamic from "next/dynamic";
import { div } from "three/examples/jsm/nodes/Nodes.js";

export default function Home() {
  // Client Components:
  const Scene = dynamic(() => import("./components/Scene"), {
    loading: () => (
      <>
        <div className="grid place-items-center h-full bg-black">
          <p className="text-center text-6xl font-bold text-white">
            Loading...
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
