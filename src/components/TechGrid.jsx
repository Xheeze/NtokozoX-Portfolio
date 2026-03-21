import React from 'react'
import imgPowr from '../assets/powr.png'
import imgPowAuto from '../assets/powAuto.png'
import imgDataversz from '../assets/dataversz.png'
import imgReakt from '../assets/reakt.png'
import imgAzire from '../assets/azire.png'
import imgJs from '../assets/js.bmp'
import imgNodey from '../assets/nodey.png'
import imgGraphi from '../assets/graphi.png'

const techItems = [
  { key: 'power-apps', name: 'Power Apps', emoji: '⚡', link: 'https://powerapps.microsoft.com', color: '#742774' },
  { key: 'power-automate', name: 'Power Automate', emoji: '🔄', link: 'https://powerautomate.microsoft.com', color: '#0066cc' },
  { key: 'dataverse', name: 'Dataverse', emoji: '🗃️', link: 'https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-intro', color: '#107c10' },
  { key: 'react', name: 'React', emoji: '⚛️', link: 'https://react.dev', color: '#61dafb' },
  { key: 'azure', name: 'Azure', emoji: '☁️', link: 'https://azure.microsoft.com', color: '#0078d4' },
  { key: 'javascript', name: 'JavaScript', emoji: '🟨', link: 'https://developer.mozilla.org/docs/Web/JavaScript', color: '#f7df1e' },
  { key: 'nodejs', name: 'Node.js', emoji: '💚', link: 'https://nodejs.org', color: '#339933' },
  { key: 'microsoft-graph', name: 'Microsoft Graph', emoji: '📊', link: 'https://graph.microsoft.com', color: '#0078d4' }
]

// Static imports so Vite can bundle and hash the assets correctly
const images = {
  'power-apps': imgPowr,
  'power-automate': imgPowAuto,
  'dataverse': imgDataversz,
  'react': imgReakt,
  'azure': imgAzire,
  'javascript': imgJs,
  'nodejs': imgNodey,
  'microsoft-graph': imgGraphi,
}

export function TechGrid() {
  return (
    <section className="tech-grid-section">
      <h2>Technologies I Work With</h2>
      <div className="icon-grid">
        {techItems.map(item => {
          const src = images[item.key]
          return (
            <a
              key={item.key}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-icon fancy"
              title={item.name}
              style={{ '--tech-color': item.color }}
            >
              <div className="icon-content">
                {src ? (
                  <picture>
                    <source srcSet={src} type="image/webp" />
                    {/* Optional PNG fallback if desired: will be produced by script */}
                    {/* <source srcSet={src.replace('.webp', '.png')} type="image/png" /> */}
                    <img 
                      src={src} 
                      alt={item.name} 
                      loading="lazy" 
                      decoding="async" 
                      width={160} 
                      height={160} 
                      className="tech-img" 
                    />
                  </picture>
                ) : (
                  <span className="icon-emoji" aria-hidden="true">{item.emoji}</span>
                )}
                <span className="icon-label">{item.name}</span>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}
