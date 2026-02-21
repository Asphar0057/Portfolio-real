import { Link } from 'react-router-dom'
import './GalleryPage.css'

import p1 from '../assets/Poster 1.png'
import p2 from '../assets/Poster 2.jpg'
import p3a from '../assets/Poster3 (1).jpg'
import p3b from '../assets/Poster3 (2).jpg'
import p3c from '../assets/Poster3 (3).jpg'
import p4a from '../assets/Poster4 (1).jpg'
import p4b from '../assets/Poster4 (2).jpg'
import p4c from '../assets/Poster4 (3).jpg'
import p6 from '../assets/poster 6.jpg'
import p7 from '../assets/poster7.jpg'

const posters = [
  { src: p1, alt: 'Poster 1' },
  { src: p2, alt: 'Poster 2' },
  { src: p3a, alt: 'Poster 3 (1)' },
  { src: p3b, alt: 'Poster 3 (2)' },
  { src: p3c, alt: 'Poster 3 (3)' },
  { src: p4a, alt: 'Poster 4 (1)' },
  { src: p4b, alt: 'Poster 4 (2)' },
  { src: p4c, alt: 'Poster 4 (3)' },
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
