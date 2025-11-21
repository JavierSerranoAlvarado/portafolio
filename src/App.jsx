import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import NotFound from './pages/NotFound.jsx'
import Cv from './pages/Cv.jsx'
import Fab from './components/Fab.jsx'


function ScrollToHash() {
  const location = useLocation()
  const { pathname, hash, state } = location
  useEffect(() => {
    const targetId = (state && state.scrollTo) || (hash ? hash.replace('#', '') : null)
    if (targetId) {
      const el = document.getElementById(targetId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [pathname, hash, state])
  return null
}

export default function App() {
  return (
    <>
      <Navbar />
      <main className="">
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
     <Fab
        href="https://www.linkedin.com/in/javier-eduardo-serrano-alvarado-033386185/"
        icon="linkedin"
        prefix="fab"
        label="Contactar"
      />  
    </>
  )
}
