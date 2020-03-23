export const checkAndParse = object => {
  if (object && typeof object === "string") {
    return JSON.parse(object)
  }
}
