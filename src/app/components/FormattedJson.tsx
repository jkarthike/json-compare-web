import React from "react";

type FormattedJsonProps = {
  formatted: string;
};

export function FormattedJson({ formatted }: FormattedJsonProps) {
  if (!formatted) return null;
  return (
    <>
      <label className="font-semibold">Formatted</label>
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
