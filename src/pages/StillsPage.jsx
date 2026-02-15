import { Link } from 'react-router-dom'
import './GalleryPage.css'

import e1 from '../assets/exp1.jpg'
import e2 from '../assets/exp2.jpg'
import e3 from '../assets/exp3.jpg'
import e4 from '../assets/exp4.jpg'
import e5 from '../assets/exp5.jpg'

const items = [
  { src: e1, alt: 'Experimental 1' },
  { src: e2, alt: 'Experimental 2' },
  { src: e3, alt: 'Experimental 3' },
  { src: e4, alt: 'Experimental 4' },
  { src: e5, alt: 'Experimental 5' },
]

export default function StillsPage() {
  return (
    <div className="gallery-page">
      <header className="gallery-header">
        <Link to="/" className="gallery-back">Back</Link>
        <div className="gallery-title-block">
          <span className="section-label">Personal Work</span>
          <h1 className="gallery-title">Experimental</h1>
          <p className="gallery-subtitle">
            Personal projects, visual experiments, and creative exploration<br />
            where there are no rules, only instinct.
          </p>
        </div>
        <span className="gallery-count">{items.length} pieces</span>
      </header>

      <div className="gallery-grid gallery-grid--posters">
        {items.map((item, i) => (
          <figure className="gallery-item" key={i}>
            <img src={item.src} alt={item.alt} className="gallery-img" />
          </figure>
        ))}
      </div>
    </div>
  )
}
