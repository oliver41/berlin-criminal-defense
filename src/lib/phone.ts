// Convert German display number "030 629 383 59" -> tel:+4930629... 
export function toTelHref(num: string): string {
  const digits = num.replace(/\D/g, "");
  if (digits.startsWith("0")) return `tel:+49${digits.slice(1)}`;
  return `tel:+${digits}`;
}
