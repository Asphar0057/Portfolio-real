import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail, MdPhone } from 'react-icons/md'
import './Contact.css'

const socials = [
  {
    icon: MdEmail,
    label: 'Email',
    href: 'mailto:Parthavelangovan@gmail.com',
    display: 'Parthavelangovan@gmail.com',
  },
  {
    icon: MdPhone,
    label: 'Phone',
    href: 'tel:+12149404508',
    display: '+1 214 940 4508',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    href: 'https://github.com/Asphar0057',
    display: 'Asphar0057',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/parthav-elangovan-91578128b/',
    display: 'Parthav Elangovan',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="contact">

      <div className="contact-inner">
        <div className="contact-left">
          <span className="section-label contact-label">Contact</span>
          <h2 className="contact-heading">
            Let's make something<br />
            <em>extraordinary.</em>
          </h2>
        </div>

        <div className="contact-links">
          {socials.map(({ icon: Icon, label, href, display }) => (
            <a
              key={label}
              href={href}
              className="contact-link-row"
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
            >
              <span className="contact-link-icon"><Icon /></span>
              <span className="contact-link-label">{label}</span>
              <span className="contact-link-display">{display}</span>
            </a>
          ))}
        </div>
      </div>

      <footer className="contact-footer">
        <span>© 2026 Parthav Elangovan</span>
      </footer>

    </section>
  )
}
