export const fixedColors = [
  '#4caf50',
  '#2196f3',
  '#ff9800',
  '#e91e63',
  '#9c27b0',
  '#3f51b5',
  '#f44336',
  '#00bcd4',
  '#8bc34a',
  '#ffc107',
]

function hexToRgb(hex: string) {
  const bigint = parseInt(hex.slice(1), 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return { r, g, b }
}

function generateLighterColor(color: string): string {
  const colorObj = hexToRgb(color)
  if (!colorObj) return '#ffffff'
  const { r, g, b } = colorObj
  return `rgb(${Math.min(r + 100, 255)}, ${Math.min(g + 100, 255)}, ${Math.min(b + 100, 255)})`
}

export function COLORS() {
  return {
    fixedColors,
    generateLighterColor,
  }
}

//   function getColor(index: number) {
//     const colors = ['#4caf50', '#2196f3', '#ffeb3b', '#ff9800']
//     return colors[index % colors.length]
//   }

//   function getLighterColor(color: string) {
//     const colorMap: { [key: string]: string } = {
//       '#4caf50': '#a5d6a7a8',
//       '#2196f3': '#90caf997',
//       '#ffeb3b': '#fff59d99',
//       '#ff9800': '#ffcc80a1',
//     }
//     return colorMap[color]
//   }
