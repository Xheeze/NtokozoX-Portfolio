import React from 'react'

export function Certifications() {
  const certifications = [
    { 
      title: "MB-210: Microsoft Dynamics 365 Sales Functional Consultant",
      type: "Microsoft Certified",
      points: "350 pts",
      color: "#0078d4"
    },
    { 
      title: "Applied Skills: Model Driven Apps", 
      type: "Microsoft Applied Skills",
      points: "250 pts",
      color: "#00bcf2"
    },
    { 
      title: "Applied Skills: Canvas Apps", 
      type: "Microsoft Applied Skills",
      points: "250 pts", 
      color: "#00bcf2"
    },
    { 
      title: "Applied Skills: Power Automate", 
      type: "Microsoft Applied Skills",
      points: "250 pts",
      color: "#00bcf2"
    },
    { 
      title: "Advanced Diploma in Python Programming", 
      type: "Professional Certification",
      points: "500 pts",
      color: "#107c10"
    }
  ]

  return (
    <section id="certifications" className="section">
      <h2>
        <img 
          src="/assets/xheeze.jpg" 
          alt="Logo" 
          width={32} 
          height={32} 
          style={{ 
            verticalAlign: 'middle', 
            marginRight: 12, 
            borderRadius: '50%',
            border: '2px solid #ffb900'
          }} 
        />
        My Certifications
      </h2>
      <div className="cards">
        {certifications.map((cert, index) => (
          <article key={index} className="cert-card">
            <div className="cert-header">
              <div className="cert-badge" style={{ backgroundColor: cert.color }}>
                🏆
              </div>
              <div className="cert-points">{cert.points}</div>
            </div>
            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-type">{cert.type}</p>
            <div className="cert-status">
              <span className="status-badge">Earned</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
