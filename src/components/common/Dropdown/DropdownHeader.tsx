import { cn } from '../../../lib/utils'

interface DropdownHeaderProps {
  children: React.ReactNode
  className?: string
}

export default function DropdownHeader({ children, className = '' }: DropdownHeaderProps) {
  return (
    <div className={cn(
      'px-4 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider',
      className
    )}>
      {children}
    </div>
  )
}