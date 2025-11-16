import React from 'react'
// At the top of TechGrid.jsx - explicit imports
import powrImg from '../assets/powr.png'
import powAutoImg from '../assets/powAuto.png'
import dataverszImg from '../assets/dataversz.png'
import reaktImg from '../assets/reakt.png'
import azireImg from '../assets/azire.png'
import jsImg from '../assets/js.bmp'
import nodeyImg from '../assets/nodey.png'
import graphiImg from '../assets/graphi.png'

// If images produced by slice script exist in src/assets/tech, they will be bundled by Vite.
// We attempt dynamic imports via static paths so tree-shaking still works.
// Fallback to emoji if an image is missing.

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

// Pre-resolve image imports using existing assets in src/assets first,
// then fall back to the sliced `src/assets/tech/*.webp` if available.
const images = {
  'power-apps': powrImg,
  'power-automate': powAutoImg,
  'dataverse': dataverszImg,
  'react': reaktImg,
  'azure': azireImg,
  'javascript': jsImg,
  'nodejs': nodeyImg,
  'microsoft-graph': graphiImg
}
const tryLoad = (rel) => {
  try { return new URL(rel, import.meta.url).href } catch { return null }
}
// Fallback to tech/ webp outputs if available (sliced output)
for (const key of ['power-apps','power-automate','dataverse','react','azure','javascript','nodejs','microsoft-graph']) {
  if (!images[key]) {
    const p = tryLoad(`../assets/tech/${key}.webp`)
    if (p) images[key] = p
  }
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
