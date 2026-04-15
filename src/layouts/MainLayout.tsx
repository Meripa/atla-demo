import { Outlet, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ScrollToTop from "../components/ScrollToTop"

const MainLayout = () => {
  const location = useLocation()

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />

      <div className="flex-1 pt-24">
        <AnimatePresence 
          mode="wait"           // "wait" annab puhtama transitioni
          initial={false}
        >
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}     // algne seisund
            animate={{ opacity: 1, y: 0 }}      // lõplik seisund
            exit={{ opacity: 0, y: -10 }}       // väljumine
            transition={{ 
              duration: 0.4, 
              ease: "easeInOut" 
            }}
            style={{ opacity: 1 }}              // väldib flashi
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  )
}

export default MainLayout