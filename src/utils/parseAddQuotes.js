export const parseAddQuotes = object =>
  JSON.parse(object.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2": '))
