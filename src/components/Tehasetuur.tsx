import ringkaikImg from "../assets/tehasetuur.png"
import kohaleImg from "../assets/sinujuurde.png"
import heroImg from '../assets/logo.png'

const Tehasetuur = () => {
  return (
    <div className="bg-zinc-950 text-white min-h-screen pt-32">
      {/* HERO */}
      <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Atla Distillery külastus"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">
            Koge Atla maailma
          </h1>
          <p className="text-zinc-300 max-w-xl mx-auto mb-10 text-lg">
            Vali, kas tuled meile külla või toome maitseelamuse sinu seltskonnani.
          </p>

          <button className="px-8 py-3 bg-(--colorSecond) text-black rounded-full hover:bg-(--colorSecond-light) transition">
            Võta ühendust →
          </button>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 px-6 text-center max-w-3xl mx-auto">
        <p className="text-zinc-400 leading-relaxed text-lg">
          Pakume võimalust tutvuda meie toodete, mõttelaadi ja maitsetega
          kahel moel — kas Atla Distillerys kohapeal või sinu enda valitud asukohas.
        </p>
      </section>

      {/* OPTIONS */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* RINGKÄIK */}
          <div className="bg-zinc-900 rounded-3xl overflow-hidden group hover:scale-[1.02] transition duration-300">
            <div className="relative h-105 overflow-hidden">
              <img
                src={ringkaikImg}
                alt="Ringkäik Atla Distillerys"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/45"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-3xl font-serif mb-3">Ringkäik Atla Distillerys</h3>
                <p className="text-zinc-200 mb-4 max-w-md">
                  Tule meile külla, vaata destilleerimisprotsessi oma silmaga ning
                  saa osa ehtsast käsitööjoogi kogemusest.
                </p>
                <p className="text-(--colorSecond-light) font-medium mb-5">
                  Alates 250 € / grupp
                </p>

                <button className="self-start px-6 py-3 border border-(--colorSecond-light) rounded-full hover:bg-(--colorSecond-light)/10 transition">
                  Broneeri ringkäik →
                </button>
              </div>
            </div>
          </div>

          {/* TULEME TEIE JUURDE */}
          <div className="bg-zinc-900 rounded-3xl overflow-hidden group hover:scale-[1.02] transition duration-300 border border-(--colorSecond-light)/20">
            <div className="relative h-105 overflow-hidden">
              <img
                src={kohaleImg}
                alt="Atla tuleb teie juurde"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/50"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-3xl font-serif mb-3">Tuleme teie juurde</h3>
                <p className="text-zinc-200 mb-4 max-w-md">
                  Korraldame degustatsiooni või maitseelamuse sinu sündmusel,
                  ettevõttes või privaatsemas seltskonnas.
                </p>
                <p className="text-(--colorSecond-light) font-medium mb-5">
                  Hind kokkuleppel
                </p>

                <button className="self-start px-6 py-3 bg-(--colorSecond) text-black rounded-full hover:bg-(--colorSecond-light) transition">
                  Küsi pakkumist →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXTRA INFO */}
      <section className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif mb-6">
            Elamus, mis jääb meelde
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Olgu selleks külastus meie juurde või Atla maitsete toomine teie seltskonda —
            eesmärk on alati sama: pakkuda erilist, kvaliteetset ja meeldejäävat kogemust.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-serif mb-6">
          Võta meiega ühendust
        </h2>

        <p className="text-zinc-400 mb-8">
          Leiame koos sobiva lahenduse sinu seltskonnale või sündmusele.
        </p>

        <button className="px-10 py-4 bg-(--colorSecond) text-black rounded-full text-lg hover:bg-(--colorSecond-light) transition">
          Kirjuta meile →
        </button>
      </section>
    </div>
  )
}

export default Tehasetuur