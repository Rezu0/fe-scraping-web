export function formatNumber(num) {
  const rounded = Math.floor(num / 100) * 100;
  return rounded.toLocaleString('id-ID');
}