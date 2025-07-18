"use client";
import React, { useState } from "react";

import FormatSection from "./components/FormatSection";
import CompareSection from "./components/CompareSection";

export default function Page() {
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState<"format" | "compare">("format");

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="font-sans min-h-screen p-0 sm:p-0 pb-20 flex flex-col gap-4 items-center justify-start bg-gray-50 dark:bg-black">
      <h1 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 mt-6 text-center">JSON Compare Tool</h1>
      <div className="flex gap-4 mb-4">
        <button
          className={`px-4 py-2 rounded ${mode === "format" ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"}`}
          onClick={() => setMode("format")}
        >
          Format
        </button>
        <button
          className={`px-4 py-2 rounded ${mode === "compare" ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"}`}
          onClick={() => setMode("compare")}
        >
          Compare
        </button>
      </div>
      {mode === "format" && <FormatSection />}
      {mode === "compare" && <CompareSection />}
    </div>
  );
}