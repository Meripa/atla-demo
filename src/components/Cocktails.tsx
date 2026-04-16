import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import cocktailHero from '../assets/pokaal.png'

import cocktail1 from '../assets/bottle.png'
import cocktail2 from '../assets/bottle.png'


const cocktails = [
  {
    id: 1,
    name: 'Kokteil 1',
    desc: 'Seda peab küll igaüks ise proovima.',
    image: cocktail1,
  },
  {
    id: 2,
    name: 'Kokteil 2',
    desc: 'Värske, tasakaalus ja elegantne – pehme happesus ning puhas lõpp.',
    image: cocktail2,
  },

]

function CocktailsPage() {
  return (
    <div className="min-h-screen text-white">
      {/* HERO */}
      <section className="relative w-full overflow-hidden min-h-[650px] md:min-h-[820px]">
        <div className="absolute inset-0 flex justify-center">
        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black via-[#0b0b0b] to-black" />
          <div className="w-full max-w-[2000px] h-full relative overflow-hidden">
            <img
              src={cocktailHero}
              alt="Atla cocktails"
              className="w-full h-full object-cover object-center scale-105"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80" />
          </div>
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 min-h-[650px] md:min-h-[820px] flex items-center">
          <motion.div
            className="max-w-[620px]"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--colorSecond)] opacity-80 mb-5">
              Atla Cocktails
            </p>

            <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-6">
              Atla joogid on kogemus omaette.
              <br />
              Tarvitada nautides!
            </h1>


            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#retseptid"
                className="px-8 py-3 bg-[var(--colorSecond)] text-zinc-950 rounded-full tracking-widest text-sm uppercase hover:opacity-90 transition"
              >
                Vaata retsepte
              </a>

              <Link
                to="/tooted"
                className="px-8 py-3 border border-[var(--colorSecond)] rounded-full tracking-widest text-sm uppercase hover:bg-[var(--colorSecond)]/10 transition"
              >
                Osta tooted
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED */}
          {/* <section className="relative w-full overflow-hidden min-h-[620px] md:min-h-[760px]">
            <div className="absolute inset-0 flex justify-center">
              <div className="w-full max-w-[1700px] h-full relative overflow-hidden">
                <img
                  src={featuredCocktail}
                  alt="Atla Signature cocktail"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />
              </div>
            </div>

            <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 min-h-[620px] md:min-h-[760px] flex items-end pb-[90px] md:pb-[120px]">
              <motion.div
                className="max-w-[520px]"
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-xs tracking-[0.3em] uppercase text-[var(--colorSecond)] opacity-80 mb-5">
                  Signature serve
                </p>

                <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
                  Atla Signature
                </h2>

                <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-[480px]">
                  Tasakaal tugevuse ja pehmuse vahel. Loodud nautimiseks, mitte
                  kiirustamiseks.
                </p>
              </motion.div>
            </div>
          </section> */}

      {/* RECIPE EXAMPLE */}
      <section className="py-[100px] md:py-[130px]">
        <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative overflow-hidden rounded-2xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src={cocktail1}
              alt="Atla Old Fashioned"
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--colorSecond)] opacity-80 mb-5">
              Soovitus
            </p>

            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Old Fashioned
            </h2>

            <p className="text-zinc-400 leading-relaxed mb-8 max-w-[520px]">
              Tõeline klassik, mis toob esile viski karakteri ning sügavuse. 
            </p>

            <div className="space-y-3 text-zinc-300 mb-8">
              <p>• 50 ml Atla viskit</p>
              <p>• 10 ml suhkrusiirupit</p>
              <p>• 2 tilka aromatic bitterit</p>
              <p>• 1 viil apelsinikoort</p>
              <p>• Jää</p>
            </div>

            <div>
              <h3 className="text-lg font-serif mb-3">Valmistamine</h3>
              <p className="text-zinc-400 leading-relaxed max-w-[560px]">
                Sega madalas klaasis viski ning suhkrusiirup. Lisa jää, veidi bitterit ja pigista peale aroomid apelsinikoorest.
                 Kukuta apelsinikoor joogi sisse ja naudi. <br /> Nii lihtne see ongi!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COCKTAIL GRID */}
      <section id="retseptid" className="py-[110px] md:py-[140px]">
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-5">
            Valitud kokteilid
          </h2>

          <p className="text-center text-zinc-400 mb-16 max-w-[620px] mx-auto leading-relaxed">
            Eri karakteriga serveeringud, mis toovad Atla maitse erinevatesse
            hetkesse — klassikast põhjamaise värskuseni.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-stretch">
            {cocktails.map((cocktail, index) => (
              <motion.div
                key={cocktail.id}
                className="h-full"
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: index * 0.12 }}
                viewport={{ once: true }}
              >
                <div className="h-full flex flex-col bg-zinc-900/40 rounded-2xl overflow-hidden hover:bg-zinc-900 hover:shadow-2xl transition duration-300">
                  <div className="p-6 pt-6">
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src={cocktail.image}
                        alt={cocktail.name}
                        className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition duration-700"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                    </div>
                  </div>

                  <div className="px-6 pb-6 flex flex-col flex-grow">
                    <div>
                      <h3 className="text-xl font-serif tracking-wide mb-2">
                        {cocktail.name}
                      </h3>

                      <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3">
                        {cocktail.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10">
                      <button className="px-5 py-2 border border-[var(--colorSecond)] text-xs tracking-widest uppercase rounded-full hover:bg-[var(--colorSecond)]/10 transition">
                        Vaata retsepti
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  )
}

export default CocktailsPage