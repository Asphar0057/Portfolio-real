import { Link, useLocation } from 'react-router-dom'
import '../pages/GalleryPage.css'

const projectInfo = {
  '/cs/web-apps': { label: 'Full-Stack Projects', title: 'Web Applications' },
  '/cs/ml': { label: 'AI & Data', title: 'Machine Learning' },
  '/cs/systems': { label: 'Backend & Infra', title: 'Systems' },
  '/cs/open-source': { label: 'Community', title: 'Open Source' },
}

export default function CSProjectPage() {
  const { pathname } = useLocation()
  const info = projectInfo[pathname] || { label: 'Projects', title: 'Coming Soon' }

  return (
    <div className="gallery-page">
      <header className="gallery-header">
        <Link to="/cs" className="gallery-back">Back</Link>
        <div className="gallery-title-block">
          <span className="section-label">{info.label}</span>
          <h1 className="gallery-title">{info.title}</h1>
          <p className="gallery-subtitle">
            Project details coming soon. Check back for updates.
          </p>
        </div>
        <span className="gallery-count">0 pieces</span>
      </header>

      <div style={{ padding: '15vh 7vw', textAlign: 'center' }}>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '1rem',
          color: 'rgba(246, 233, 210, 0.4)',
          letterSpacing: '0.1em',
        }}>
          Projects will be added here soon.
        </p>
      </div>
    </div>
  )
}
