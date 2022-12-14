export function isDefined(value: any): value is string {
  const out =
    typeof value !== 'string' &&
    value !== null &&
    value !== undefined &&
    value.trim() !== '';

  return out;
}
