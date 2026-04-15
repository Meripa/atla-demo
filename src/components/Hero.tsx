import { Link } from 'react-router-dom'
import { products } from '../data/products'

// import Meiekirg from '../assets/Meiekirg.jpg'
import logo from '../assets/logo.png'
import tehasetuur from '../assets/aboutpage/masin.png'
import sinujuurde from '../assets/sinujuurde.png'
import grupipilt from '../assets/aboutpage/grupipilt.jpg'


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
      <section className="min-h-screen flex items-center relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <div className="mb-2 flex justify-center">
            <img
              src={logo}
              alt="Atla"
              className="
                h-40 sm:h-48 md:h-56 lg:h-64
                opacity-95
                object-contain
                transition duration-500
                scale-[1.5]
                -translate-y-4
              "
            />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-6 leading-tight">
            Eesti käsitööbrändi destilleerija,
            <br />
            <span className="text-(--colorSecond)">kus aeg loob maitse</span>
          </h1>

          <p className="text-lg sm:text-l text-zinc-300 max-w-lg mx-auto">
            Väikeses Eesti külas valmiv premium käsitööalkohol, kus traditsioon
            kohtub kvaliteediga.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/tooted"
              className="px-8 sm:px-10 py-3 sm:py-4 bg-(--colorSecond) hover:bg-(--colorSecond-light) text-zinc-950 font-medium rounded-full text-base sm:text-lg transition"
            >
              Avasta tooted
            </Link>

            <Link
              to="/tehasetuur"
              className="px-8 sm:px-10 py-3 sm:py-4 border border-(--colorSecond) hover:bg-(--colorSecond)/10 rounded-full text-base sm:text-lg transition"
            >
              Broneeri ringkäik
            </Link>
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
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-center mb-4">
            Külastage Atla Distilleryt
          </h2>

          <p className="text-center text-zinc-400 mb-16 max-w-2xl mx-auto leading-relaxed">
            Võimalus kogeda tootmist lähedalt. Näha, kuidas aeg ja tooraine
            loovad maitse.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {experiences.map((e, i) => (
              <div
                key={i}
                className="group relative rounded-3xl overflow-hidden"
              >
                <div className="h-[420px] overflow-hidden">
                  <img
                    src={e.image}
                    alt={e.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>

                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition"></div>

                <div className="absolute bottom-0 p-8 w-full">
                  <h3 className="text-2xl font-serif mb-2">{e.title}</h3>

                  <p className="text-zinc-300 text-sm mb-4 max-w-sm">
                    {e.desc}
                  </p>

                  <div className="flex items-center justify-between gap-4">
                    <p className="text-(--colorSecond)">{e.price}</p>

                    <Link
                      to="/tehasetuur"
                      className="px-5 py-2 border border-(--colorSecond) rounded-full text-sm hover:bg-(--colorSecond-light)/10 transition"
                    >
                      Loe täpsemalt
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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