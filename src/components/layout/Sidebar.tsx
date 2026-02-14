import { useSidebar } from '@/contexts/sidebar-context'
import { 
  LayoutDashboard, 
  Link2, 
  BarChart3, 
  Settings,
  Users,
  ChevronDown,
  ChevronRight,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import  DropdownMenu  from '@/components/common/Dropdown/DropdownMenu'
import  DropdownItem  from '@/components/common/Dropdown/DropdownItem'
import  DropdownHeader  from '@/components/common/Dropdown/DropdownHeader'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export function Sidebar() {
  const { isPinned, isExpanded, setHovering } = useSidebar()
  const [openCategories, setOpenCategories] = useState(['main'])

  const toggleCategory = (category: string) => {
    setOpenCategories(prev => 
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    )
  }

  const navLinkClasses = ({ isActive }: { isActive: boolean }) => cn(
    'flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors w-full',
    isActive 
      ? 'bg-primary/10 text-primary' 
      : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
  )

  const iconLinkClasses = ({ isActive }: { isActive: boolean }) => cn(
    'flex items-center justify-center w-10 h-10 rounded-md transition-colors',
    isActive 
      ? 'bg-primary/10 text-primary' 
      : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
  )

  const categoryButtonClasses = 'w-full flex items-center justify-between px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors'

  return (
    <>
      {!isPinned && (
        <div 
          className="fixed left-0 top-0 w-1.5 h-full z-40 bg-transparent"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        />
      )}

      <aside 
        className={cn(
          'fixed left-0 top-0 h-full z-50',
          'bg-card border-r border-border',
          'transition-all duration-300 ease-out',
          'flex flex-col',
          isExpanded ? 'w-64' : 'w-20'
        )}
        onMouseEnter={() => !isPinned && setHovering(true)}
        onMouseLeave={() => !isPinned && setHovering(false)}
      >
        {/* HEADER */}
        <div className={cn(
          'flex items-center h-16 border-b border-border shrink-0',
          isExpanded ? 'px-4 justify-start' : 'justify-center'
        )}>
          <div className="w-8 h-8 bg-primary/60 rounded-lg flex items-center justify-center shrink-0">
            <span className="text-primary-foreground font-bold">RD</span>
          </div>
          {isExpanded && (
            <span className="ml-3 text-lg font-semibold text-foreground whitespace-nowrap">
              Admin
            </span>
          )}
        </div>
        {/* nav */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden py-4">
          {!isExpanded ? (
            <div className="flex justify-center w-full">
              <DropdownMenu
                trigger={
                  <NavLink to="/" className={iconLinkClasses}>
                    <LayoutDashboard size={22} />
                  </NavLink>
                }
              >
                <DropdownHeader>Main</DropdownHeader>
                <DropdownItem>
                  <NavLink to="/" className={navLinkClasses}>
                    <LayoutDashboard size={16} />
                    <span>Dashboard</span>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink to="/customers" className={navLinkClasses}>
                    <Users size={16} />
                    <span>Customers</span>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink to="/links" className={navLinkClasses}>
                    <Link2 size={16} />
                    <span>Links</span>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink to="/analytics" className={navLinkClasses}>
                    <BarChart3 size={16} />
                    <span>Analytics</span>
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </div>
          ) : (
            <div className="px-3">
              <button onClick={() => toggleCategory('main')} className={categoryButtonClasses}>
                <div className="flex items-center gap-3">
                  <LayoutDashboard size={18} />
                  <span>Main</span>
                </div>
                {openCategories.includes('main') ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </button>
              
              {openCategories.includes('main') && (
                <div className="ml-4 pl-2 border-l border-border space-y-1 mt-2">
                  <NavLink to="/" className={navLinkClasses}>
                    <LayoutDashboard size={16} />
                    <span>Dashboard</span>
                  </NavLink>
                  <NavLink to="/customers" className={navLinkClasses}>
                    <Users size={16} />
                    <span>Customers</span>
                  </NavLink>
                  <NavLink to="/links" className={navLinkClasses}>
                    <Link2 size={16} />
                    <span>Links</span>
                  </NavLink>
                  <NavLink to="/analytics" className={navLinkClasses}>
                    <BarChart3 size={16} />
                    <span>Analytics</span>
                  </NavLink>
                </div>
              )}
            </div>
          )}
          {!isExpanded ? (
            <div className="flex justify-center w-full mt-1">
              <DropdownMenu
                trigger={
                  <NavLink to="/settings" className={iconLinkClasses}>
                    <Settings size={22} />
                  </NavLink>
                }
              >
                <DropdownHeader>Settings</DropdownHeader>
                <DropdownItem>
                  <NavLink to="/settings" className={navLinkClasses}>
                    <Settings size={16} />
                    <span>Settings</span>
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </div>
          ) : (
            <div className="px-3 mt-2">
              <button onClick={() => toggleCategory('settings')} className={categoryButtonClasses}>
                <div className="flex items-center gap-3">
                  <Settings size={18} />
                  <span>Settings</span>
                </div>
                {openCategories.includes('settings') ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </button>
              {openCategories.includes('settings') && (
                <div className="ml-4 pl-2 border-l border-border space-y-1 mt-2">
                  <NavLink to="/settings" className={navLinkClasses}>
                    <Settings size={16} />
                    <span>Settings</span>
                  </NavLink>
                </div>
              )}
            </div>
          )}
        </div>
        <div className={cn(
          'border-t border-border p-4 shrink-0',
          'flex items-center',
          !isExpanded && 'justify-center p-3'
        )}>
          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
            <span className="text-primary-foreground text-sm font-medium">JD</span>
          </div>
          {isExpanded && (
            <div className="ml-3 flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">John Doe</p>
              <p className="text-xs text-muted-foreground truncate">john@example.com</p>
            </div>
          )}
        </div>
      </aside>

      {/* спейсерок */}
      <div 
        className={cn(
          'transition-all duration-300 ease-out',
          isExpanded ? 'w-64' : 'w-20'
        )} 
      />
    </>
  )
}