// Performs a deep comparison of two objects and returns a diff as a string matrix
export function deepDiff(
  obj1: object,
  obj2: object
): string[][] {
  const diffs: string[][] = [["Key", "JSON 1", "JSON 2"]];

  function walk(keyPath: string, val1: object | null, val2: object | null): void {
    if (
      val1 && typeof val1 === "object" &&
      val2 && typeof val2 === "object"
    ) {
      const keys = new Set([
        ...Object.keys(val1),
        ...Object.keys(val2)
      ]);
      for (const key of keys) {
        walk(
          keyPath ? `${keyPath}.${key}` : key,
          (val1 as Record<string, unknown>)[key] as object | null,
          (val2 as Record<string, unknown>)[key] as object | null
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