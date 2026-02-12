// contexts/sidebar-context.tsx
import { createContext, useContext, useState } from 'react'

interface SidebarContextType {
  isPinned: boolean
  isHovering: boolean
  isExpanded: boolean
  togglePinned: () => void
  setHovering: (hovering: boolean) => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isPinned, setIsPinned] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const isExpanded = isPinned || isHovering

  const togglePinned = () => setIsPinned(prev => !prev)
  const setHovering = (hovering: boolean) => setIsHovering(hovering)

  return (
    <SidebarContext.Provider value={{ isPinned, isHovering, isExpanded, togglePinned, setHovering }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => {
  const context = useContext(SidebarContext)
  if (!context) throw new Error('useSidebar must be used within SidebarProvider')
  return context
}