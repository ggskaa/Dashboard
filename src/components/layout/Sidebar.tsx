import { useSidebar } from '../../contexts/sidebar-context'
import { 
  LayoutDashboard, 
  Link2, 
  BarChart3, 
  Settings,
  Users,
  TrendingUp,
  Target,
  Zap,
  ChevronDown,
  ChevronRight
} from 'lucide-react'
import { cn } from '../../lib/utils'
import DropdownMenu from '../common/Dropdown/DropdownMenu'
import DropdownItem from '../common/Dropdown/DropdownItem'
import DropdownHeader from '../common/Dropdown/DropdownHeader'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export function Sidebar() {
  const { isPinned, isExpanded, setHovering } = useSidebar()
  const [openCategories, setOpenCategories] = useState(['main', 'analytics'])

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

  return (
    <>
      {/* hover only when not fixxed via button*/}
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
        <div className={cn(
          'flex items-center h-16 border-b border-border shrink-0',
          isExpanded ? 'px-4 justify-start' : 'justify-center'
        )}>
          <div className="w-8 h-8 bg-primary/60 rounded-lg flex items-center justify-center shrink-0">
            <span className="text-primary-foreground font-bold">RD</span>
          </div>
          {isExpanded && (
            <span className="ml-3 text-lg font-semibold text-foreground whitespace-nowrap">
              ReferralDash
            </span>
          )}
        </div>

        {/* nav */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden py-4">
          {/* main*/}
          {!isExpanded ? (
            <div className="flex justify-center w-full">
              <DropdownMenu
                trigger={
                  <NavLink to="/dashboard" className={iconLinkClasses}>
                    <LayoutDashboard size={22} />
                  </NavLink>
                }
                align="left"
                side="bottom"
                animation="scale"
              >
                <DropdownHeader>Main</DropdownHeader>
                <DropdownItem>
                  <NavLink to="/dashboard" className={navLinkClasses}>
                    <LayoutDashboard size={16} />
                    <span>Dashboard</span>
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
              <button
                onClick={() => toggleCategory('main')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <div className="flex items-center gap-3">
                  <LayoutDashboard size={18} />
                  <span>Main</span>
                </div>
                {openCategories.includes('main') ? (
                  <ChevronDown size={16} className="transition-transform duration-200" />
                ) : (
                  <ChevronRight size={16} className="transition-transform duration-200" />
                )}
              </button>
              
              <div className={cn(
                'ml-4 pl-2 border-l border-border space-y-1 overflow-hidden transition-all duration-200',
                openCategories.includes('main') ? 'mt-2 h-auto' : 'h-0'
              )}>
                {openCategories.includes('main') && (
                  <>
                    <NavLink to="/dashboard" className={navLinkClasses}>
                      <LayoutDashboard size={16} />
                      <span>Dashboard</span>
                    </NavLink>
                    <NavLink to="/links" className={navLinkClasses}>
                      <Link2 size={16} />
                      <span>Links</span>
                    </NavLink>
                    <NavLink to="/analytics" className={navLinkClasses}>
                      <BarChart3 size={16} />
                      <span>Analytics</span>
                    </NavLink>
                  </>
                )}
              </div>
            </div>
          )}

          {/* saas  cat (drop) */}
          {!isExpanded ? (
            <div className="flex justify-center w-full mt-1">
              <DropdownMenu
                trigger={
                  <NavLink to="/growth" className={iconLinkClasses}>
                    <TrendingUp size={22} />
                  </NavLink>
                }
                align="left"
                side="bottom"
                animation="scale"
              >
                <DropdownHeader>SaaS Analytics</DropdownHeader>
                <DropdownItem>
                  <NavLink to="/growth" className={navLinkClasses}>
                    <TrendingUp size={16} />
                    <span>Growth</span>
                    <span className="ml-auto text-xs bg-success/10 text-success px-1.5 py-0.5 rounded-full">+23%</span>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink to="/users" className={navLinkClasses}>
                    <Users size={16} />
                    <span>Users</span>
                    <span className="ml-auto text-xs bg-muted text-muted-foreground px-1.5 py-0.5 rounded-full">1.2K</span>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink to="/conversions" className={navLinkClasses}>
                    <Target size={16} />
                    <span>Conversions</span>
                    <span className="ml-auto text-xs bg-muted text-muted-foreground px-1.5 py-0.5 rounded-full">3.4%</span>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink to="/activity" className={navLinkClasses}>
                    <Zap size={16} />
                    <span>Activity</span>
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </div>
          ) : (
            <div className="px-3 mt-2">
              <button
                onClick={() => toggleCategory('analytics')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <div className="flex items-center gap-3">
                  <TrendingUp size={18} />
                  <span>SaaS Analytics</span>
                </div>
                {openCategories.includes('analytics') ? (
                  <ChevronDown size={16} className="transition-transform duration-200" />
                ) : (
                  <ChevronRight size={16} className="transition-transform duration-200" />
                )}
              </button>
              
              <div className={cn(
                'ml-4 pl-2 border-l border-border space-y-1 overflow-hidden transition-all duration-200',
                openCategories.includes('analytics') ? 'mt-2 h-auto' : 'h-0'
              )}>
                {openCategories.includes('analytics') && (
                  <>
                    <NavLink to="/growth" className={navLinkClasses}>
                      <TrendingUp size={16} />
                      <span>Growth</span>
                      <span className="ml-auto text-xs bg-success/10 text-success px-1.5 py-0.5 rounded-full">+23%</span>
                    </NavLink>
                    <NavLink to="/users" className={navLinkClasses}>
                      <Users size={16} />
                      <span>Users</span>
                      <span className="ml-auto text-xs bg-muted text-muted-foreground px-1.5 py-0.5 rounded-full">1.2K</span>
                    </NavLink>
                    <NavLink to="/conversions" className={navLinkClasses}>
                      <Target size={16} />
                      <span>Conversions</span>
                      <span className="ml-auto text-xs bg-muted text-muted-foreground px-1.5 py-0.5 rounded-full">3.4%</span>
                    </NavLink>
                    <NavLink to="/activity" className={navLinkClasses}>
                      <Zap size={16} />
                      <span>Activity</span>
                    </NavLink>
                  </>
                )}
              </div>
            </div>
          )}

          {/* settings cat (drop)*/}
          {!isExpanded ? (
            <div className="flex justify-center w-full mt-1">
              <DropdownMenu
                trigger={
                  <NavLink to="/general" className={iconLinkClasses}>
                    <Settings size={22} />
                  </NavLink>
                }
                align="left"
                side="bottom"
                animation="scale"
              >
                <DropdownHeader>Settings</DropdownHeader>
                <DropdownItem>
                  <NavLink to="/general" className={navLinkClasses}>
                    <Settings size={16} />
                    <span>General</span>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink to="/team" className={navLinkClasses}>
                    <Users size={16} />
                    <span>Team</span>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink to="/billing" className={navLinkClasses}>
                    <BarChart3 size={16} />
                    <span>Billing</span>
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </div>
          ) : (
            <div className="px-3 mt-2">
              <button
                onClick={() => toggleCategory('settings')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Settings size={18} />
                  <span>Settings</span>
                </div>
                {openCategories.includes('settings') ? (
                  <ChevronDown size={16} className="transition-transform duration-200" />
                ) : (
                  <ChevronRight size={16} className="transition-transform duration-200" />
                )}
              </button>
              <div className={cn(
                'ml-4 pl-2 border-l border-border space-y-1 overflow-hidden transition-all duration-200',
                openCategories.includes('settings') ? 'mt-2 h-auto' : 'h-0'
              )}>
                {openCategories.includes('settings') && (
                  <>
                    <NavLink to="/general" className={navLinkClasses}>
                      <Settings size={16} />
                      <span>General</span>
                    </NavLink>
                    <NavLink to="/team" className={navLinkClasses}>
                      <Users size={16} />
                      <span>Team</span>
                    </NavLink>
                    <NavLink to="/billing" className={navLinkClasses}>
                      <BarChart3 size={16} />
                      <span>Billing</span>
                    </NavLink>
                  </>
                )}
              </div>
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
      <div 
        className={cn(
          'transition-all duration-300 ease-out',
          isExpanded ? 'w-64' : 'w-20'
        )} 
      />
    </>
  )
}