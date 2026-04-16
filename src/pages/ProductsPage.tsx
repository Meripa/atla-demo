import Products from '../components/Products'
import { motion } from "framer-motion"
const ProductsPage = () => {
  return (
    <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Products />
    </motion.div>
    </>
  )
}

export default ProductsPage