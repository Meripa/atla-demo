import Products from '../components/Products'
import { motion } from "framer-motion"
const ProductPage = () => {
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

export default ProductPage