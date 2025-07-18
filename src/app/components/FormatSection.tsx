import React, { useState } from "react";
import { JsonInput } from "./JsonInput";
import FormattedJson from "./FormattedJson";
import { formatJson } from "../utils/jsonUtils";

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

  return (
    <div className="w-full max-w-3xl">
      <JsonInput
        label="JSON"
        value={json}
        onChange={setJson}
        onFormat={handleFormat}
      />
      <button
        className="mt-4 px-4 sm:px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 w-full sm:w-auto text-base sm:text-lg"
        onClick={handleFormat}
      >
        Format JSON
      </button>
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