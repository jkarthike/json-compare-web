import React from "react";

type JsonInputProps = {
  label: string;
  value: string;
  onChange: (v: string) => void;
  onFormat: () => void;
};

export function JsonInput({ label, value, onChange }: JsonInputProps) {
  return (
    <div className="flex-1 flex flex-col gap-2 min-w-0">
      <label className="font-semibold">{label}</label>
      <textarea
        className="w-full h-48 sm:h-64 p-2 border rounded font-mono text-xs sm:text-sm bg-white dark:bg-gray-900 resize-y min-h-[400px] h-auto"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={`Paste or type ${label} here`}
      />
    </div>
  );
}
