import React from 'react'
import powplat from '../assets/pp_banner.png'
export function Hero() {
  return (
    <section id="top" className="hero" style={{
      backgroundImage: `linear-gradient(rgba(0, 120, 212, 0.8), rgba(116, 39, 116, 0.8)), url(${powplat})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="hero-content">
        <h1>Power Platform & Web Developer</h1>
        <p>
          I build solutions with Power Apps, Power Automate, Dataverse, and
          integrate with modern web stacks like React, JavaScript, and Azure.
        </p>
        <div className="cta">
          <a className="btn primary" href="#projects">View Projects</a>
          <a className="btn" href="#contact">Get in touch</a>
        </div>
      </div>
    </section>
  )
}
