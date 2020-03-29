const isValidHex = currentValue => currentValue.length === 7

export const checkAndParse = object => {
  if (
    object &&
    typeof object === "string" &&
    Object.values(JSON.parse(object).colors).every(isValidHex) &&
    JSON.parse(object)
  ) {
    return JSON.parse(object)
  }
}
