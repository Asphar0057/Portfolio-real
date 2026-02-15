import './Hero.css'
import profileImg from '../assets/Profile.png'

const roles = [
  { label: 'Graphic Designer', color: '#C0272D' },
  { label: 'Web Developer',    color: '#12090A' },
  { label: 'Product Designer', color: '#7B2420' },
]

export default function Hero() {
  return (
    <section id="hero" className="hero">

      {/* Portrait — z-index 2, sits on top of text */}
      <img
        src={profileImg}
        alt="Parthav Elangovan"
        className="hero-portrait"
      />

      {/* Text — z-index 1, portrait overlaps from the left */}
      <div className="hero-content">
        <div className="hero-names">
          <h1 className="hero-name">PARTHAV</h1>
          <h1 className="hero-name">ELANGOVAN</h1>
        </div>

        <div className="hero-roles">
          {roles.map((r, i) => (
            <span key={r.label} className="hero-role-group">
              <span className="hero-role" style={{ color: r.color }}>{r.label}</span>
              {i < roles.length - 1 && (
                <span className="hero-role-sep">/</span>
              )}
            </span>
          ))}
        </div>
      </div>

      <div className="hero-footer">
        <a href="#projects" className="hero-scroll">
          <span className="hero-scroll-line" />
          <span>Scroll</span>
        </a>
      </div>

    </section>
  )
}
