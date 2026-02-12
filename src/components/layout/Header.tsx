// components/layout/Header.tsx
import { useSidebar } from '../../contexts/sidebar-context'
import { Menu } from 'lucide-react'
import ThemeToggle from '../common/ThemeToggle'
import { cn } from '../../lib/utils'
import DropdownMenu from '../common/Dropdown/DropdownMenu'
import DropdownItem from '../common/Dropdown/DropdownItem'
import DropdownHeader from '../common/Dropdown/DropdownHeader'
import DropdownSeparator from '../common/Dropdown/DropdownSeparator'
import { User, Settings, LogOut } from 'lucide-react'

export function Header() {
  const { togglePinned, isExpanded } = useSidebar()

  return (
    <header className={cn(
      'fixed top-0 right-0 z-40',
      'h-16 bg-background/95 border-b border-border backdrop-blur-sm',
      'flex items-center justify-between px-6',
      'transition-all duration-300 ease-out',
      isExpanded ? 'left-64' : 'left-20'
    )}>
      <div className="flex items-center gap-3">
        <button
          onClick={togglePinned}
          className="p-2 rounded-md hover:bg-accent transition-colors"
        >
          <Menu size={20} className="text-foreground" />
        </button>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        
        <DropdownMenu
          trigger={
            <button className="flex items-center gap-2 p-1 rounded-md hover:bg-accent transition-colors">
              <div className="w-8 h-8 bg-primary/75 rounded-full flex items-center justify-center">
                <span className="text-primary-foreground text-sm font-medium">JD</span>
              </div>
            </button>
          }
          align="right"
          animation="scale"
          animationDuration={200}
        >
          <DropdownHeader>Account</DropdownHeader>
          <DropdownItem icon={<User size={16} />}>Profile</DropdownItem>
          <DropdownItem icon={<Settings size={16} />}>Settings</DropdownItem>
          <DropdownSeparator />
          <DropdownItem 
            icon={<LogOut size={16} />}
            className="text-destructive hover:text-destructive-foreground hover:bg-destructive/10"
          >
            Log out
          </DropdownItem>
        </DropdownMenu>
      </div>
    </header>
  )
}