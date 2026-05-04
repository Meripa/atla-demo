import { products } from "../data/products"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import taust from "../assets/5.png"

const Products = () => {
  return (
    <div className="relative min-h-screen text-white pt-35 px-6">

      <div className="fixed inset-0 -z-20">
        <img
          src={taust}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 blur-[2px]" />
      </div>

      {/* HEADER */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <p className="text-xs tracking-[0.3em] uppercase text-(--colorSecond) opacity-80 mb-4">
          Perfomance Hydration
        </p>

        <h1 className="text-4xl md:text-6xl font-serif mb-6 tracking-wide">
          Fuel Your Performance
        </h1>

        <p className="text-zinc-400 leading-relaxed max-w-lg mx-auto">
         Each formula is crafted with precision to support performance, hydration, and recovery.
        </p>
      </div>

      <div className="max-w-300 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">

        {products.map((p, index) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
          >

            <Link to={`/products/${p.id}`} className="group block h-full">

              <div className="h-full flex flex-col bg-zinc-900/40 rounded-2xl overflow-hidden hover:bg-zinc-900 hover:shadow-2xl transition duration-300">

                <div className="p-5 pb-0">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full aspect-3/4 object-cover group-hover:scale-105 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="px-5 py-5 flex flex-col grow">

                  <h4 className="text-lg font-serif tracking-wide mb-2">
                    {p.name}
                  </h4>

                  <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2">
                    {p.desc}
                  </p>

                  <div className="mt-auto flex justify-between items-center pt-4">
                    <p className="text-(--colorSecond) text-lg tracking-wide">
                      {p.price} €
                    </p>

                    <button className="px-4 py-1.5 border border-(--colorSecond) text-xs tracking-widest uppercase rounded-full hover:bg-(--colorSecond)/10 transition">
                      Add
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