import React, { useState } from "react";

type FormattedJsonProps = {
  formatted: string;
};

export function FormattedJson({ formatted }: FormattedJsonProps) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  if (!formatted) return null;
  return (
    <>
      <div className="flex items-center gap-2">
        <label className="font-semibold">Formatted</label>
        <button
          type="button"
          className="ml-2 p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={handleCopy}
          title="Copy to clipboard"
        >
          {/* Clipboard Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={18}
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block align-middle"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" fill="currentColor" className="text-gray-400" />
            <rect x="3" y="3" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2" className="text-gray-600 dark:text-gray-300" fill="none" />
          </svg>
        </button>
        {copied && (
          <span className="text-green-600 text-xs ml-1">Copied!</span>
        )}
      </div>
      <textarea
        className="mt-2 w-full font-mono text-xs bg-gray-100 dark:bg-gray-800 border rounded p-2 resize-y"
        style={{
          minHeight: "600px",
          maxHeight: "100vh",
          height: `${Math.min(1000, Math.max(400, formatted.split("\n").length * 20))}px`,
          overflow: "auto",
        }}
        value={formatted}
        readOnly
        rows={formatted.split("\n").length}
      />
    </>
  );
}

export default FormattedJson;
