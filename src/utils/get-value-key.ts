/**
 * Get a value from an object based on a key path
 * @param obj
 * @param key
 * @returns
 */
function getValueByKey(obj: Record<string, any>, key: string) {
  return String(key)
    .split(".")
    .reduce((acc, cur: string) => acc?.[cur] ?? null, obj);
}

export default getValueByKey;
