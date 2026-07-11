import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import SoftwareDevelopment from './pages/SoftwareDevelopment.jsx'
import S360 from './pages/S360.jsx'
import GymGenie from './pages/GymGenie.jsx'
import ERP from './pages/ERP.jsx'
import Consulting from './pages/Consulting.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/software-development" element={<SoftwareDevelopment />} />
          <Route path="/software-development/s360" element={<S360 />} />
          <Route path="/software-development/gym-genie" element={<GymGenie />} />
          <Route path="/software-development/erp" element={<ERP />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
