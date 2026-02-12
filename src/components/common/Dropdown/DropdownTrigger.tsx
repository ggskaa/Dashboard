// components/common/Dropdown/DropdownTrigger.tsx
import { cn } from '../../../lib/utils'
import { ChevronDown } from 'lucide-react'

interface DropdownTriggerProps {
  children?: React.ReactNode
  icon?: React.ReactNode
  avatar?: string | null
  avatarText?: string
  title?: string
  subtitle?: string
  showChevron?: boolean
  chevronIcon?: React.ReactNode
  className?: string
  avatarClassName?: string
  onClick?: () => void
}

export default function DropdownTrigger({
  children,
  icon,
  avatar,
  avatarText,
  title,
  subtitle,
  showChevron = true,
  chevronIcon = <ChevronDown size={14} />,
  className = '',
  avatarClassName = '',
  onClick
}: DropdownTriggerProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center gap-2 p-1.5 rounded-lg',
        'hover:bg-accent transition-colors duration-200',
        'focus:outline-none focus:ring-2 focus:ring-ring',
        className
      )}
    >
      {/* avatar */}
      {avatar && (
        <div className={cn(
          'w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden',
          avatarClassName
        )}>
          <img src={avatar} alt="avatar" className="w-full h-full object-cover" />
        </div>
      )}
      {/* avatar + name  short */}
      {avatarText && !avatar && (
        <div className={cn(
          'w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center',
          avatarClassName
        )}>
          <span className="text-primary-foreground text-sm font-medium">
            {avatarText}
          </span>
        </div>
      )}

      {/* Иконка слева */}
      {icon && !avatar && !avatarText && (
        <span className="text-muted-foreground">{icon}</span>
      )}

      {/* Контент */}
      {(title || subtitle || children) && (
        <div className="flex flex-col items-start">
          {title && <span className="text-sm font-medium text-foreground">{title}</span>}
          {subtitle && <span className="text-xs text-muted-foreground">{subtitle}</span>}
          {children}
        </div>
      )}

      {/* Только дети (без обёртки) */}
      {!title && !subtitle && children && (
        <span className="text-sm text-foreground">{children}</span>
      )}

      {/* Шеврон */}
      {showChevron && (
        <span className="text-xs text-muted-foreground ml-1">
          {chevronIcon}
        </span>
      )}
    </button>
  )
}