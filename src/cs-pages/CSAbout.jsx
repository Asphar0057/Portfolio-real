import { Link } from 'react-router-dom'
import '../components/About.css'
import './cs-theme.css'

const BIO_PARAGRAPHS = [
  `I'm Parthav Elangovan, a Computer Science student specializing in AI & ML. Currently pursuing 
   my Master's at UMass Amherst, I graduated from the University of Texas at Dallas with Major 
   Honors with Distinction in December 2025. I build intelligent systems that solve real problems, 
   from AI-powered platforms to full-stack web applications.`,

  `As the founder of Cerbyl, I architected and shipped a complete AI learning platform with
   multi-agent RAG architecture, Dockerized infrastructure, and production AWS deployments.
   I approach engineering with a systems mindset, prioritizing scalable architecture, clean code, 
   and meticulous attention to detail.`,
]

const education = [
  {
    degree: 'M.S. Computer Science',
    school: 'UMass Amherst',
    honors: null,
    status: 'Jan 2026 — May 2027',
  },
  {
    degree: 'B.S. Computer Science',
    school: 'University of Texas at Dallas',
    honors: 'Major Honors with Distinction',
    status: 'Aug 2023 — Dec 2025',
  },
]

const skillCategories = [
  {
    title: 'Languages',
    items: [
      'Python', 'Java', 'C++', 'JavaScript',
      'TypeScript', 'HTML', 'CSS', 'SQL',
    ],
    note: 'Proficient across compiled and interpreted languages',
  },
  {
    title: 'Frameworks',
    items: [
      'React', 'React Native (Expo)', 'Node.js',
      'FastAPI', 'Vite', 'NumPy', 'scikit-learn',
    ],
    note: 'Full-stack development with modern tooling',
  },
  {
    title: 'Infrastructure',
    items: [
      'Docker', 'Git', 'Linux', 'PostgreSQL',
      'MySQL', 'Firebase', 'AWS', 'Neo4j', 'Nginx',
    ],
    note: 'Cloud deployment, databases, and DevOps',
  },
  {
    title: 'Concepts',
    items: [
      'Advanced Algorithms', 'Machine Learning', 'Artificial Intelligence',
      'Operating Systems', 'Optimization', 'Biocomputation',
    ],
    note: 'Strong CS fundamentals and engineering practices',
  },
]

export default function CSAbout() {
  return (
    <section id="about" className="about">
      <div className="about-header">
        <span className="section-label">About</span>
        <h2 className="about-heading">
          Code meets craft <br />
          <em>where logic becomes product.</em>
        </h2>
      </div>

      <div className="about-body">
        <div className="about-bio">
          {BIO_PARAGRAPHS.map((p, i) => (
            <p key={i} className="about-para">{p}</p>
          ))}
          <p className="about-para">
            Currently exploring multimodal AI research at Ng's Labs while continuing to
            build products that bridge cutting-edge technology and intuitive user experience.
            Design has always been a parallel passion of mine — I've spent years crafting
            visuals for clients and personal projects, which you can see in
            my <Link to="/" className="about-inline-link">graphic design portfolio</Link>.
          </p>
          <a href="#contact" className="about-cta">
            Get in touch
          </a>
        </div>

        <div className="about-education">
          <p className="edu-eyebrow">Education</p>
          {education.map((e) => (
            <div className="edu-item" key={e.degree}>
              <span className="edu-degree">{e.degree}</span>
              <span className="edu-school">{e.school}</span>
              {e.honors && <span className="edu-honors">{e.honors}</span>}
              <span className="edu-status">{e.status}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-section">
        <p className="skills-eyebrow section-label">Expertise</p>
        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div className="skill-card" key={cat.title}>
              <h4 className="skill-card-title">{cat.title}</h4>
              <p className="skill-card-note">{cat.note}</p>
              <ul className="skill-tags">
                {cat.items.map((item) => (
                  <li className="skill-tag" key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
