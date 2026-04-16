import { products } from "../data/products"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Products = () => {
  return (
    <div className="min-h-screen text-white pt-[140px] px-6">

      {/* GLOBAL BG (kui pole Appis) */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black via-[#0b0b0b] to-black" />

      {/* HEADER */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--colorSecond)] opacity-80 mb-4">
          Atla Distillery
        </p>

        <h1 className="text-4xl md:text-6xl font-serif mb-6 tracking-wide">
          Meie joogid
        </h1>

        <p className="text-zinc-400 leading-relaxed max-w-lg mx-auto">
          Iga jook on loodud aeglaselt ja teadlikult – tasakaalus maitse,
          puhas karakter ja hetk, mida tasub nautida.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 items-stretch">

        {products.map((p, index) => (
          <motion.div
            key={p.id}
            className="h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
          >

            <Link to={`/tooted/${p.id}`} className="group block h-full">

              <div className="h-full flex flex-col bg-zinc-900/40 rounded-2xl overflow-hidden hover:bg-zinc-900 hover:shadow-2xl transition duration-300">

                {/* IMAGE */}
                <div className="p-5 pb-0">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="px-5 py-5 flex flex-col flex-grow">

                  {/* NAME */}
                  <h4 className="text-lg font-serif tracking-wide mb-2">
                    {p.name}
                  </h4>

                  {/* DESC */}
                  <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2">
                    {p.desc}
                  </p>

                  {/* BOTTOM */}
                  <div className="mt-auto flex justify-between items-center pt-4">

                    <p className="text-[var(--colorSecond)] text-lg tracking-wide">
                      {p.price} €
                    </p>

                    <button className="px-4 py-1.5 border border-[var(--colorSecond)] text-xs tracking-widest uppercase rounded-full hover:bg-[var(--colorSecond)]/10 transition">
                      Lisa
                    </button>

                  </div>

                </div>

              </div>

            </Link>

          </motion.div>
        ))}

      </div>
    </div>
  )
}

export default Products