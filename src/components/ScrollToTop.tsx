import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant" // või "auto" kui tahad instant
    })
  }, [pathname])

  return null
}

export default ScrollToTop