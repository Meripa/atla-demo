import grupipilt from '../assets/aboutpage/grupipilt.jpg'
import atlamois from '../assets/aboutpage/atlamois.png'
import masin from '../assets/aboutpage/masin.png'
import auhind from '../assets/aboutpage/auhind.png'
import tana from '../assets/aboutpage/tana.jpg'

const AboutPage = () => {
  return (
    <div className="bg-zinc-950 text-white min-h-screen ">

      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center text-center">
        <div className="absolute inset-0">
            <img
            src={grupipilt}
            alt="Atla distillery"
            className="w-full h-full object-cover object-[center_20%]"
            />
        </div>
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">
            Meie lugu
          </h1>
          <p className="text-zinc-300 max-w-xl mx-auto text-lg">
            Traditsioon, aeg ja käsitöö – Atla olemus igas tilgas.
          </p>
        </div>
      </section>

    <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-4xl font-serif text-center mb-20">
            Meie teekond
            </h2>

            <div className="space-y-24">

            {/* 2017 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="h-100 rounded-2xl overflow-hidden">
                <img
                    src={atlamois}
                    className="w-full h-full object-cover"
                />
                </div>

                <div>
                <h3 className="text-amber-400 mb-3">2017</h3>
                <p className="text-zinc-400 leading-relaxed">
                    Kõik sai alguse Atla mõisas, kus taastasime 1905. aastal katkenud
                    viinapõletamise traditsiooni. Meie kirg on õunasiidrist
                    õunapiirituse destilleerimine ja selle küpsemine tammevaatides
                    tipptasemel õunabrändiks.
                </p>
                </div>
            </div>

            {/* 2018 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                <h3 className="text-amber-400 mb-3">2018</h3>
                <p className="text-zinc-400 leading-relaxed">
                    Saime tegevusloa ning alustasime ametlikult tootmist.
                    Meie destillaator valmis koostöös Saksamaa tootjaga
                    Müller Brennereianlagen GmbH ning pandi Atlas tööle
                    isiklikult tootja poolt.
                </p>
                </div>

                <div className="h-100 rounded-2xl overflow-hidden order-1 md:order-2">
                <img
                    src={masin}
                    className="w-full h-full object-cover"
                />
                </div>
            </div>

            {/* GROWTH */}
            <div className="grid md:grid-cols-2 gap-12 items-center ">
                <div className="h-100 rounded-2xl overflow-hidden ">
                <img
                    src={auhind}
                    className="w-full h-full object-cover object-[center_20%]"
                />
                </div>

                <div>
                <h3 className="text-amber-400 mb-3">Kasv ja tunnustus</h3>
                <p className="text-zinc-400 leading-relaxed">
                    Meie tooted on võitnud auhindu Berliinis, Londonis ja USA-s.
                    2019. aastal tõime Berliinist pronksi, 2020. aastal juba hõbedad
                    ja rahvusvahelise tunnustuse.
                </p>
                </div>
            </div>

            {/* TODAY */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                <h3 className="text-amber-400 mb-3">Täna</h3>
                <p className="text-zinc-400 leading-relaxed">
                    Tegutseme neljas suunas: käsitöönapsud, alkoholivabad joogid,
                    teenustöö teistele tootjatele ja joogikultuuri edendamine.
                    Meie tootmine asub nüüd Jüris, kus saame luua rohkem ja paremini.
                </p>
                </div>

                <div className="h-100 rounded-2xl overflow-hidden order-1 md:order-2">
                <img
                    src={tana}
                    className="w-full h-full object-cover"
                />
                </div>
            </div>

            </div>

        </div>
        </section>

      {/* STORY SPLIT */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="h-112.5 rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1514361892635-cebb6b43c7f0"
              className="w-full h-full object-cover"
            />
          </div>

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-serif mb-6">
              Algus
            </h2>

            <p className="text-zinc-400 leading-relaxed mb-6">
              Meie teekond algas 2017. aastal Atla mõisas,
              kus taaselustasime 1905. aastal katkenud
              destilleerimise traditsiooni.
            </p>

            <p className="text-zinc-400 leading-relaxed">
              Iga jook on loodud kannatlikkuse ja austusega
              tooraine vastu - see on meie filosoofia.
            </p>
          </div>

        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-4xl font-serif text-center mb-16">
            Meie teekond
          </h2>

          <div className="space-y-10">

            <div className="border-l border-amber-400 pl-6">
              <h3 className="text-amber-400">2017</h3>
              <p className="text-zinc-400">
                Alustasime Atla mõisas destilleerimisega.
              </p>
            </div>

            <div className="border-l border-amber-400 pl-6">
              <h3 className="text-amber-400">2019</h3>
              <p className="text-zinc-400">
                Esimesed tooted jõudsid turule.
              </p>
            </div>

            <div className="border-l border-amber-400 pl-6">
              <h3 className="text-amber-400">Täna</h3>
              <p className="text-zinc-400">
                Arendame pidevalt uusi maitseid ja kogemusi.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-serif mb-16">
            Meie väärtused
          </h2>

          <div className="grid md:grid-cols-3 gap-12">

            <div className="p-6 bg-zinc-900 rounded-2xl">
              <h3 className="text-xl text-amber-400 mb-3">
                Käsitöö
              </h3>
              <p className="text-zinc-400 text-sm">
                Väikesed partiid, maksimaalne kvaliteet.
              </p>
            </div>

            <div className="p-6 bg-zinc-900 rounded-2xl">
              <h3 className="text-xl text-amber-400 mb-3">
                Aeg
              </h3>
              <p className="text-zinc-400 text-sm">
                Parim maitse sünnib kannatlikkusest.
              </p>
            </div>

            <div className="p-6 bg-zinc-900 rounded-2xl">
              <h3 className="text-xl text-amber-400 mb-3">
                Tooraine
              </h3>
              <p className="text-zinc-400 text-sm">
                Kasutame Eesti parimat toorainet.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* QUOTE */}
      <section className="py-24 bg-black text-center px-6">
        <p className="text-2xl font-serif max-w-2xl mx-auto text-zinc-300">
          “Hea jook ei sünni kiirustades.”
        </p>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-serif mb-6">
          Tule ja koge ise
        </h2>

        <p className="text-zinc-400 mb-8">
          Külastage meie destilleerimiskoda ja avastage Atla maailm.
        </p>

        <button className="px-10 py-4 bg-amber-500 text-black rounded-full hover:bg-amber-400">
          Broneeri külastus →
        </button>
      </section>

    </div>
  )
}

export default AboutPage