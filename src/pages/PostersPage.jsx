import { Link } from 'react-router-dom'
import './GalleryPage.css'

import p1 from '../assets/Poster 1.png'
import p2 from '../assets/Poster 2.jpg'
import p3 from '../assets/Poster 3.jpg'
import p4 from '../assets/Poster 4.jpg'
import p5 from '../assets/Poster 5.jpg'

const posters = [
  { src: p1, alt: 'Poster 1' },
  { src: p2, alt: 'Poster 2' },
  { src: p3, alt: 'Poster 3' },
  { src: p4, alt: 'Poster 4' },
  { src: p5, alt: 'Poster 5' },
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
