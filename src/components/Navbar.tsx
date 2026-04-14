import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div>
        <header className="fixed top-0 w-full z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
            <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            <Link to="/"><img src={logo} alt="Atla Disstillery" className="h-16 md:h-20 scale-220" /></Link>

            <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-white">
                <Link to="/" className='hover:text-white text-gray-400 border-amber-400'>Avaleht</Link>
                <Link to="/tooted" className='hover:text-white text-gray-400 border-amber-400'>Tooted</Link>
                <Link to="/tehasetuur" className='hover:text-white text-gray-400 border-amber-400'>Tehase Tuur</Link>
                <Link to="/meist" className='hover:text-white text-gray-400 border-amber-400'>Meist</Link>
                <Link to="/kontakt" className='hover:text-white text-gray-400 border-amber-400'>Kontakt</Link>
            </nav>

            <button className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-medium rounded-full">
                Broneeri
            </button>
            </div>
        </header>
    </div>
  )
}

export default Navbar