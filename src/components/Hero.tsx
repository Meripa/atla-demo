import { Link } from 'react-router-dom'
import { products } from '../data/products'
import { motion } from "framer-motion"

// import Meiekirg from '../assets/Meiekirg.jpg'
import logo from '../assets/logo.png'
import tehasetuur from '../assets/aboutpage/masin.png'
import sinujuurde from '../assets/sinujuurde.png'
import grupipilt from '../assets/aboutpage/grupipilt.jpg'
import bottle from '../assets/bottle.png'
import masintuur from '../assets/masintuur.png'


// Front products
const featuredIds = [1, 3, 5]
const featuredProducts = products.filter((p) => featuredIds.includes(p.id))

// Tours / experiences
const experiences = [
  {
    title: 'Meie juures',
    desc: '2h ekskursioon koos tootmise tutvustusega ning degusteerimisega.',
    price: '250 €',
    image: tehasetuur,
  },
  {
    title: 'Kliendi juures',
    desc: 'Tuleme Teie juurde oma lugu jutustama.',
    price: '150 €',
    image: sinujuurde,
  },
]

function App() {
  return (
    <div className="min-h-screen text-white">
      {/* HERO */}
      <section className="relative w-full overflow-hidden bg-black">

        {/* background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b0b] to-black" />


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
            Eesti käsitööbrändi destilleerija,
            <br />
            <span className="text-[var(--colorSecond)]">
              kus aeg loob maitse
            </span>
          </h1>

          {/* text */}
          <p className="text-zinc-300 max-w-lg mb-10">
            Väikeses Eesti külas valmiv premium käsitööalkohol,
            kus traditsioon kohtub kvaliteediga.
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
          <div className="absolute inset-0 bg-black/40" />

          {/* gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/90" />
        </div>
      </div>

      {/* 🧠 CONTENT WRAPPER */}
    <div className="relative z-10 flex items-end pb-[80px] md:pb-[120px]">
      <div className="w-full max-w-[1300px] mx-auto px-6 text-center">

        <motion.div
          className="flex flex-col items-center h-[200px] justify-between mt-20 md:mt-130"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-gray-300 max-w-md mx-auto">
            Meie signatuurjook – tugev, tasakaalus ja meeldejääv.
          </p>

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
      <section className="py-24">
        
        <div className="max-w-6xl mx-auto px-6">
          
          <h2 className="text-4xl font-serif text-center mb-4">
            
            Valik hetkedeks, mis väärivad aega
          </h2>

          <p className="text-center text-zinc-400 mb-16 max-w-2xl mx-auto leading-relaxed">
            Need joogid ei ole juhuslik valik. Igaüks neist on kujunenud
            aeglaselt ja teadlikult.
          </p>

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {featuredProducts.map((p) => (
              <div
                key={p.id}
                className="group bg-zinc-900/50 rounded-2xl overflow-hidden hover:bg-zinc-900 transition duration-300"
              >
                {/* IMAGE */}
                <Link to={`/tooted/${p.id}`}>
                <div className="relative overflow-hidden">

                    <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition duration-700"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-black/25"></div>

                    {/* PRICE TOP RIGHT */}


                </div>
                </Link>

                <div className="px-4 py-4 flex justify-between items-start gap-4">
                  <div className="max-w-[65%]">
                    <h3 className="text-lg font-serif tracking-wide mb-1">
                      {p.name}
                    </h3>

                    <p className="text-zinc-500 text-sm leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <p className="text-(--colorSecond) text-lg tracking-wide">
                      {p.price} €
                    </p>

                    <button className="px-4 py-1.5 border border-(--colorSecond) text-sm rounded-full hover:bg-(--colorSecond-light)/10 transition">
                      Lisa
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/tooted"
              className="px-8 py-3 border border-(--colorSecond) hover:bg-(--colorSecond-light)/10 rounded-full transition inline-block"
            >
              Vaata kõiki tooteid →
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