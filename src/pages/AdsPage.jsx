import { Link } from 'react-router-dom'
import './GalleryPage.css'

import a1 from '../assets/Ad 1.jpg'
import a2 from '../assets/Ad 2.png'
import a3 from '../assets/AD 3.jpg'
import a4 from '../assets/Ad 4.jpg'
import a5 from '../assets/Ad 5.jpg'

const ads = [
  { src: a1, alt: 'Campaign 1' },
  { src: a2, alt: 'Campaign 2' },
  { src: a3, alt: 'Campaign 3' },
  { src: a4, alt: 'Campaign 4' },
  { src: a5, alt: 'Campaign 5' },
]

export default function AdsPage() {
  return (
    <div className="gallery-page">
      <header className="gallery-header">
        <Link to="/" className="gallery-back">Back</Link>
        <div className="gallery-title-block">
          <span className="section-label">Campaigns & Promos</span>
          <h1 className="gallery-title">Advertising Design</h1>
          <p className="gallery-subtitle">
            Commercial visuals built for impact — product launches,<br />
            brand awareness, and narratives that sell without shouting.
          </p>
        </div>
        <span className="gallery-count">{ads.length} pieces</span>
      </header>

      <div className="gallery-grid gallery-grid--ads">
        {ads.map((item, i) => (
          <figure className="gallery-item" key={i}>
            <img src={item.src} alt={item.alt} className="gallery-img" />
          </figure>
        ))}
      </div>
    </div>
  )
}
