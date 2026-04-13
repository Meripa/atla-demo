import { products } from "../data/products"
import { Link } from "react-router-dom"

const ProductsPage = () => {
  return (
    <div className="bg-zinc-950 text-white min-h-screen ">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514361892635-cebb6b43c7f0')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-zinc-950/80 to-zinc-950"></div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
          <p className="text-amber-400 uppercase tracking-[0.25em] text-sm mb-4">
            Atla Distillery
          </p>

          <h1 className="text-5xl md:text-6xl font-serif mb-6">
            Meie tooted
          </h1>

          <p className="text-zinc-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Iga jook on loodud aeglaselt ja hoolikalt, et tuua esile puhtad maitsed,
            kohalik tooraine ja Atla iseloom.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          {products.map((p) => (
            <article
              key={p.id}
              className="group rounded-3xl overflow-hidden bg-zinc-900/90 border border-zinc-800 hover:border-amber-400/40 transition duration-300 hover:-translate-y-1"
            >
              {/* IMAGE */}
              <Link to={`/tooted/${p.id}`} className="block">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <span className="text-sm uppercase tracking-wider text-zinc-200">
                      Käsitööjook
                    </span>

                    <span className="opacity-0 group-hover:opacity-100 transition text-sm text-white border border-white/60 px-3 py-1 rounded-full backdrop-blur-sm">
                      Vaata lähemalt
                    </span>
                  </div>
                </div>
              </Link>

              {/* CONTENT */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-2xl font-serif leading-tight">
                    {p.name}
                  </h3>

                  <p className="text-amber-400 font-semibold whitespace-nowrap">
                    {p.price}€
                  </p>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mb-6 min-h-12">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link
                    to={`/tooted/${p.id}`}
                    className="px-4 py-2 border border-amber-400 text-sm rounded-full hover:bg-amber-400/10 transition"
                  >
                    Vaata toodet →
                  </Link>

                  <button className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black text-sm rounded-full transition">
                    Lisa korvi
                  </button>
                </div>
              </div>
            </article>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-800 bg-black">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-serif mb-5">
            Ei leidnud sobivat toodet?
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
            Võta meiega ühendust ja aitame leida just sinu maitsele sobiva joogi
            või teeme pakkumise suuremale tellimusele.
          </p>

          <Link
            to="/kontakt"
            className="inline-flex px-8 py-3 bg-amber-500 text-black rounded-full hover:bg-amber-400 transition"
          >
            Võta ühendust →
          </Link>
        </div>
      </section>

    </div>
  )
}

export default ProductsPage