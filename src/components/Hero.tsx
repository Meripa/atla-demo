import {Link} from 'react-router-dom'
import Meiekirg from '../assets/Meiekirg.jpg'


{/* Pildid */}
import logo from '../assets/logo.png'

function App() {

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      

      {/* HERO */}
      <section className="min-h-screen flex items-center relative">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34b4')] bg-cover bg-center"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
            <div className="mb-2 flex justify-center">
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

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 px-6">
            <p className='text-orange-400' style={{ fontFamily: "Vivaldi, cursive" }} >"Meie Kirg on põletada <br></br>loodusandidest imelisi jooke."</p>
        </div>
        </section>

    <section className="py-32 bg-black text-center">
        <h2 className="text-4xl md:text-6xl font-serif text-zinc-200 max-w-4xl mx-auto leading-tight">
           "MEIE KIRG ON PÕLETADA <br />
            <span className="text-amber-400">
            LOODUSANDIDEST IMELISI JOOKE"
            </span>
        </h2>
        </section>

      {/* PRODUCTS */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-center mb-4">MEIE KIRG ON PÕLETADA LOODUSANDIDEST
IMELISI JOOKE</h2>
          <p className="text-center text-zinc-400 mb-12 max-w-2xl mx-auto">
            

Kompromissitu usk erakordsesse on alati olnud meie veendumus. See on andnud meile tõuke teha asju omal moel algusest peale. See on suhtumine, mis avaldub igas meie joogis.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { name: "Õunabrändi", desc: "Värske ja puuviljane, Eesti õuntest.", price: "xx€" },
              { name: "Ploomibrändi", desc: "Rikkalik ja sügav maitse.", price: "xx€" },
              { name: "Tammevaadi eriseeria", desc: "Laagerdunud tammes, kompleksne.", price: "xx€" }
            ].map((p, i) => (
              <div key={i} className="bg-zinc-900 rounded-2xl overflow-hidden hover:scale-105 transition">
                <div className="h-64 flex items-center justify-center bg-zinc-900">
                  <img 
                    src={logo} 
                    alt="Product" 
                    className="h-32 opacity-70 hover:opacity-100 transition duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl mb-2">{p.name}</h3>
                  <p className="text-zinc-400 text-sm mb-4">{p.desc}</p>
                  <p className="text-amber-400 font-medium">{p.price}</p>
                </div>
                
              </div>
              
            ))}
            <div className="mt-12 text-center">
              <button className="px-8 py-3 border border-amber-400 hover:bg-amber-400/10 rounded-full transition center" >
                Vaata kõiki tooteid →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-center mb-4">Külastage Atla Distilleryt</h2>
          <p className="text-center text-zinc-400 mb-12 max-w-2xl mx-auto">
            Oma keel on kuningas!

            Pakume suurepärast võimalust tutvuda meie tootmise, mõttelaadi ja toodetega. Erakordne võimalus nautida oma silmaga destilleerimisseadme tööd.

            ​

            Grupihind 250 €, maksimaalselt 12 külastajat, suuremad seltskonnad erikokkuleppel

            Degusteerimisel pakume meie kümmet napsu + uudisloome

            Napsu kõrvale pakume suupisteid


          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-zinc-950 rounded-3xl overflow-hidden">
              <div className="h-80 bg-zinc-800 flex items-center justify-center text-6xl">Img</div>
              <div className="p-8">
                <h3 className="text-2xl mb-3">Klassikaline ringkäik</h3>
                <p className="text-zinc-400 mb-6">1,5h ekskursioon + tutvustus.</p>
                <p className="text-amber-400 font-medium">45 € / inimene</p>
              </div>
            </div>

            <div className="bg-zinc-950 rounded-3xl overflow-hidden">
              <div className="h-80 bg-zinc-800 flex items-center justify-center text-6xl">Img</div>
              <div className="p-8">
                <h3 className="text-2xl mb-3">Premium degusteerimine</h3>
                <p className="text-zinc-400 mb-6">5 joogi degusteerimine sommeljeega.</p>
                <p className="text-amber-400 font-medium">75 € / inimene</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="h-80 bg-zinc-800 rounded-2xl"></div>

          <div>
            <h2 className="text-4xl font-serif mb-6">Meie lugu</h2>
            <p className="text-zinc-400 mb-6">
Kõik saab alguse esimesest sammust. Oma rännakut unistuste ja maitsete maale alustasime 2017 aastal Atla mõisas, kus taastasime 1905. aastal katkenud viinapõletamise traditsiooni. Meie kirg on õunasiidrist õunapiirituse destilleerimine, edasi laseme joogil tammevaatides küpseda tippklassi maitsebuketiga õunabrändiks ja naudime kõik koos seda imelist tulemust. Armastame puhtaid, selgeid maitseid.
            </p>
            <p className="text-zinc-400 mb-6">
              Põhjaliku vaagimse järel otsustasime viinaköögi sisseseade tellida Saksa ühelt tuntuimalt firmalt Müller Brennereianlagen GmbH.
            </p>
            <button className="text-amber-400">Loe rohkem →</button>
          </div>
        </div>
      </section>
    {/*
      {/* VALUES
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif mb-12">Miks valida Atla</h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-xl mb-2 text-amber-400">Kohalik tooraine</h3>
              <p className="text-zinc-400 text-sm">Eesti viljad ja kvaliteet.</p>
            </div>

            <div>
              <h3 className="text-xl mb-2 text-amber-400">Aeglane protsess</h3>
              <p className="text-zinc-400 text-sm">Kvaliteet võtab aega.</p>
            </div>

            <div>
              <h3 className="text-xl mb-2 text-amber-400">Käsitöö</h3>
              <p className="text-zinc-400 text-sm">Väikesed partiid, suur kvaliteet.</p>
            </div>
          </div>
        </div>
      </section>
       */}



    </div>
  )
}

export default App