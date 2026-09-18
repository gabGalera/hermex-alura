export type ProtectionId = "basic" | "standard" | "advanced"

export type ProtectionPlan = {
  id: ProtectionId
  name: string
  dailyRate: number
  items: string[]
}

export type SearchTrip = {
  pickupLocation: string
  returnLocation: string
  pickupDate: string
  returnDate: string
  pickupTime: string
  returnTime: string
}
