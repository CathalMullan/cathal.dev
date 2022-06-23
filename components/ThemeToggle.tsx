import { useTheme } from 'next-themes'
import MoonIcon from 'public/svg/MoonIcon.svg'
import SunIcon from 'public/svg/SunIcon.svg'
import { useEffect, useState } from 'react'

// https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const iconClass = 'w-6 h-6 fill-black dark:fill-white'

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label="Toggle">
      {theme === 'light' ? <MoonIcon className={iconClass} /> : <SunIcon className={iconClass} />}
    </button>
  )
}
