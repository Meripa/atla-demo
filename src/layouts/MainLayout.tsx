import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ScrollToTop from "../components/ScrollToTop"

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950">
    <ScrollToTop />
    <Navbar />

    <div className="flex-1 pt-24">
        <Outlet />
    </div>

    <Footer />
    </div>
  )
}

export default MainLayout