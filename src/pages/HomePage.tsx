import Hero from '../components/Hero'
import { motion } from "framer-motion"
const HomePage = () => {
  return (
    <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Hero />
    </motion.div>
    </>
  )
}

export default HomePage