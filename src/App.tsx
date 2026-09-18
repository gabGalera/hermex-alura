import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppShell } from '@/components/AppShell'
import { Confirmation } from '@/pages/Confirmation'
import { Home } from '@/pages/Home'
import { Reservation } from '@/pages/Reservation'
import { VehicleDetails } from '@/pages/VehicleDetails'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route path="/" element={<Home />} />
          <Route path="/veiculos/:id" element={<VehicleDetails />} />
          <Route path="/reserva/:id" element={<Reservation />} />
          <Route path="/confirmacao/:id" element={<Confirmation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
