import { Link } from 'react-router-dom'
import './About.css'

const BIO_PARAGRAPHS = [
  `I'm Parthav Elangovan, a Computer Science graduate from the University of Texas at Dallas
   (Major Honors with Distinction, December 2025), now pursuing my Master's at UMass Amherst.
   My lifelong passion for creative design began early: I spent countless hours building personal
   projects, crafting short films, and designing posters that brought my imagination to life.`,

  `As my skills evolved, I began working with clients, helping them transform their visions into
   compelling visual narratives. That journey naturally expanded into web development, where I
   discovered how to fuse creative expertise with technical depth by building digital experiences
   where art direction and engineering speak the same language.`,
]

const education = [
  {
    degree: 'B.S. Computer Science',
    school: 'University of Texas at Dallas',
    honors: 'Major Honors with Distinction',
    status: 'December 2025',
  },
  {
    degree: 'M.S. Computer Science',
    school: 'UMass Amherst',
    honors: null,
    status: 'In Progress',
  },
]

const skillCategories = [
  {
    title: 'Adobe Creative Suite',
    items: [
      'Photoshop', 'Illustrator', 'After Effects',
      'Premiere Pro', 'InDesign', 'Lightroom',
    ],
    note: 'Advanced photo manipulation, vector graphics, motion, video editing & color',
  },
  {
    title: 'Development',
    items: [
      'React.js', 'Node.js', 'TypeScript', 'JavaScript',
      'HTML / CSS', 'Python', 'Java', 'C++',
      'Firebase', 'Express.js',
    ],
    note: 'Full-stack engineering, API integration, database architecture',
  },
  {
    title: 'Art Direction',
    items: [
      'Brand Identity Systems', 'Print Production',
      'Video Post-Production', 'Motion Graphics',
      'Digital Asset Management', 'Creative Direction',
    ],
    note: 'Brand identity, print, motion, and visual storytelling',
  },
  {
    title: 'Engineering',
    items: [
      'Full-Stack Development', 'Responsive Design',
      'Performance Optimization', 'UI / UX Design',
      'Version Control', 'Cloud Services',
    ],
    note: 'Building fast, scalable, and user-focused products',
  },
]

export default function About() {
  return (
    <section id="about" className="about">

      {/* Header */}
      <div className="about-header">
        <span className="section-label">About</span>
        <h2 className="about-heading">
          Design meets code <br />
          <em>where vision becomes reality.</em>
        </h2>
      </div>

      {/* Bio + Education */}
      <div className="about-body">
        <div className="about-bio">
          {BIO_PARAGRAPHS.map((p, i) => (
            <p key={i} className="about-para">{p}</p>
          ))}
          <p className="about-para">
            Today I bridge the gap between stunning visual design and robust technical
            implementation. Beyond design, I'm deeply passionate about computer science
            and currently pursuing my Master's — you can explore that side of my work in
            my <Link to="/cs" className="about-inline-link">coding portfolio</Link>.
          </p>
          <a href="#contact" className="about-cta">
            Let's build something
          </a>
        </div>

        <div className="about-education">
          <p className="edu-eyebrow">Education</p>
          {education.map((e) => (
            <div className="edu-item" key={e.degree}>
              <span className="edu-degree">{e.degree}</span>
              <span className="edu-school">{e.school}</span>
              {e.honors && <span className="edu-honors">{e.honors}</span>}
              <span className={`edu-status ${e.status === 'In Progress' ? 'active' : ''}`}>
                {e.status}
              </span>
            </div>
          ))} 
        </div>
      </div>

      {/* Skills grid */}
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
