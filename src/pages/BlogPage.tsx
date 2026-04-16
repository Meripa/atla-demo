import Blog from '../components/Blog'
import { motion } from "framer-motion"
const BlogPage = () => {
  return (
    <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Blog />
    </motion.div>
    </>
  )
}

export default BlogPage