import React, { useState } from "react";
import { JsonInput } from "./JsonInput";
import FormattedJson from "./FormattedJson";

import { formatJson } from "../utils/jsonUtils";
import { repairJson } from "../utils/jsonRepair";

export function FormatSection() {
  const [json, setJson] = useState("");
  const [formatted, setFormatted] = useState("");
  const [jsonError, setJsonError] = useState<string>("");

  function handleFormat() {
    try {
      setFormatted(formatJson(json));
      setJsonError("");
    } catch (e: unknown) {
      setFormatted("");
      if (e instanceof Error) {
        setJsonError(e.message || "Invalid JSON");
      } else {
        setJsonError("Invalid JSON");
      }
    }
  }

  function handleRepairAndFormat() {
    try {
      const repaired = repairJson(json);
      const formatted = formatJson(repaired);
      setFormatted(formatted);
      setJsonError("");
    } catch (e: unknown) {
      setFormatted("");
      if (e instanceof Error) {
        setJsonError(e.message || "Could not repair JSON");
      } else {
        setJsonError("Could not repair JSON");
      }
    }
  }

  return (
    <div className="w-full max-w-3xl">
      <JsonInput
        label="JSON"
        value={json}
        onChange={setJson}
        onFormat={handleFormat}
      />
      <div className="flex gap-2 mt-4">
        <button
          className="px-4 sm:px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 w-full sm:w-auto text-base sm:text-lg"
          onClick={handleFormat}
        >
          Format JSON
        </button>
        <button
          className="px-4 sm:px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full sm:w-auto text-base sm:text-lg"
          onClick={handleRepairAndFormat}
        >
          Repair & Format
        </button>
      </div>
      {jsonError && (
        <div className="text-red-600 text-xs mt-4 break-all">{jsonError}</div>
      )}
      {formatted && (
        <div className="mt-4">
          <FormattedJson formatted={formatted} />
        </div>
      )}
    </div>
  );
}

export default FormatSection;