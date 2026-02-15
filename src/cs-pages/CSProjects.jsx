import './cs-bento.css'

const projects = [
  {
    id: 'cerbyl',
    title: 'Cerbyl',
    role: 'Founder & Full-Stack Engineer',
    period: 'June 2025 — Present',
    link: 'https://github.com/AdityaLanka04/L1',
    linkText: 'View on GitHub',
    description: `Comprehensive AI-powered learning platform with intelligent tutoring system:
    
• Multi-Agent AI Architecture - RAG (Retrieval-Augmented Generation) with Google Gemini
• Vector Database - ChromaDB for semantic search and content retrieval
• Knowledge Graph - Neo4j graph database for visual concept mapping and relationships
• Caching Layer - Redis for performance optimization and session management
• Backend API - FastAPI with async endpoints and WebSocket support
• Database - SQLite with SQLAlchemy ORM for relational data
• Authentication - Firebase Auth with JWT token validation
• Containerization - Docker multi-stage builds for deployment
• Cloud Infrastructure - AWS EC2 with Nginx reverse proxy

Features: AI chat tutor with context-aware responses, personalized learning paths with automatic progress tracking, Notion-like block editor, spaced repetition flashcards, custom quiz generation from PDFs/slides, gamification (XP, levels, achievements, leaderboards), and analytics dashboard.`,
    tech: ['React', 'Tailwind', 'FastAPI', 'Python', 'Docker', 'AWS', 'Neo4j', 'SQLite', 'ChromaDB', 'Redis', 'Google Gemini', 'Firebase', 'RAG'],
    size: 'xlarge',
  },
  {
    id: 'dreamwave',
    title: 'DreamWave - 3D Web Graphics',
    role: 'Graphics Developer',
    period: 'Fall 2025',
    link: 'https://youtu.be/uwju0EcvmIo',
    linkText: 'Watch Demo',
    description: `Cinematic 3D web experience inspired by James Bond title sequences with 8 procedurally animated scenes:

• Post-Processing Pipeline - Bloom, chromatic aberration, and film grain shaders
• Dynamic Lighting Systems - Multi-light setups with intensity modulation
• Procedural Animation - Parametric camera paths with orbital movement
• Particle Systems - BufferGeometry-based point clouds for atmospheric effects
• Asset Pipeline - GLTF loading with automatic bounding box normalization
• Physics Simulation - Custom explosion physics with velocity and drag
• Shadow Mapping - 2048x2048 resolution for realistic shadows

96-second synchronized experience with real-time WebGL rendering at 60fps.`,
    tech: ['Three.js', 'WebGL', 'JavaScript', 'GLSL', 'GLTF', 'Post-Processing', 'Procedural Animation'],
    size: 'xlarge',
  },
  {
    id: 'ml-emotion',
    title: 'Facial Emotion Recognition',
    role: 'ML Engineer',
    period: 'Fall 2025',
    description: `Advanced emotion detection system using FER-2013 dataset with 35,887 facial images:

• Feature Engineering - 993 OpenCV features across facial geometry, texture, and color
• Preprocessing Pipeline - Histogram equalization, CLAHE, denoising, edge enhancement
• Data Augmentation - 4x strategy with flips, rotations, and brightness adjustments
• Model Training - Gradient Boosting (64.95% accuracy) and CNN (70.84% accuracy)
• Feature Selection - F-test reduction from 993 to 400 optimal features
• 5-Fold Cross-Validation - Comprehensive performance evaluation

Results: CNN outperformed Gradient Boosting by 6%, achieving 70.84% accuracy with automatic feature learning. Built real-time webcam demo for live emotion detection.`,
    tech: ['Python', 'TensorFlow', 'OpenCV', 'Scikit-learn', 'NumPy', 'Pandas', 'CNN', 'Gradient Boosting'],
    size: 'xlarge',
  },
  {
    id: 'capstone',
    title: 'Capstone Cloud',
    role: 'Developer',
    period: 'May — Aug 2025',
    link: 'https://github.com/mrazo/CapstoneCloud',
    linkText: 'View on GitHub',
    description: 'Web application with secure SAML SSO + JWT auth enabling access for 500+ students and faculty. Automated weekly statistics reporting for 100+ project teams, reducing faculty reporting time by 67%.',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'Docker', 'SAML'],
    size: 'medium',
  },
  {
    id: 'nrve',
    title: 'Nrve Nest',
    role: 'Developer & Designer',
    period: 'April 2025',
    link: 'https://github.com/gaurangdhanani/NrveNest',
    linkText: 'View on GitHub',
    description: 'Won "Best Design" from 100+ teams. Mobile mental wellness app featuring gesture-based mood tracking, guided breathing exercises, and motivational games.',
    tech: ['React Native', 'Expo', 'FastAPI'],
    size: 'medium',
  },
]

const workExperience = [
  {
    id: 'ngs',
    title: "Ng's Labs",
    role: 'Research Assistant',
    period: 'Aug 2025 — Present',
    description: 'Contributing to multimodal argumentation dataset by annotating 1000+ memes with logical fallacy types and graph-structured reasoning flows for LLM-based meme understanding research.',
  },
  {
    id: 'tutor',
    title: 'UTD Tutoring',
    role: 'Community Tutor & Mentor',
    period: 'Apr 2024 — Dec 2025',
    description: 'Tutored 500+ students in Discrete Mathematics through structured sessions and custom problem sets, improving understanding of proofs, graph theory, and combinatorics.',
  },
]

export default function CSProjects() {
  return (
    <>
      <section id="projects" className="cs-projects">
        <div className="cs-projects-header">
          <span className="cs-label">Work & Projects</span>
          <h2 className="cs-projects-heading">What I've Built</h2>
        </div>

        <div className="bento-grid">
          {projects.map((p) => (
            <div className={`bento-card bento-${p.size}`} key={p.id}>
              <div className="bento-top">
                <span className="bento-period">{p.period}</span>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" className="bento-link">
                    {p.linkText || 'View Project'}
                  </a>
                )}
              </div>

              <div className="bento-body">
                <h3 className="bento-title">{p.title}</h3>
                <span className="bento-role">{p.role}</span>
                <p className="bento-desc">{p.description}</p>
              </div>

              <div className="bento-tags">
                {p.tech.map((t) => (
                  <span className="bento-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="cs-experience">
        <div className="cs-experience-header">
          <span className="cs-label">Experience</span>
          <h2 className="cs-experience-heading">Work Experience</h2>
        </div>

        <div className="timeline">
          {workExperience.map((exp, index) => (
            <div className="timeline-item" key={exp.id}>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-title">{exp.title}</h3>
                    <span className="timeline-role">{exp.role}</span>
                  </div>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <p className="timeline-desc">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
