import { Link } from 'react-router-dom'
import './GalleryPage.css'

import wd1 from '../assets/WD1.png'
import wd2 from '../assets/WD2.png'
import wd3 from '../assets/WD3.png'
import wd4 from '../assets/WD4.png'
import wd5 from '../assets/wd5.png'
import wd6 from '../assets/wd6.png'
import wd7 from '../assets/wd7.png'
import wd8 from '../assets/wd8.png'
import wd9 from '../assets/wd9.png'

const webDesigns = [
  { src: wd1, alt: 'Web Design 1' },
  { src: wd2, alt: 'Web Design 2' },
  { src: wd3, alt: 'Web Design 3' },
  { src: wd4, alt: 'Web Design 4' },
  { src: wd5, alt: 'Web Design 5' },
  { src: wd6, alt: 'Web Design 6' },
  { src: wd7, alt: 'Web Design 7' },
  { src: wd8, alt: 'Web Design 8' },
  { src: wd9, alt: 'Web Design 9' },
]

export default function InterfacesPage() {
  return (
    <div className="gallery-page">
      <header className="gallery-header">
        <Link to="/" className="gallery-back">Back</Link>
        <div className="gallery-title-block">
          <span className="section-label">Sites & Interfaces</span>
          <h1 className="gallery-title">Web Design</h1>
          <p className="gallery-subtitle">
            Full-stack builds and UI/UX projects. Clean interfaces,<br />
            thoughtful interactions, and design systems that scale.
          </p>
        </div>
        <span className="gallery-count">{webDesigns.length} pieces</span>
      </header>

      <div className="gallery-grid gallery-grid--ads">
        {webDesigns.map((item, i) => (
          <figure className="gallery-item" key={i}>
            <img src={item.src} alt={item.alt} className="gallery-img" />
          </figure>
        ))}
      </div>
    </div>
  )
}
