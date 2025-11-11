import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import NotFound from './pages/NotFound.jsx'
import Cv from './pages/Cv.jsx'
import Fab from './components/Fab.jsx'


export default function App() {
  return (
    <>
      <Navbar />
      <main className="container-fluid py-5">
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
