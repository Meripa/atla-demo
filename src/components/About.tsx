import grupipilt from '../assets/aboutpage/grupipilt.jpg'
import atlamois from '../assets/aboutpage/atlamois.png'
import masin from '../assets/aboutpage/masin.png'
import auhind from '../assets/aboutpage/auhind.png'
import tana from '../assets/aboutpage/tana.jpg'

const About = () => {
  return (
    <div className=" text-white min-h-screen pt-10 px-6">
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black via-[#0b0b0b] to-black" />
      {/* HERO */}
    <section className="relative w-full overflow-hidden min-h-[800px] md:min-h-[850px] flex items-center">

      {/* 🔥 CENTERED BACKGROUND (ei veni lõpmatuseni) */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-full max-w-[2000px] h-full relative overflow-hidden">

          <img
            src={grupipilt}
            alt="Atla distillery"
            className="w-full h-full object-cover object-[center_20%] scale-105"
          />

          {/* dark overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* gradient depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80" />

        </div>
      </div>

      {/* 🧠 CONTENT */}
    <div className="relative z-10 w-full max-w-[500px] mx-auto px-6">

      <div className="text-center md:text-left ">

        {/* heading */}
        <h5 className="text-6xl md:text-6xl font-serif leading-tight tracking-wide">
          Meie lugu
        </h5>

        {/* text */}
        <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-md">
        Traditsioon, aeg ja käsitöö - Atla olemus igas tilgas.
        </p>

        </div>

      </div>
    </section>

    <section className="py-24 ">
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
                <h3 className="text-(--colorSecond-light) mb-3">2017</h3>
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
                <h3 className="text-(--colorSecond-light) mb-3">2018</h3>
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
                <h3 className="text-(--colorSecond-light) mb-3">Kasv ja tunnustus</h3>
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
                <h3 className="text-(--colorSecond-light) mb-3">Täna</h3>
                <p className="text-zinc-400 leading-relaxed">
                    Tegutseme neljas suunas: käsitöönapsud, alkoholivabad joogid,
                    teenustöö teistele tootjatele ja joogikultuuri edendamine.
                    Meie tootmine asub nüüd Jüris,  kus saame luua rohkem ja veelgi mugavamalt
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





      {/* VALUES */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-serif mb-16">
            Meie väärtused
          </h2>

          <div className="grid md:grid-cols-3 gap-12">

            <div className="p-6 bg-zinc-900 rounded-2xl">
              <h3 className="text-xl text-(--colorSecond-light) mb-3">
                Käsitöö
              </h3>
              <p className="text-zinc-400 text-sm">
                Väikesed partiid, maksimaalne kvaliteet.
              </p>
            </div>

            <div className="p-6 bg-zinc-900 rounded-2xl">
              <h3 className="text-xl text-(--colorSecond-light) mb-3">
                Aeg
              </h3>
              <p className="text-zinc-400 text-sm">
                Parim maitse sünnib kannatlikkusest.
              </p>
            </div>

            <div className="p-6 bg-zinc-900 rounded-2xl">
              <h3 className="text-xl text-(--colorSecond-light) mb-3">
                Tooraine
              </h3>
              <p className="text-zinc-400 text-sm">
                Kasutame parimat toorainet.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-serif mb-6">
          Tule ja koge ise
        </h2>

        <p className="text-zinc-400 mb-8">
          Külastage meie destilleerimiskoda ja avastage Atla maailm.
        </p>

        <button className="px-10 py-4 bg-(--colorSecond) text-black rounded-full hover:bg-(--colorSecond-light)">
          Broneeri külastus →
        </button>
      </section>

    </div>
  )
}

export default About