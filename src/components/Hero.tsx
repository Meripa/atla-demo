import { Link } from 'react-router-dom'
import { products } from '../data/products'
import { motion } from "framer-motion"

// import Meiekirg from '../assets/Meiekirg.jpg'


import taust from "../assets/5.png"
import grupipilt from '../assets/bottle1.png'
import bottle from '../assets/bottle3.png'
import vorkpall from '../assets/vorkpall.png'
import linnuke from '../assets/linnuke.png'


// Front products
const featuredIds = [11, 1]
const featuredProducts = products.filter((p) => featuredIds.includes(p.id))


function App() {
  return (
    <div className="min-h-screen text-white">
      {/* BACKGROUND*/}
      <div className="fixed inset-0 -z-20">
        <img
          src={taust}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 blur-[2px]" />
      </div>

      {/* HERO */}
      <section className="relative w-full overflow-hidden  ">

        {/* background */}



        {/* content */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center px-6 py-30 md:py-52.5">

          {/* logo */}
          <img
            src={linnuke}
            alt="Sports Drink"
            className="h-32 sm:h-40 md:h-48 object-contain mb-6 p-10 "
          />

          {/* heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-6 leading-tight">
            Fuel Your Performance
            <br />
            <span className="text-(--colorSecond)">
              Hydrate. Recover. Dominate
            </span>
          </h1>

          {/* text */}
          <p className="text-zinc-300 max-w-lg mb-10">
             A functional sports drink designed to support your performance — before, during, and after every workout.
          </p>

          {/* buttons */}
          <div className="flex flex-col sm:flex-row gap-4">

            <Link
              to="/tooted"
              className="px-8 py-3 bg-(--colorSecond) text-zinc-950 rounded-full tracking-widest text-sm hover:opacity-90 transition"
            >
              DISCOVER PRODUCTS
            </Link>

            <Link
              to="/tehasetuur"
              className="px-8 py-3 border border-(--colorSecond) rounded-full tracking-widest text-sm hover:bg-(--colorSecond)/10 transition"
            >
              LEARN MORE
            </Link>

          </div>

        </div>
      </section>


    <section className="relative w-full overflow-hidden min-h-175 md:min-h-212]" >
      
      <div className="absolute inset-0 flex justify-center">
        <div className="w-full max-w-500 h-full  relative overflow-hidden">

          <motion.img
            src={bottle}
            alt="Sports Drink"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-black/20" />

          {/* linear */}
          <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black/90" />
        </div>
      </div>

      {/* 🧠 CONTENT WRAPPER */}
      <div className="relative z-10 flex items-end h-full pb-25 md:pb-35 min-h-175 md:min-h-225">
        <div className="w-full max-w-325 mx-auto px-3 text-center">

          <motion.div
            className="flex flex-col items-center gap-4 md:gap-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="text-gray-300 text-xl md:text-2xl">
              Our Signature Drink
            </h1>

            <button className="px-8 py-3 border border-white text-white tracking-widest hover:bg-white hover:text-black transition-all duration-300">
              View More
            </button>

          </motion.div>

        </div>
      </div>

    </section>

      {/* PRODUCTS */}
    <section className="py-150 md:py-35">
      <div className="max-w-200 mx-auto px-6">
        
        {/* HEADER */}
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-6">
          Built for Performance
        </h2>

        <p className="text-center text-zinc-400 mb-16 max-w-xl mx-auto leading-relaxed">
          Clean hydration, balanced electrolytes, and energy when you need it most.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-stretch ">
        {featuredProducts.map((p, index) => (
        <motion.div
          key={p.id}
          className="h-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.12 }}
          viewport={{ once: true }}
        >
          <Link to={`/tooted/${p.id}`} className="group block h-full">

            <div className="h-full flex flex-col bg-zinc-900/40 rounded-2xl overflow-hidden hover:bg-zinc-900 hover:shadow-2xl transition duration-300">

              {/* IMAGE */}
              <div className="p-6 pt-6">
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
              <div className="px-6 pb-6 flex flex-col grow">

                <div>
                  <h3 className="text-lg font-serif tracking-wide mb-2">
                    {p.name}
                  </h3>

                  <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-auto flex justify-between items-center pt-4">
                  <p className="text-(--colorSecond) text-lg tracking-wide">
                    {p.price} €
                  </p>

                  <button className="px-4 py-1.5 border border-(--colorSecond) text-xs tracking-widest uppercase rounded-full hover:bg-(--colorSecond)/10 transition">
                    ADD
                  </button>
                </div>

              </div>

            </div>

          </Link>
        </motion.div>
        
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/tooted"
            className="px-8 py-3 border border-(--colorSecond) rounded-full tracking-widest text-sm hover:bg-(--colorSecond)/10 transition inline-block"
          >
            VIEW ALL PRODUCTS →
          </Link>
        </div>

      </div>
    </section>

      {/* EXPERIENCE */}
    <section className="relative w-full overflow-hidden min-h-175 md:min-h-212">
      <div className="absolute inset-0 flex justify-center">
        <div className="w-full max-w-500 h-full relative overflow-hidden">

          <img
            src={vorkpall}
            alt=""
            className="w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/30 to-transparent" />
        </div>
      </div>

      {/* 🧠 CONTENT */}
      <div className="relative z-10 flex items-end min-h-175 md:min-h-200  pb-30 md:pb-40">
        <div className="w-full max-w-300 mx-auto px-6">

          <motion.div
            className="flex justify-end"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div className="bg-gray/90  p-10 md:p-12 max-w-md text-white shadow-2xl">

              <h2 className="text-3xl md:text-4xl tracking-[0.25em] font-light mb-6">
                WHY IT WORKS
              </h2>

              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                 Developed for athletes. Optimized for hydration, endurance, and faster recovery. Every ingredient serves a purpose.
              </p>

              <div className="flex flex-col gap-4">
                <Link to="/tehasetuur" className="border border-white px-6 py-3 tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                  LEARN MORE
                </Link>

                <Link to="/tehasetuur" className="border border-white px-6 py-3 tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                  SEE INGREDIENTS
                </Link>
              </div>

            </div>

          </motion.div>

        </div>
      </div>

    </section>

      {/* STORY */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative h-105 rounded-2xl overflow-hidden">
            <img
              src={grupipilt}
              alt="Atla distillery"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          <div>
            <h2 className="text-4xl font-serif mb-6">Our Story</h2>

            <p className="text-zinc-400 mb-6 leading-relaxed">
               It started with a simple goal — create a drink that actually supports performance, not just tastes good.
            </p>

            <p className="text-zinc-400 mb-6 leading-relaxed">
              Built for athletes, tested in real training environments, and designed to push limits further.

            </p>

            <Link
              to="/meist"
              className="text-(--colorSecond) hover:underline transition"
            >
              Read More →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App