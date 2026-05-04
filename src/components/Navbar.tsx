import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'

//flags
import eesti from '../assets/navbar/eesti.png'
import saksamaa from '../assets/navbar/saksamaa.png'
import inglismaa from '../assets/navbar/inglismaa.png'

const Navbar = () => {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [langOpen, setLangOpen] = useState(false)
  const [lang, setLang] = useState('ET')

  const SCROLL_THRESHOLD = 5

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const diff = currentScrollY - lastScrollY

      if (currentScrollY < 80) {
        setShow(true)
      } else if (diff > SCROLL_THRESHOLD) {
        setShow(false)
      } else if (diff < -SCROLL_THRESHOLD) {
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
            bg-black/90 backdrop-blur-md border-b border-zinc-800
            transition-transform duration-500 ease-in-out
            ${show ? 'translate-y-0' : '-translate-y-full'}
        `}
        >
        <div className="max-w-7xl mx-auto px-6 h-20 md:h-35 flex items-center justify-center relative">

            {/* LEFT NAV */}
            <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest absolute left-[20%]">
            <Link to="/" className="text-zinc-400 hover:text-[var(--bronze)] transition">Home</Link>
            <Link to="/tooted" className="text-zinc-400 hover:text-(--bronze) transition">Products</Link>
            
          {/*  <Link to="/kokteilid" className="text-zinc-400 hover:text-(--bronze) transition">Kokteilid</Link> */}
            </nav>

            {/* LOGO CENTER */}
            <Link to="/" className="absolute left-1/2 -translate-x-1/2">
            <img src={logo} alt="Atla" className="h-12 md:h-14 object-contain scale-300" />
            </Link>

            {/* RIGHT NAV */}
            <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest absolute right-[20%]">
            <Link to="/meist" className="text-zinc-400 hover:text-(--bronze) transition">About us</Link>
            <Link to="/kontakt" className="text-zinc-400 hover:text-(--bronze) transition">Contact</Link>
            </nav>

            {/* LANGUAGE + CTA */}
            <div className="hidden md:flex items-center gap-4 absolute right-0">

            <div className="relative">

            {/* BUTTON */}
            <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 border border-zinc-700 rounded-full px-3 py-1 text-xs uppercase tracking-widest text-zinc-400 hover:text-(--bronze) transition"
            >
                <span>
                {lang === 'ET' && <img src={eesti} alt="Atla" className="h-2 md:h-4 object-contain rounded" />}
                {lang === 'EN' && <img src={inglismaa} alt="Atla" className="h-2 md:h-4 object-contain rounded" />}
                {lang === 'DE' && <img src={saksamaa} alt="Atla" className="h-2 md:h-4 object-contain rounded" />}
                </span>
                {lang}
            </button>

            {/* DROPDOWN */}
            <div
                className={`
                absolute right-0 mt-3 w-40 bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden
                transition-all duration-200
                ${langOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}
                `}
            >
                <button
                onClick={() => { setLang('ET'); setLangOpen(false) }}
                className="w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-zinc-800 transition"
                >
                <img src={eesti} alt="Atla" className="h-2 md:h-4 object-contain rounded" /> Eesti
                </button>

                <button
                onClick={() => { setLang('EN'); setLangOpen(false) }}
                className="w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-zinc-800 transition"
                >
                <img src={inglismaa} alt="Atla" className="h-2 md:h-4 object-contain rounded" /> English
                </button>

                <button
                onClick={() => { setLang('DE'); setLangOpen(false) }}
                className="w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-zinc-800 transition"
                >
                <img src={saksamaa} alt="Atla" className="h-2 md:h-4 object-contain rounded" /> Deutsch
                </button>
            </div>

            </div>
            {/* CTA */}
            <Link to="/tehasetuur"className="px-5 py-2 border border-(--colorSecond) rounded-full text-sm hover:bg-(--colorSecond-light)/10 transition">
                Contact
            </Link>

            </div>

        </div>
        </header>
  )
}

export default Navbar