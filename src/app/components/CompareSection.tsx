import React, { useState } from "react";
import { JsonInput } from "./JsonInput";
import { DiffTable } from "./DiffTable";
import { formatJson, deepDiff } from "../utils/jsonUtils";

export function CompareSection() {
  const [leftJson, setLeftJson] = useState("");
  const [rightJson, setRightJson] = useState("");
  const [diff, setDiff] = useState<string[][]>([]);

  function handleCompare() {
    try {
      const parsedLeft = JSON.parse(leftJson);
      const parsedRight = JSON.parse(rightJson);
      const differences = deepDiff(parsedLeft, parsedRight);
      setDiff(differences);
    } catch {
      setDiff([["Invalid JSON", "", ""]]);
    }
  }

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 w-full max-w-5xl">
        <JsonInput
          label="JSON 1"
          value={leftJson}
          onChange={setLeftJson}
          onFormat={() => setLeftJson(formatJson(leftJson))}
        />
        <JsonInput
          label="JSON 2"
          value={rightJson}
          onChange={setRightJson}
          onFormat={() => setRightJson(formatJson(rightJson))}
        />
      </div>
      <button
        className="mt-4 px-4 sm:px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 w-full sm:w-auto text-base sm:text-lg"
        onClick={handleCompare}
      >
        Compare JSONs
      </button>
      <DiffTable diff={diff} />
    </>
  );
}

export default CompareSection;