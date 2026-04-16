import Contact from '../components/Contact'
import { motion } from "framer-motion"
const ContactPage = () => {
  return (
    <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Contact />
    </motion.div>
    </>
  )
}

export default ContactPage