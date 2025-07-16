import React from "react";

type JsonInputProps = {
  label: string;
  value: string;
  onChange: (v: string) => void;
  onFormat: () => void;
  formatted: string;
};

export function JsonInput({ label, value, onChange, onFormat, formatted }: JsonInputProps) {
  return (
    <div className="flex-1 flex flex-col gap-2 min-w-0">
      <label className="font-semibold">{label}</label>
      <textarea
        className="w-full h-48 sm:h-64 p-2 border rounded font-mono text-xs sm:text-sm bg-white dark:bg-gray-900 resize-y min-h-[120px]"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={`Paste or type ${label} here`}
      />
      <button
        className="self-end px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 mt-1"
        onClick={onFormat}
      >
        Format JSON
      </button>
      <label className="font-semibold mt-2">Formatted</label>
      <textarea
        className="w-full h-24 sm:h-32 p-2 border rounded font-mono text-xs bg-gray-100 dark:bg-gray-800 resize-y min-h-[60px]"
        value={formatted}
        readOnly
      />
    </div>
  );
}
