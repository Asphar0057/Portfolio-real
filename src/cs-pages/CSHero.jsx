import '../components/Hero.css'
import './cs-theme.css'

const roles = [
  { label: 'Software Engineer', color: '#C0272D' },
  { label: 'Full-Stack Developer', color: 'rgba(246, 233, 210, 0.6)' },
  { label: 'Problem Solver', color: 'rgba(246, 233, 210, 0.35)' },
]

export default function CSHero() {
  return (
    <section id="hero" className="hero cs-hero">
      <div className="hero-content cs-hero-content">
        <div className="hero-names">
          <h1 className="hero-name cs-name">PARTHAV</h1>
          <h1 className="hero-name cs-name">ELANGOVAN</h1>
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
        <a href="#about" className="hero-scroll">
          <span className="hero-scroll-line" />
          <span>Scroll</span>
        </a>
      </div>
    </section>
  )
}
