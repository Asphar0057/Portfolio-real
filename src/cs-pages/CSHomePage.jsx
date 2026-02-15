import { useEffect } from 'react'
import CSNavbar from './CSNavbar'
import CSHero from './CSHero'
import CSProjects from './CSProjects'
import CSAbout from './CSAbout'
import CSContact from './CSContact'
import './cs-theme.css'

export default function CSHomePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="dark-theme transition-root">
      <CSNavbar />
      <main>
        <CSHero />
        <CSAbout />
        <CSProjects />
        <CSContact />
      </main>
    </div>
  )
}
