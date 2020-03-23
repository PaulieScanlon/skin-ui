export const checkAndReplaceQuotes = string => {
  if (string && typeof string === "string") {
    return string.replace(/"(\w+)"\s*:/g, "$1:")
  }
}
