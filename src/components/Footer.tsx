import { Link } from "react-router-dom"
import liviko from "../assets//logo.png"
import tank from "../assets/logo.png"
import cidermill from "../assets/logo.png"
import coop from "../assets/logo.png"

const partners = [liviko, tank, cidermill, coop]

const Footer = () => {
  return (
    <footer className="bg-black border-t border-zinc-800 mt-20">

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* TOP */}
        <div className="grid md:grid-cols-3 gap-10 text-sm">

          {/* BRAND */}
          <div>
            <h3 className="text-lg font-serif mb-3">HydroFuel</h3>
            <p className="text-zinc-400">
              Performance drinks built for hydration, energy, and recovery.
            </p>

            {/* TAGLINE */}
            <p className="text-xs text-zinc-500 mt-4 tracking-widest">
              HYDRATION • ENERGY • RECOVERY
            </p>
          </div>

          {/* NAV */}
          <div>
            <h4 className="mb-3 text-zinc-300">Navigation</h4>
            <div className="flex flex-col gap-2 text-zinc-400">
              <Link to="/products">Products</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="mb-3 text-zinc-300">Legal</h4>
            <div className="flex flex-col gap-2 text-zinc-400">
              <Link to="/terms">Terms of Service</Link>
              <Link to="/privacy">Privacy Policy</Link>
            </div>
          </div>

        </div>
      </div>

      {/* PARTNERS */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="text-zinc-500 uppercase tracking-widest mb-12">
            Trusted by
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            {partners.map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center h-28 bg-zinc-900 rounded-2xl hover:bg-zinc-800 transition"
              >
                <img
                  src={logo}
                  alt="partner"
                  className="h-16 object-contain opacity-70 hover:opacity-100 transition"
                />
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* BOTTOM */}
      <div className="mt-10 pt-6 border-t border-zinc-800 text-center text-sm text-zinc-400 pb-10">
        <p className="mt-2 flex flex-col md:flex-row justify-center gap-2 md:gap-6">

          <span>HydroFuel Labs</span>
          <span>21 Fitness Avenue, Los Angeles, CA</span>

          <a href="tel:+13235550192" className="text-white hover:text-[var(--colorSecond)]">
            +1 (323) 555-0192
          </a>

          <a href="mailto:hello@hydrofuel.com" className="text-white hover:text-[var(--colorSecond)]">
            hello@hydrofuel.com
          </a>

        </p>
      </div>

    </footer>
  )
}

export default Footer