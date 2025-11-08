export function simulateFetch(symbol, ms = 900) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(generateMock(symbol)), ms);
  });
}
