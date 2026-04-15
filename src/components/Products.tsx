import { products } from "../data/products"
import { Link } from "react-router-dom"

const ProductsPage = () => {
  return (
    <div className=" text-white min-h-screen pt-32 px-6">

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-24">
        <h1 className="text-5xl md:text-6xl font-serif mb-6 tracking-wide">
          Meie joogid
        </h1>

        <p className="text-zinc-400 leading-relaxed max-w-xl mx-auto">
          Liisi, anna siia teksti palun
           Aitäh :D
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">

        {products.map((p) => (
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
        <div className="px-5 py-4 flex flex-col gap-4">

        {/* NAME TOP */}
        <h4 className="text-lg font-serif tracking-wide">
            {p.name}
        </h4>

        {/* BOTTOM ROW */}
        <div className="flex justify-between items-start gap-4">

            {/* LEFT (DESC) */}
            <p className="text-zinc-500 text-sm leading-relaxed w-[65%] line-clamp-2">
            {p.desc}
            </p>

            {/* RIGHT (PRICE + BUTTON) */}
            <div className="flex flex-col items-end gap-2 w-[35%]">

            <p className="text-amber-400 text-lg tracking-wide">
                {p.price} €
            </p>

            <button className="px-4 py-1.5 border border-amber-500 text-sm rounded-full hover:bg-amber-500/10 transition">
                Lisa
            </button>

            </div>

        </div>

        </div>

        </div>
        ))}

      </div>

    </div>
  )
}

export default ProductsPage