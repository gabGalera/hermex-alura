import { create } from 'zustand'
import type { ProtectionId, SearchTrip } from '@/types/reservation'

const defaultTrip: SearchTrip = {
  pickupLocation: 'Aeroporto de Congonhas',
  returnLocation: 'Aeroporto de Congonhas',
  pickupDate: '2025-09-20',
  returnDate: '2025-09-24',
  pickupTime: '10:00',
  returnTime: '10:00',
}

type ReservationState = {
  trip: SearchTrip
  protectionId: ProtectionId | null
  reservationCode: string
  setTrip: (trip: Partial<SearchTrip>) => void
  setProtection: (id: ProtectionId | null) => void
}

export const useReservationStore = create<ReservationState>((set) => ({
  trip: defaultTrip,
  protectionId: 'basic',
  reservationCode: 'XYZH6013',
  setTrip: (trip) =>
    set((state) => ({
      trip: { ...state.trip, ...trip },
    })),
  setProtection: (id) => set({ protectionId: id }),
}))
