import { Link } from "react-router-dom"
import liviko from "../assets//liviko.png"
import tank from "../assets/tank.png"
import cidermill from "../assets/cidermill.png"
import coop from "../assets/coop.png"
const partners = [liviko, tank, cidermill, coop]

const Footer = () => {
  return (
    <footer className="bg-black border-t border-zinc-800 mt-20">

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* TOP */}
        <div className="grid md:grid-cols-3 gap-10 text-sm">

          {/* BRAND */}
          <div>
            <h3 className="text-lg font-serif mb-3">Atla Distillery</h3>
            <p className="text-zinc-400">
              Eesti käsitööjoogid, loodud kvaliteedi ja traditsiooniga.
            </p>
          </div>



          {/* LEGAL */}
          <div>
            <h4 className="mb-3 text-zinc-300">Info</h4>
            <div className="flex flex-col gap-2 text-zinc-400">
              <Link to="/tingimused">Kasutustingimused</Link>
              <Link to="/privaatsus">Privaatsuspoliitika</Link>
            </div>
          </div>

        </div>



      </div>

      {/* PARTNERS */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="text-zinc-500 uppercase tracking-widest mb-12">
            Koostööpartnerid
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
                  className="h-20 object-contain opacity-80 hover:opacity-100 transition"
                />
              </div>
            ))}

          </div>
        </div>
      </section>
              {/* BOTTOM */}
      <div className="mt-10 pt-6 border-t border-zinc-800 text-center text-sm md:text-base text-zinc-400 pb-10">
        <p className="mt-2 flex flex-col md:flex-row justify-center gap-2 md:gap-6">
          <span>EBD Group OÜ</span>
          <span>Kesk tee 12, Jüri 75305</span>
          <a href="tel:+37257877220" className="text-white hover:text-amber-400">
            +372 5787 7220
          </a>
          <a href="mailto:info@ebd.ee" className="text-white hover:text-amber-400">
            info@ebd.ee
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer