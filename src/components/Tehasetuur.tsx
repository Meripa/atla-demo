import { motion } from "framer-motion"
import ringkaikImg from "../assets/tehasetuur.png"
import kohaleImg from "../assets/sinujuurde.png"
import heroImg from "../assets/tehasetuur1.png"
import taust from '../assets/5.png'

const Tehasetuur = () => {
  return (
    <div className="min-h-screen text-white pt-[120px]">

      {/* HERO */}
      <section className="relative w-full overflow-hidden min-h-[650px] md:min-h-[800px]">

        {/* BACKGROUND */}
      {/* BACKGROUND*/}
      <div className="fixed inset-0 -z-20">
        <img
          src={taust}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 blur-[2px]" />
      </div>
        <div className="absolute inset-0 flex justify-center">
          <div className="w-full max-w-[2000px] h-full relative overflow-hidden">

            <img
              src={heroImg}
              alt="Atla Distillery"
              className="w-full h-full object-cover object-center scale-105"
            />

            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80" />

          </div>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 w-full max-w-[1100px] mx-auto px-6 min-h-[650px] md:min-h-[800px] flex items-center">

          <motion.div
            className="max-w-[600px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <p className="text-xs tracking-[0.3em] uppercase text-[var(--colorSecond)] opacity-80 mb-4">
              Atla Experience
            </p>

            <h4 className="text-4xl md:text-6xl font-serif leading-tight mb-6">
              Koge Atla maailma
            </h4>

            <p className="text-zinc-300 text-lg leading-relaxed max-w-[500px] mb-10">
              Tule avasta, kuidas sünnivad meie joogid <br /> või lase meil tuua see kogemus sinu seltskonnani.
            </p>

            <button className="px-8 py-3 bg-[var(--colorSecond)] text-black rounded-full tracking-widest text-sm uppercase hover:opacity-90 transition">
              Võta ühendust →
            </button>

          </motion.div>

        </div>
      </section>

      {/* INTRO */}
      <section className="py-[100px]">
        <div className="max-w-[700px] mx-auto px-6 text-center">
          <h6 className="text-zinc-400 text-4xl leading-relaxed ">
            Pakume võimalust kogeda Atla maitset kahel moel:
          </h6>
        </div>
      </section>

      {/* OPTIONS */}
      <section>
        <div className="max-w-[1000px] mx-auto px-6 grid md:grid-cols-2 gap-10">

          {[
            {
              title: "Ringkäik Atla Distillerys",
              img: ringkaikImg,
              desc: "Tule meile külla, vaata destilleerimisprotsessi oma silmaga ning saa osa ehtsast käsitööjoogi kogemusest.",
              price: "Alates 250 € / grupp",
              btn: "Uuri Lisa →"
            },
            {
              title: "Tuleme teie juurde",
              img: kohaleImg,
              desc: "Korraldame degustatsiooni või maitseelamuse sinu sündmusel, ettevõttes või privaatsemas seltskonnas.",
              price: "Hind kokkuleppel",
              btn: "Uuri lisa →"
            }
          ].map((item, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl"
            >

              <img
                src={item.img}
                alt={item.title}
                className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/60" />

              <div className="absolute inset-0 flex flex-col justify-end p-8">

                <h3 className="text-2xl md:text-3xl font-serif mb-3">
                  {item.title}
                </h3>

                <p className="text-zinc-300 mb-4 max-w-[400px]">
                  {item.desc}
                </p>

                <p className="text-[var(--colorSecond)] mb-5">
                  {item.price}
                </p>

                <button className="self-start px-6 py-2 border border-[var(--colorSecond)] text-xs tracking-widest uppercase rounded-full hover:bg-[var(--colorSecond)]/10 transition">
                  {item.btn}
                </button>

              </div>

            </motion.div>

          ))}

        </div>
      </section>
    </div>
  )
}

export default Tehasetuur