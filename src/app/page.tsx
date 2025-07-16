"use client";
import React, { useState } from "react";

import { JsonInput } from "./components/JsonInput";
import { DiffTable } from "./components/DiffTable";
import { deepDiff, formatJson } from "./utils/jsonUtils";

export default function Page() {
  const [mounted, setMounted] = useState(false);
  const [leftJson, setLeftJson] = useState("");
  const [rightJson, setRightJson] = useState("");
  const [leftFormatted, setLeftFormatted] = useState("");
  const [rightFormatted, setRightFormatted] = useState("");
  const [diff, setDiff] = useState<string[][]>([]);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  function handleFormatLeft() {
    setLeftFormatted(formatJson(leftJson));
  }
  function handleFormatRight() {
    setRightFormatted(formatJson(rightJson));
  }
  function handleCompare() {
    try {
      const obj1 = JSON.parse(leftFormatted || leftJson);
      const obj2 = JSON.parse(rightFormatted || rightJson);
      setDiff(deepDiff(obj1, obj2));
    } catch {
      setDiff([["Invalid JSON", "-", "-"]]);
    }
  }

  if (!mounted) {
    return null;
  }

  return (
    <div className="font-sans min-h-screen p-4 sm:p-8 pb-20 flex flex-col gap-6 items-center justify-center bg-gray-50 dark:bg-black">
      <h1 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-center">JSON Compare Tool</h1>
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 w-full max-w-5xl">
        <JsonInput
          label="JSON 1"
          value={leftJson}
          onChange={setLeftJson}
          onFormat={handleFormatLeft}
          formatted={leftFormatted}
        />
        <JsonInput
          label="JSON 2"
          value={rightJson}
          onChange={setRightJson}
          onFormat={handleFormatRight}
          formatted={rightFormatted}
        />
      </div>
      <button
        className="mt-4 px-4 sm:px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 w-full sm:w-auto text-base sm:text-lg"
        onClick={handleCompare}
      >
        Compare JSONs
      </button>
      <DiffTable diff={diff} />
    </div>
  );
}
