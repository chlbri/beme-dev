//Sleep function with a promise in milliseconds
export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
