import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './contexts/theme-context'
import { SidebarProvider } from './contexts/sidebar-context'
import { MainLayout } from './components/layout/MainLayout'

import DashboardPage from './pages/DashboardPage'
import LinksPage from './pages/LinksPage'
import AnalyticsPage from './pages/AnalyticsPage'

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <SidebarProvider>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Navigate to="/dashboard" replace />} />
              <Route path="dashboard" element={<DashboardPage />} />
              <Route path="links" element={<LinksPage />} />
              <Route path="analytics" element={<AnalyticsPage />} />
            </Route>
          </Routes>
        </SidebarProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}