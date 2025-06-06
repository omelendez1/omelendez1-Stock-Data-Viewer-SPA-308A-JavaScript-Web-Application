// modules/utils.js
/* export function validateInput(symbol, startDate, endDate) {
  if (!symbol || !startDate || !endDate) return false;
  // Add more validation as needed
  return true;
} */
// modules/utils.js
/* export function validateSymbol(symbol) {
  return symbol && typeof symbol === 'string' && symbol.length > 0;
} */
// modules/utils.js

export function validateInputs(symbol, from, to) {
  if (!symbol || !from || !to) return false;
  if (new Date(from) > new Date(to)) return false;
  return true;
}