export function generateLiteId () {
  const today = new Date()
  return today.getMilliseconds()
}
