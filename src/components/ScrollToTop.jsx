import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// useEffect + useLocation: scroll to top on every route change
export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}
