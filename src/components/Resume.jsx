import React from 'react'

export default function Resume() {
  const pdfPath = '/resume/NtokozoSibiya_CV.pdf' // place the PDF in public/resume/

  return (
    <section className="resume-section">
      <h2>Resume</h2>
      <p className="resume-intro">Download or view a clean PDF copy of my CV. Key highlights are shown below for quick scanning.</p>

      <div className="resume-hero">
        <div>
          <h3>Ntokozo Sibiya</h3>
          <p className="muted">Power Platform Developer • Frontend Engineer</p>
        </div>
        <div className="resume-cta">
          <a className="btn primary" href={pdfPath} target="_blank" rel="noopener noreferrer">View PDF</a>
          <a className="btn" href={pdfPath} download>Download</a>
        </div>
      </div>

      <div className="resume-grid">
        <div className="resume-col">
          <h4>Selected Experience</h4>
          <ul>
            <li><strong>Power Platform Developer</strong> — Contoso Ltd. (2023–Present) • Low-code apps, automations, Dataverse migrations</li>
            <li><strong>Frontend Engineer</strong> — Fabrikam Inc. (2021–2022) • React dashboards, Node APIs</li>
          </ul>

          <h4>Certifications</h4>
          <ul>
            <li>Microsoft Certified: Fundamentals</li>
            <li>Microsoft Certified: Associate</li>
          </ul>
        </div>
        <div className="resume-col">
          <h4>Skills</h4>
          <div className="tags">
            <span className="tag">Power Apps</span>
            <span className="tag">Power Automate</span>
            <span className="tag">Dataverse</span>
            <span className="tag">React</span>
            <span className="tag">Node.js</span>
            <span className="tag">Microsoft Graph</span>
          </div>

          <h4>Contact</h4>
          <p className="muted">Email: ntokozosibiya1@outlook.com • LinkedIn: linkedin.com/in/ntokozo</p>
        </div>
      </div>
    </section>
  )
}
