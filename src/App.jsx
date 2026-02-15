import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import PostersPage from './pages/PostersPage'
import AdsPage from './pages/AdsPage'
import InterfacesPage from './pages/InterfacesPage'
import StillsPage from './pages/StillsPage'
import CSHomePage from './cs-pages/CSHomePage'
import CSProjectPage from './cs-pages/CSProjectPage'
import './App.css'

function HomePage() {
  return (
    <div className="transition-root">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posters" element={<PostersPage />} />
        <Route path="/ads" element={<AdsPage />} />
        <Route path="/interfaces" element={<InterfacesPage />} />
        <Route path="/stills" element={<StillsPage />} />
        <Route path="/cs" element={<CSHomePage />} />
        <Route path="/cs/web-apps" element={<CSProjectPage />} />
        <Route path="/cs/ml" element={<CSProjectPage />} />
        <Route path="/cs/systems" element={<CSProjectPage />} />
        <Route path="/cs/open-source" element={<CSProjectPage />} />
      </Routes>
    </BrowserRouter>
  )
}
