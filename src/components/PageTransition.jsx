import { useState, useCallback, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './PageTransition.css'

/**
 * Hook that returns a trigger function + the overlay element.
 * Call trigger() on click; it handles the slide + navigation.
 */
export function useSlideTransition(to, direction = 'right') {
  const navigate = useNavigate()
  const [animating, setAnimating] = useState(false)
  const overlayRef = useRef(null)

  const trigger = useCallback(() => {
    if (animating) return
    const overlay = overlayRef.current
    if (!overlay) return

    setAnimating(true)

    overlay.className = `slide-overlay slide-${direction}-enter`
    void overlay.offsetWidth
    overlay.classList.add('active')

    setTimeout(() => {
      navigate(to)
      window.scrollTo(0, 0)

      requestAnimationFrame(() => {
        overlay.className = `slide-overlay slide-${direction}-exit active`
        void overlay.offsetWidth
        overlay.classList.remove('active')

        setTimeout(() => {
          overlay.className = 'slide-overlay'
          setAnimating(false)
        }, 500)
      })
    }, 500)
  }, [animating, direction, navigate, to])

  const overlay = <div ref={overlayRef} className="slide-overlay" />

  return { trigger, overlay, animating }
}
