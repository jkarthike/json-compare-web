// Performs a deep comparison of two objects and returns a diff as a string matrix
export function deepDiff(obj1: any, obj2: any): string[][] {
  const diffs: string[][] = [["Key", "JSON 1", "JSON 2"]];

  function walk(keyPath: string, val1: any, val2: any) {
    if (typeof val1 === "object" && val1 !== null && typeof val2 === "object" && val2 !== null) {
      const keys = new Set([...Object.keys(val1), ...Object.keys(val2)]);
      for (const key of keys) {
        walk(
          keyPath ? `${keyPath}.${key}` : key,
          val1[key],
          val2[key]
        );
      }
    } else if (val1 !== val2) {
      diffs.push([keyPath, JSON.stringify(val1), JSON.stringify(val2)]);
    }
  }

  walk("", obj1, obj2);

  if (diffs.length === 1) {
    diffs.push(["No differences", "-", "-"]);
  }

  return diffs;
}

export function formatJson(json: string): string {
  try {
    return JSON.stringify(JSON.parse(json), null, 2);
  } catch {
    return json;
  }
}