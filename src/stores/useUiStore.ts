import { create } from 'zustand'

type AuthModal = 'login' | 'signup' | null

type UiState = {
  authModal: AuthModal
  headerQuery: string
  pendingReservationId: string | null
  openAuthModal: (modal: Exclude<AuthModal, null>) => void
  closeAuthModal: () => void
  setHeaderQuery: (query: string) => void
  setPendingReservationId: (id: string | null) => void
}

export const useUiStore = create<UiState>((set) => ({
  authModal: null,
  headerQuery: '',
  pendingReservationId: null,
  openAuthModal: (modal) => set({ authModal: modal }),
  closeAuthModal: () => set({ authModal: null }),
  setHeaderQuery: (query) => set({ headerQuery: query }),
  setPendingReservationId: (id) => set({ pendingReservationId: id }),
}))
