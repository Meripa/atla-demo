import About from '../components/About'
import { motion } from "framer-motion"
const AboutPage = () => {
  return (
    <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <About />
    </motion.div>
    </>
  )
}

export default AboutPage