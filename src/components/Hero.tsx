import {Link} from 'react-router-dom'
import Meiekirg from '../assets/Meiekirg.jpg'
import {products} from '../data/products'

{/* Pildid */}
import logo from '../assets/logo.png'
import tehasetuur from '../assets/tehasetuur.png'
import sinujuurde from '../assets/sinujuurde.png'
import grupipilt from '../assets/aboutpage/grupipilt.jpg'

{/* Choose pictures for front products.*/}
const featuredIds = [1, 3, 5]
const featuredProducts = products.filter(p =>
  featuredIds.includes(p.id)
)

{/* For changing Tours and meeting info */}

const experiences = [
  {
    title: "Meie juures",
    desc: "2h ekskursioon koos tootmise tutvustusega ning dekusteerimisega.",
    price: "250 €",
    image: tehasetuur
  },
  {
    title: "Kliendi juures",
    desc: "Tuleme Teie juurde oma lugu jutustama",
    price: "150 €",
    image: sinujuurde
  }
]




function App() {

  return (
    <div className="min-h-screen  text-white">
      

      {/* HERO */}
      <section className="min-h-screen flex items-center relative">
        <div className="absolute inset-0 "></div>
        <div className="absolute inset-0  bg-cover bg-center"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
            <div className="mb-2 flex justify-center bg">
            <img
                src={logo}
                alt="Atla"
                className="
                h-56 md:h-80 lg:h-35
                opacity-95
                object-contain
                transition duration-500
                scale-400
                -translate-y-20
                "
            />
            </div>

          <h1 className="text-5xl md:text-6xl font-serif mb-6 leading-tight">
            Eesti käsitööbrändi destilleerija,<br />
            <span className="text-amber-400">kus aeg loob maitse</span>
          </h1>

          <p className="text-xl text-zinc-300 max-w-lg mx-auto">
            Väikeses Eesti külas valmiv premium käsitööalkohol,
            kus traditsioon kohtub kvaliteediga.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to= "/tooted" className="px-10 py-4 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-medium rounded-full text-lg">
              Avasta tooted
            </Link>
            <Link to='/tehasetuur' className="px-10 py-4 border border-amber-400 hover:bg-amber-400/10 rounded-full text-lg">
              Broneeri ringkäik
            </Link>
          </div>
        </div>
      </section>

    <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
            <img
            src={Meiekirg}
            alt="Atla Distillery"
            className="w-full h-full object-cover object-center"
            />
        </div>

        <div className="absolute inset-0 /50"></div>

        <div className="relative z-10 px-6">
            <p className='text-orange-400' style={{ fontFamily: "Vivaldi, cursive" }} ></p>
        </div>
        </section>


        {/* PRODUCTS */}
        <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

            {/* HEADER */}
            <h2 className="text-4xl font-serif text-center mb-4">
            Valik hetkedeks, mis väärivad aega
            </h2>

            <p className="text-center text-zinc-400 mb-16 max-w-2xl mx-auto leading-relaxed">
            Need joogid ei ole juhuslik valik.  
            Igaüks neist on kujunenud aeglaselt ja teadlikult.
            </p>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">

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
                className="w-full h-70 object-cover group-hover:scale-105 transition duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/25"></div>

                {/* PRICE TOP RIGHT */}


            </div>
            </Link>

        {/* TEXT + RIGHT SIDE */}
        <div className="px-3 py-3 flex justify-between items-start">

        {/* LEFT */}
        <div className="max-w-[70%]">
            <h3 className="text-lg font-serif tracking-wide mb-1">
            {p.name}
            </h3>

            <p className="text-zinc-500 text-sm leading-relaxed">
            {p.desc}
            </p>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-end gap-2">

            <p className="text-amber-400 text-lg tracking-wide">
            {p.price} €
            </p>

            <button className="px-4 py-1.5 border border-amber-500 text-sm rounded-full hover:bg-amber-500/10 transition">
            Lisa
            </button>

        </div>

        </div>

        </div>
        ))}

            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
            <Link to="/tooted"className="px-8 py-3 border border-amber-400 hover:bg-amber-400/10 rounded-full transition">
                Vaata kõiki tooteid →
            </Link>
            </div>

        </div>
        </section>

        {/* EXPERIENCE */}
        <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

            {/* HEADER */}
            <h2 className="text-4xl font-serif text-center mb-4">
            Külastage Atla Distilleryt
            </h2>

            <p className="text-center text-zinc-400 mb-16 max-w-2xl mx-auto leading-relaxed">
            Võimalus kogeda tootmist lähedalt.  
            Näha, kuidas aeg ja tooraine loovad maitse.
            </p>

            {/* GRID */}
            <div className="grid md:grid-cols-2 gap-12">

            {experiences.map((e, i) => (
                <div
                key={i}
                className="group relative rounded-3xl overflow-hidden"
                >

                {/* IMAGE */}
                <div className="h-105 overflow-hidden">
                    <img
                    src={e.image}
                    alt={e.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                    />
                </div>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition"></div>

                {/* TEXT ON IMAGE */}
                <div className="absolute bottom-0 p-8 w-full">

                    <h3 className="text-2xl font-serif mb-2">
                    {e.title}
                    </h3>

                    <p className="text-zinc-300 text-sm mb-4 max-w-sm">
                    {e.desc}
                    </p>

                    <div className="flex items-center justify-between">

                    <p className="text-amber-400">
                        {e.price}
                    </p>

                    <Link to="/tehasetuur"className="px-5 py-2 border border-amber-400 rounded-full text-sm hover:bg-amber-400/10 transition">
                        Loe Täpsemalt
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
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

            {/* IMAGE LEFT */}
            <div className="relative h-105 rounded-2xl overflow-hidden">

            <img
                src = {grupipilt}
                alt="Atla distillery"
                className="w-full h-full object-cover"
            />

            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            </div>

            {/* TEXT RIGHT */}
            <div>

            <h2 className="text-4xl font-serif mb-6">
                Meie lugu
            </h2>

            <p className="text-zinc-400 mb-6 leading-relaxed">
                Kõik saab alguse esimesest sammust.  
                Oma rännakut alustasime 2017. aastal Atla mõisas, kus taastasime
                1905. aastal katkenud viinapõletamise traditsiooni.
            </p>

            <p className="text-zinc-400 mb-6 leading-relaxed">
                Meie kirg on õunasiidrist destilleeritud piiritus, mis küpseb
                tammevaatides aeglaselt – kuni saavutab oma iseloomu.
                Puhtad maitsed. Selge mõte.
            </p>

            <button className="text-amber-400 hover:underline transition">
                Loe rohkem →
            </button>

            </div>

        </div>
        </section>

    </div>
  )
}

export default App