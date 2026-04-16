import ProductsDetail from '../components/ProductDetail'
import { motion } from "framer-motion"
const ProductPage = () => {
  return (
    <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <ProductsDetail />
    </motion.div>
    </>
  )
}

export default ProductPage