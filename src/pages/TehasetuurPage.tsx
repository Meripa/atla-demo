import Tehasetuur from '../components/Tehasetuur'
import { motion } from "framer-motion"
const TehasetuurPage = () => {
  return (
    <>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
    <Tehasetuur />
    </motion.div>
    </>
  )
}

export default TehasetuurPage