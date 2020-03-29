const isValidHex = currentValue => currentValue.length === 7

export const checkAndParse = object => {
  if (
    object &&
    typeof object === "string" &&
    // Check each color is a valid hex '#123456'
    Object.values(JSON.parse(object).colors).every(isValidHex)
  ) {
    return JSON.parse(object)
  }
}
