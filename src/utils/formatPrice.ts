export function formatDailyRate(value: number) {
  return `RS${value}`
}

export function formatMoney(value: number) {
  return `R$${value.toFixed(2).replace('.', ',')}`
}

export function formatDateInput(value: string) {
  if (!value) {
    return 'Data'
  }

  const [year, month, day] = value.split('-')
  return `${day}/${month}/${year}`
}

export function countRentalDays(pickupDate: string, returnDate: string) {
  const start = new Date(`${pickupDate}T00:00:00`)
  const end = new Date(`${returnDate}T00:00:00`)
  const diff = Math.round((end.getTime() - start.getTime()) / 86_400_000)
  return Math.max(diff, 1)
}
