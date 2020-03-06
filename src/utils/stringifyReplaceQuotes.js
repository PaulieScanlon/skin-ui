export const stringifyReplaceQuotes = object =>
  JSON.stringify(object, null, 2).replace(/"(\w+)"\s*:/g, "$1:")
