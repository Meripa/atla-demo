import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const SCROLL_THRESHOLD = 10 // kui palju peab scrollima, et reageeriks

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const diff = currentScrollY - lastScrollY

      // alati näita topis
      if (currentScrollY < 80) {
        setShow(true)
      } 
      // scroll down (ainult kui piisav liikumine)
      else if (diff > SCROLL_THRESHOLD) {
        setShow(false)
      } 
      // scroll up (kohe reageerib)
      else if (diff < -SCROLL_THRESHOLD) {
        setShow(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`
        fixed top-0 w-full z-50
        bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800
        transition-transform duration-500 ease-in-out
        ${show ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img 
            src={logo} 
            alt="Atla Distillery" 
            className="h-14 md:h-16 object-contain"
          />
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest">
          <Link to="/" className="text-zinc-400 hover:text-white transition">Avaleht</Link>
          <Link to="/tooted" className="text-zinc-400 hover:text-white transition">Tooted</Link>
          <Link to="/tehasetuur" className="text-zinc-400 hover:text-white transition">Tehase tuur</Link>
          <Link to="/meist" className="text-zinc-400 hover:text-white transition">Meist</Link>
          <Link to="/kontakt" className="text-zinc-400 hover:text-white transition">Kontakt</Link>
        </nav>

        {/* CTA */}
        <button className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 text-sm font-medium rounded-full transition">
          Broneeri
        </button>

      </div>
    </header>
  )
}

export default Navbar