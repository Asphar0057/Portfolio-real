import { useState, useEffect } from 'react'
import { useSlideTransition } from '../components/PageTransition'
import '../components/Navbar.css'
import './cs-theme.css'

export default function CSNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const { trigger, overlay } = useSlideTransition('/', 'left')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className={`navbar cs-navbar${scrolled ? ' scrolled' : ''}`}>
        <a href="#hero" className="nav-brand">PE</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><button onClick={trigger} className="nav-switch">Design Portfolio</button></li>
        </ul>
      </nav>
      {overlay}
    </>
  )
}
