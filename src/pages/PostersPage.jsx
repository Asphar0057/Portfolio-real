import { Link } from 'react-router-dom'
import './GalleryPage.css'

import p1 from '../assets/Poster 1.png'
import p2 from '../assets/Poster 2.jpg'
import p6 from '../assets/poster 6.jpg'
import p7 from '../assets/poster7.jpg'

const posters = [
  { src: p1, alt: 'Poster 1' },
  { src: p2, alt: 'Poster 2' },
  { src: p6, alt: 'Poster 6' },
  { src: p7, alt: 'Poster 7' },
]

export default function PostersPage() {
  return (
    <div className="gallery-page">
      <header className="gallery-header">
        <Link to="/" className="gallery-back">Back</Link>
        <div className="gallery-title-block">
          <span className="section-label">Print & Layout</span>
          <h1 className="gallery-title">Poster Design</h1>
          <p className="gallery-subtitle">
            Editorial, cultural, and conceptual poster work with each frame<br />
            being a conversation between type, image, and silence.
          </p>
        </div>
        <span className="gallery-count">{posters.length} pieces</span>
      </header>

      <div className="gallery-grid gallery-grid--posters">
        {posters.map((item, i) => (
          <figure className="gallery-item" key={i}>
            <img src={item.src} alt={item.alt} className="gallery-img" />
          </figure>
        ))}
      </div>
    </div>
  )
}
