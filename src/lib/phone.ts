export function toTelHref(num: string): string {
  const digits = num.replace(/\D/g, "");
  if (digits.startsWith("0")) return `tel:+49${digits.slice(1)}`;
  return `tel:+${digits}`;
}
