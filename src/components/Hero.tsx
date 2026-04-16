import { Link } from 'react-router-dom'
import { products } from '../data/products'
import { motion } from "framer-motion"

// import Meiekirg from '../assets/Meiekirg.jpg'
import logo from '../assets/logo.png'

import grupipilt from '../assets/aboutpage/grupipilt.jpg'
import bottle from '../assets/bottle.png'
import masintuur from '../assets/meesmasinaga.png'


// Front products
const featuredIds = [1, 5]
const featuredProducts = products.filter((p) => featuredIds.includes(p.id))


function App() {
  return (
    <div className="min-h-screen text-white">
      {/* HERO */}
      <section className="relative w-full overflow-hidden  ">

        {/* background */}



        {/* content */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center px-6 py-[120px] md:py-[160px]">

          {/* logo */}
          <img
            src={logo}
            alt="Atla"
            className="h-32 sm:h-40 md:h-48 object-contain mb-6"
          />

          {/* heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-6 leading-tight">
            Eesti käsitööbrändi destilleerija, kus
            <br />
            <span className="text-[var(--colorSecond)]">
              aeg loob maitse
            </span>
          </h1>

          {/* text */}
          <p className="text-zinc-300 max-w-lg mb-10">
            Ühes mõnusas Eesti külas valmiv premium käsitööalkohol, kus traditsioon kohtub kvaliteediga.
          </p>

          {/* buttons */}
          <div className="flex flex-col sm:flex-row gap-4">

            <Link
              to="/tooted"
              className="px-8 py-3 bg-[var(--colorSecond)] text-zinc-950 rounded-full tracking-widest text-sm hover:opacity-90 transition"
            >
              AVASTA TOOTED
            </Link>

            <Link
              to="/tehasetuur"
              className="px-8 py-3 border border-[var(--colorSecond)] rounded-full tracking-widest text-sm hover:bg-[var(--colorSecond)]/10 transition"
            >
              BRONEERI RINGKÄIK
            </Link>

          </div>

        </div>
      </section>


    {/* Viski pilt */}
    <section className="relative w-full overflow-hidden min-h-[700px] md:min-h-[850px]" >
      
      {/* 🔥 CENTERED BACKGROUND (EI VENI) */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-full max-w-[2000px] h-full  relative overflow-hidden">

          <motion.img
            src={bottle}
            alt="Atla Whiskey"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-black/20" />

          {/* gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/90" />
        </div>
      </div>

      {/* 🧠 CONTENT WRAPPER */}
      <div className="relative z-10 flex items-end h-full pb-[100px] md:pb-[140px] min-h-[700px] md:min-h-[900px]">
        <div className="w-full max-w-[1300px] mx-auto px-3 text-center">

          <motion.div
            className="flex flex-col items-center gap-4 md:gap-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="text-gray-300 text-xl md:text-2xl">
              Meie signatuurjook
            </h1>

            <button className="px-8 py-3 border border-white text-white tracking-widest hover:bg-white hover:text-black transition-all duration-300">
              VAATA ROHKEM
            </button>

          </motion.div>

        </div>
      </div>

    </section>


      {/* BRAND STATEMENT 
      <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={Meiekirg}
            alt="Atla Distillery"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="absolute inset-0 "></div>

        <div className="relative z-10 px-6 max-w-4xl">
          <p
            className="text-3xl sm:text-4xl md:text-5xl text-(--colorSecond)"
            style={{ fontFamily: 'Vivaldi, cursive' }}
          >

          </p>
        </div>
      </section>
        */}
      {/* PRODUCTS */}
    <section className="py-[600px] md:py-[140px]">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black via-[#0b0b0b] to-black" />
        {/* HEADER */}
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-6">
          Valik hetkedeks, mis väärivad aega
        </h2>

        <p className="text-center text-zinc-400 mb-16 max-w-xl mx-auto leading-relaxed">
          Tasakaalus maitse, puhas karakter ja hetk, mida tasub nautida
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
                    className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              </div>

              {/* CONTENT */}
              <div className="px-6 pb-6 flex flex-col flex-grow">

                <div>
                  <h3 className="text-lg font-serif tracking-wide mb-2">
                    {p.name}
                  </h3>

                  <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3">
                    {p.desc}
                  </p>
                </div>

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

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/tooted"
            className="px-8 py-3 border border-[var(--colorSecond)] rounded-full tracking-widest text-sm hover:bg-[var(--colorSecond)]/10 transition inline-block"
          >
            VAATA KÕIKI TOOTEID →
          </Link>
        </div>

      </div>
    </section>

      {/* EXPERIENCE */}
    <section className="relative w-full overflow-hidden min-h-[700px] md:min-h-[850px]">

      {/* 🔥 CENTERED BACKGROUND */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-full max-w-[2000px] h-full relative overflow-hidden">

          <img
            src={masintuur}
            alt="Atla Tehas"
            className="w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
        </div>
      </div>

      {/* 🧠 CONTENT */}
      <div className="relative z-10 flex items-end min-h-[700px] md:min-h-[800px]  pb-[120px] md:pb-[160px]">
        <div className="w-full max-w-[1200px] mx-auto px-6">

          <motion.div
            className="flex justify-end"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div className="bg-gray/90  p-10 md:p-12 max-w-md text-white shadow-2xl">

              <h2 className="text-3xl md:text-4xl tracking-[0.25em] font-light mb-6">
                TEHASETUUR
              </h2>

              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                Tule avasta, kuidas sünnivad meie joogid. Degusteerimine,
                tootmisprotsess ja elamus ühes kohas.
              </p>

              <div className="flex flex-col gap-4">
                <Link to="/tehasetuur" className="border border-white px-6 py-3 tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                  TULE KÜLLA
                </Link>

                <Link to="/tehasetuur" className="border border-white px-6 py-3 tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                  TULEME SINU JUURDE
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
          <div className="relative h-[420px] rounded-2xl overflow-hidden">
            <img
              src={grupipilt}
              alt="Atla distillery"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          <div>
            <h2 className="text-4xl font-serif mb-6">Meie lugu</h2>

            <p className="text-zinc-400 mb-6 leading-relaxed">
              Kõik saab alguse esimesest sammust. Oma rännakut alustasime 2017.
              aastal Atla mõisas, kus taastasime 1905. aastal katkenud
              viinapõletamise traditsiooni.
            </p>

            <p className="text-zinc-400 mb-6 leading-relaxed">
              Meie kirg on õunasiidrist destilleeritud piiritus, mis küpseb
              tammevaatides aeglaselt – kuni saavutab oma iseloomu. Puhtad
              maitsed. Selge mõte.
            </p>

            <Link
              to="/meist"
              className="text-(--colorSecond) hover:underline transition"
            >
              Loe rohkem →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App