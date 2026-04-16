import Cocktails from '../components/Cocktails'
import { motion } from "framer-motion"
const CocktailsPage = () => {
  return (
    <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Cocktails />
    </motion.div>
    </>
  )
}

export default CocktailsPage