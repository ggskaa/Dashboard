// components/common/Dropdown/DropdownItem.tsx
import { cn } from '../../../lib/utils'

interface DropdownItemProps {
  children: React.ReactNode
  onClick?: () => void
  icon?: React.ReactNode
  shortcut?: string
  disabled?: boolean
  className?: string
  href?: string
  target?: string
}

export default function DropdownItem({ 
  children, 
  onClick, 
  icon, 
  shortcut,
  disabled = false,
  className = '',
  href,
  target
}: DropdownItemProps) {
  const baseClassName = cn(
    'w-full flex items-center justify-between gap-3 px-4 py-2 text-sm',
    'text-popover-foreground',
    'hover:bg-accent hover:text-accent-foreground',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'transition-colors duration-150',
    'focus:outline-none focus:bg-accent',
    className
  )

  const content = (
    <>
      <div className="flex items-center gap-3">
        {icon && <span className="w-4 h-4 text-current">{icon}</span>}
        <span>{children}</span>
      </div>
      {shortcut && (
        <span className="text-xs text-muted-foreground">{shortcut}</span>
      )}
    </>
  )

  if (href) {
    return (
      <a href={href} target={target} className={baseClassName}>
        {content}
      </a>
    )
  }

  return (
    <button onClick={onClick} disabled={disabled} className={baseClassName}>
      {content}
    </button>
  )
}