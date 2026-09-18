export type VehicleFeature =
  | "ac"
  | "lock"
  | "electric"
  | "abs"
  | "bags-3"
  | "bags-2"
  | "manual"
  | "steering"
  | "people-4"
  | "people-5"

export type Vehicle = {
  id: string
  name: string
  category: string
  description: string
  dailyRate: number
  image: string
  gallery: string[]
  features: VehicleFeature[]
}
