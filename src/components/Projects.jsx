import React, { useState } from 'react'
import Agri from '../assets/Projects/Agri Assist.png'
import Employ from '../assets/Projects/Employee.png'
import Presdente from '../assets/Projects/Presidente.png'
import Hustlers from '../assets/Projects/Hustle.png'
import Placeholder from '../assets/pp_banner.png' // Temporary placeholder for missing images

const projects = [
  {
    title: 'Employee Attendance',
    image: Employ, // Add screenshot: src/assets/Projects/Employee.png
    summary:
      "An employee management dashboard built with React + Vite, featuring real‑time attendance tracking, daily and monthly reporting, and role‑based actions. It showcases modern front‑end engineering with component‑driven design, state management, and data visualization, optimized for speed and scalability",
    tags: ['React', 'Vite', 'JavaScript', 'Dashboard', 'Data Visualization', 'Employee Management', 'Attendance Tracking', "UI/UX", "Scalable Frontend"],
    link: '', // Add project link
    videoLink: '' // Add video demo link (YouTube, Vimeo, etc.)
  },
  {
    title: 'President Connect',
    image: Presdente,
    summary:
      'A civic‑tech web app built with plain HTML, CSS, and JavaScript, designed to connect leadership with stakeholders through a clean, responsive interface. It demonstrates your ability to craft lightweight, accessible solutions without heavy frameworks, focusing on workflow approvals and stakeholder engagement.',
    tags: ['HTML','CSS','JavaScript','Web Development', 'Civic Tech' ,'Workflow Approvals', 'Stakeholder Engagement','Responsive Design'],
    link: '',
    videoLink: '' // Video available: src/assets/Projects/Presdente.mp4
  },
  {
    title: "Hustler's Breakfast Event Hub",
    image: Hustlers,
    summary:
      'Dynamic event hub dashboard pulling live data from Azure Functions APIs. Provides real-time insights and interactive visuals for community events.',
    tags: ['React', 'Vite', 'JavaScript', 'Azure Functions', 'Event Hub'],
    link: '',
    videoLink: ''
  },
  {
    title: "Agri Assist",
    image: Agri,
    summary:
      'Canvas app for agricultural management; integrates with Azure Cognitive Services for image analysis.',
    tags: ['Power Apps', 'Azure Cognitive Services', 'Dataverse'],
    link: '',
    videoLink: ''
  }
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const openModal = (project) => {
    setSelectedProject(project)
    document.body.style.overflow = 'hidden' // Prevent background scroll
  }

  const closeModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = 'auto' // Restore scroll
  }

  return (
    <section id="projects" className="section">
      <h2>Projects Showcase</h2>
      <div className="cards project-grid">
        {projects.map((p) => (
          <article key={p.title} className="card project-card">
            <div 
              className="project-image-container"
              onClick={() => openModal(p)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && openModal(p)}
            >
              <img 
                src={p.image} 
                alt={`${p.title} screenshot`}
                className="project-image"
                loading="lazy"
              />
              <div className="project-overlay">
                <span className="project-view-hint">View Details</span>
              </div>
            </div>
            <div className="project-content">
              <div className="card-header">
                <h3>{p.title}</h3>
              </div>
              <p className="project-summary">{p.summary}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <div className="project-actions">
                {p.link && (
                  <a className="btn btn-primary" href={p.link} target="_blank" rel="noreferrer">
                    <span>View Project</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                )}
                {p.videoLink && (
                  <a className="btn btn-video" href={p.videoLink} target="_blank" rel="noreferrer">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    <span>Watch Demo</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal/Splash Viewer */}
      {selectedProject && (
        <div className="project-modal" onClick={closeModal}>
          <div className="project-modal-backdrop" />
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="project-modal-close" 
              onClick={closeModal}
              aria-label="Close modal"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
            
            <div className="project-modal-image">
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>
            
            <div className="project-modal-info">
              <h3>{selectedProject.title}</h3>
              <p className="project-modal-summary">{selectedProject.summary}</p>
              
              <div className="tags">
                {selectedProject.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              
              <div className="project-modal-actions">
                {selectedProject.link && (
                  <a className="btn btn-primary" href={selectedProject.link} target="_blank" rel="noreferrer">
                    <span>View Project</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                )}
                {selectedProject.videoLink && (
                  <a className="btn btn-video" href={selectedProject.videoLink} target="_blank" rel="noreferrer">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    <span>Watch Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
