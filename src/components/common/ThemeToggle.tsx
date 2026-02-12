import { useTheme } from '../../contexts/theme-context'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  return (
    <button
      onClick={toggle}
      className="p-2 rounded-md hover:bg-accent transition-colors"
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}