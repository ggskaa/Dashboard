// components/common/Dropdown/DropdonwMenu.tsx
import { useState, useRef, useEffect } from 'react'
import { cn } from '../../../lib/utils'

interface DropdownProps {
  trigger: React.ReactNode
  children: React.ReactNode
  align?: 'left' | 'right' | 'center'
  side?: 'top' | 'bottom'
  className?: string
  menuClassName?: string
  open?: boolean
  onOpenChange?: (open: boolean) => void
  closeOnClick?: boolean
  closeOnOutsideClick?: boolean
  animation?: 'none' | 'fade' | 'scale' | 'slide'
  animationDuration?: number
}

export default function DropdownMenu({ 
  trigger, 
  children, 
  align = 'left',
  side = 'bottom',
  className = '',
  menuClassName = '',
  open: controlledOpen,
  onOpenChange,
  closeOnClick = true,
  closeOnOutsideClick = true,
  animation = 'scale',
  animationDuration = 200
}: DropdownProps) {
  const [internalOpen, setInternalOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const isControlled = controlledOpen !== undefined
  const isOpen = isControlled ? controlledOpen : internalOpen

  const setIsOpen = (value: boolean) => {
    if (!isControlled) {
      setInternalOpen(value)
    }
    onOpenChange?.(value)
  }

  useEffect(() => {
    if (!closeOnOutsideClick) return //changable in props

    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [closeOnOutsideClick])

  const handleTriggerClick = () => {
    setIsOpen(!isOpen)
  }

  const handleItemClick = () => {
    if (closeOnClick) {
      setIsOpen(false)
    }
  }

  const getPositionClasses = () => { //position to tlw classes
    const positions = {
      left: 'left-0',
      right: 'right-0',
      center: 'left-1/2 -translate-x-1/2',
      bottom: 'top-full mt-2',
      top: 'bottom-full mb-2'
    }
    return `${positions[side]} ${positions[align]}`
  }

  const getAnimationClasses = () => {
    if (!isOpen) return 'invisible opacity-0 pointer-events-none'
    
    switch (animation) {
      case 'none':
        return 'visible opacity-100'
      case 'fade':
        return 'visible opacity-100 transition-opacity'
      case 'scale':
        return 'visible opacity-100 scale-100 transition-all'
      case 'slide':
        return 'visible opacity-100 translate-y-0 transition-all'
      default:
        return 'visible opacity-100'
    }
  }

  const getAnimationStyles = () => {
    const base = {
      transitionDuration: `${animationDuration}ms`,
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
    }

    if (!isOpen) {
      switch (animation) {
        case 'fade':
          return { ...base, opacity: 0 }
        case 'scale':
          return { ...base, opacity: 0, transform: 'scale(0.95)' }
        case 'slide':
          return { ...base, opacity: 0, transform: 'translateY(-8px)' }
        default:
          return { ...base }
      }
    }
    return base
  }

  // rerender's whatever trigger contains
  const triggerWithProps = (
    <div onClick={handleTriggerClick} className="cursor-pointer">
      {trigger}
    </div>
  )

  return (
    <div className={cn('relative inline-block', className)} ref={dropdownRef}>
      {triggerWithProps}
      <div 
        className={cn(
          'absolute z-50 min-w-45',
          'bg-popover border border-border rounded-lg shadow-lg',
          'py-1.5',
          getPositionClasses(),
          getAnimationClasses(),
          menuClassName
        )}
        style={getAnimationStyles()}
        onClick={handleItemClick}
      >
        {children}
      </div>
    </div>
  )
}