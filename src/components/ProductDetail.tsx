import { useParams, Link } from "react-router-dom"
import { products } from "../data/products"

const ProductDetail = () => {
  const { id } = useParams()

  const product = products.find(p => p.id === Number(id))

  if (!product) {
    return <div className="text-white p-20">Toodet ei leitud</div>
  }

  return (
    <div className="bg-zinc-950 text-white min-h-screen pt-32 px-6">

      <div className="max-w-6xl mx-auto">

        {/* BACK */}
        <Link to="/tooted" className="text-amber-400 mb-8 inline-block">
          ← Tagasi toodete juurde
        </Link>

        <div className="grid md:grid-cols-2 gap-12">

          {/* IMAGE */}
          <div className="h-[h-125] overflow-hidden rounded-2xl">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* INFO */}
          <div>
            <h1 className="text-4xl font-serif mb-4">
              {product.name}
            </h1>

            {/* BASIC INFO */}
            <p className="text-zinc-400 mb-2">
              {product.alcohol} • {product.volume}
            </p>

            <p className="text-zinc-500 mb-4">
              SKU: {product.sku}
            </p>

            <p className="mb-6">
              {product.shortDesc}
            </p>

            <p className="text-zinc-400 mb-8">
              {product.description}
            </p>

            {/* PRICE */}
            <p className="text-amber-400 text-2xl mb-8">
              {product.price}€
            </p>

            <button className="px-8 py-3 bg-amber-500 text-black rounded-full hover:bg-amber-400">
              Lisa korvi
            </button>
          </div>

        </div>

        {/* DETAILS SECTION */}
        {product.details && (
          <div className="mt-20 max-w-4xl">

            <h2 className="text-2xl font-serif mb-6">
              Tootekirjeldus
            </h2>

            <div className="grid gap-3 text-zinc-300">

              <p><span className="text-zinc-500">Piirkond:</span> {product.details.piirkond}</p>
              <p><span className="text-zinc-500">Alkohol:</span> {product.details.alkohol}</p>
              <p><span className="text-zinc-500">Maht:</span> {product.details.maht}</p>
              <p><span className="text-zinc-500">Tooraine:</span> {product.details.tooraine}</p>
              <p><span className="text-zinc-500">Värvus:</span> {product.details.varvus}</p>
              <p><span className="text-zinc-500">Aroom:</span> {product.details.aroom}</p>
              <p><span className="text-zinc-500">Maitse:</span> {product.details.maitse}</p>
              <p><span className="text-zinc-500">Toit:</span> {product.details.toit}</p>
              <p><span className="text-zinc-500">Serveerimine:</span> {product.details.serveerimine}</p>
              <p><span className="text-zinc-500">Kokteil:</span> {product.details.kokteil}</p>

            </div>

          </div>
        )}

      </div>

    </div>
  )
}

export default ProductDetail