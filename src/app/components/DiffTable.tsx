import React from "react";

type DiffTableProps = {
  diff: string[][];
};

export function DiffTable({ diff }: DiffTableProps) {
  if (!diff.length) return null;
  return (
    <div className="mt-8 w-full max-w-5xl overflow-x-auto">
      <h2 className="text-base sm:text-lg font-semibold mb-2">Differences</h2>
      <table className="w-full border-collapse text-xs sm:text-sm">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700">
            <th className="border px-2 py-1">Path</th>
            <th className="border px-2 py-1">JSON 1</th>
            <th className="border px-2 py-1">JSON 2</th>
          </tr>
        </thead>
        <tbody>
          {diff.map(([path, val1, val2], i) => (
            <tr key={i} className="odd:bg-gray-100 even:bg-white dark:odd:bg-gray-800 dark:even:bg-gray-900">
              <td className="border px-2 py-1 font-mono break-all max-w-[120px] sm:max-w-[200px]">{path}</td>
              <td className="border px-2 py-1 font-mono break-all max-w-[120px] sm:max-w-[200px]">{val1}</td>
              <td className="border px-2 py-1 font-mono break-all max-w-[120px] sm:max-w-[200px]">{val2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
