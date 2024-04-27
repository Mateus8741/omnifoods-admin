export function formatDate(date: string) {
  const dateFormated = new Date(date)
  return dateFormated.toLocaleTimeString('pt-BR')
}
