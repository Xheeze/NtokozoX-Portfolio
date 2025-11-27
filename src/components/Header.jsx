import React, { useEffect, useState } from 'react'
//import logo1 from '../assets/xheeze.jpg'
import logo from '../assets/xheezy.svg'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <a className="brand" href="#top" aria-label="Home">
        <img src={logo} alt="Logo" width={40} height={40 } />
        <span>Ntokozo Xheeze Sibiya</span>
      </a>
      
      <nav aria-label="Primary">
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#certifications">Certifications</a>
        <a href="#contact">Contact</a>
        <a className="btn" href="#" aria-label="Download resume (placeholder)">Resume</a>
      </nav>
    </header>
  )
}
