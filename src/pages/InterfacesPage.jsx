import { Link } from 'react-router-dom'
import './GalleryPage.css'
import './PlaceholderPage.css'

export default function InterfacesPage() {
  return (
    <div className="gallery-page placeholder-page">
      <header className="gallery-header">
        <Link to="/" className="gallery-back">Back</Link>
        <div className="gallery-title-block">
          <span className="section-label">Sites & Interfaces</span>
          <h1 className="gallery-title">Web Design</h1>
          <p className="gallery-subtitle">
            Full-stack builds and UI/UX projects coming soon.
          </p>
        </div>
        <span className="gallery-count" />
      </header>
      <div className="placeholder-body">
        <span className="placeholder-label">Coming Soon</span>
      </div>
    </div>
  )
}
