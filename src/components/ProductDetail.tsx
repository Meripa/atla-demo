import { useParams, Link } from "react-router-dom"
import { products } from "../data/products"

const ProductDetail = () => {
  const { id } = useParams()

  const product = products.find(p => p.id === Number(id))

  if (!product) {
    return <div className="text-white p-20">Product not found</div>
  }

  return (
    <div className="bg-zinc-950 text-white min-h-screen pt-32 px-6">

      <div className="max-w-6xl mx-auto">

        {/* BACK */}
        <Link to="/tooted" className="text-(--colorSecond) mb-8 inline-block">
          ← Back to products
        </Link>

        <div className="grid md:grid-cols-2 gap-12">

          {/* IMAGE */}
          <div className="h-125 overflow-hidden rounded-2xl">
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
              {product.flavor} • {product.size}
            </p>

            <p className="text-zinc-500 mb-4">
              Product ID: {product.sku}
            </p>

            <p className="mb-6">
              {product.shortDesc}
            </p>

            <p className="text-zinc-400 mb-8">
              {product.description}
            </p>

            {/* PRICE */}
            <p className="text-(--colorSecond) text-2xl mb-8">
              {product.price}€
            </p>

            <button className="px-8 py-3 bg-(--colorSecond) text-black rounded-full hover:opacity-90">
              Add to cart
            </button>
          </div>

        </div>

        {/* DETAILS SECTION */}
        {product.details && (
          <div className="mt-20 max-w-4xl">

            <h2 className="text-2xl font-serif mb-6">
              Product Details
            </h2>

            <div className="grid gap-3 text-zinc-300">

              <p><span className="text-zinc-500">Purpose:</span> {product.details.purpose}</p>
              <p><span className="text-zinc-500">Electrolytes:</span> {product.details.electrolytes}</p>
              <p><span className="text-zinc-500">Caffeine:</span> {product.details.caffeine}</p>
              <p><span className="text-zinc-500">Sugar:</span> {product.details.sugar}</p>
              <p><span className="text-zinc-500">Ingredients:</span> {product.details.ingredients}</p>
              <p><span className="text-zinc-500">Flavor:</span> {product.details.flavor}</p>
              <p><span className="text-zinc-500">Usage:</span> {product.details.usage}</p>
              <p><span className="text-zinc-500">Best for:</span> {product.details.bestFor}</p>

            </div>

          </div>
        )}

      </div>

    </div>
  )
}

export default ProductDetail