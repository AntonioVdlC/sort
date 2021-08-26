function getValueByKey(obj: Record<string, any>, key: string) {
  return String(key)
    .split(".")
    .reduce((acc, cur: string) => acc?.[cur] ?? null, obj);
}

export default getValueByKey;
