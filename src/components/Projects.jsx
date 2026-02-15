import { Link } from 'react-router-dom'
import './Projects.css'

const projects = [
  {
    id: '01',
    title: 'Poster Design',
    category: 'Print & Layout',
    bg: '#C0272D',
    color: '#F2E4C4',
    accent: 'rgba(242,228,196,0.15)',
    href: '/posters',
  },
  {
    id: '02',
    title: 'Advertising Design',
    category: 'Campaigns & Promos',
    bg: '#12090A',
    color: '#F2E4C4',
    accent: 'rgba(242,228,196,0.08)',
    href: '/ads',
  },
  {
    id: '03',
    title: 'Web Design',
    category: 'Sites & Interfaces',
    bg: '#E0C99A',
    color: '#12090A',
    accent: 'rgba(18,9,10,0.08)',
    href: '/interfaces',
  },
  {
    id: '04',
    title: 'Experimental',
    category: 'Personal Work',
    bg: '#5C1A1F',
    color: '#F2E4C4',
    accent: 'rgba(242,228,196,0.1)',
    href: '/stills',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects">

      <div className="projects-header">
        <span className="section-label">Work</span>
        <h2 className="projects-heading">Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((p) => (
          <Link
            to={p.href}
            className="project-card"
            key={p.id}
            style={{ '--card-bg': p.bg, '--card-color': p.color, '--card-accent': p.accent }}
          >
            <div className="card-meta">
              <span className="card-id">{p.id}</span>
            </div>

            <div className="card-body">
              <span className="card-category">{p.category}</span>
              <h3 className="card-title">{p.title}</h3>
            </div>

            <div className="card-hover-overlay">
              <span className="card-view">View Projects</span>
            </div>
          </Link>
        ))}
      </div>

    </section>
  )
}
