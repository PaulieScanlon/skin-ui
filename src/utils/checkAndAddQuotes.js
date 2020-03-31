export const checkAndAddQuotes = string => {
  if (string && typeof string === "string") {
    return string.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2":')
  }
}
