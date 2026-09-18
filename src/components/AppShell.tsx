import { Outlet, useLocation } from 'react-router-dom'
import { AuthModal } from '@/components/AuthModal'
import { CarSearchBar } from '@/components/CarSearchBar'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function AppShell() {
  const location = useLocation()
  const expandedSearch = location.pathname === '/'

  return (
    <div className="flex min-h-screen flex-col bg-neutral-white">
      <Header />
      <CarSearchBar expanded={expandedSearch} />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      <AuthModal />
    </div>
  )
}
