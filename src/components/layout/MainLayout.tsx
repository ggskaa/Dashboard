import { Outlet } from "react-router-dom"
import { Sidebar } from "./Sidebar"
import { Header } from "./Header"

export function MainLayout() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="pt-16 p-6 transition-all duration-300 ease-out">
          <Outlet />
        </main>
      </div>
    </div>
  )
}