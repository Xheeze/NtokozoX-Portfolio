import React from 'react';
import xheezeImg from '../assets/xheeze.jpg';
import modelDrivenAppsBadge from '../assets/configure-model-driven-apps-customer-engagement.svg';
import createManageAppsBadge from '../assets/create-manage-model-driven-apps.svg';
import powerCanvasAppsBadge from '../assets/powerCanvasApps.svg';
import genericTrophyBadge from '../assets/generic-trophy.svg';
import certified from '../assets/microsoft-certified-associate-badge.svg';
import fundamental from '../assets/microsoft-certified-fundamentals-badge.svg';

// Certificate data with badge images
const certificates = [
  {
    name: "Ntokozo Xheeze Sibiya",
    type: "Profile",
    points: "Profile",
    icon: <img src={xheezeImg} alt="Profile" width="48" height="48" style={{borderRadius: '50%'}} />,
    color: "white",
    link: "#top",
    description: "Power Platform & Web Developer specializing in Microsoft technologies and modern web solutions.",
    status: "Active"
  },
  { //main cert
    name: "MB-210: Microsoft Dynamics 365 Sales Functional Consultant",
    type: "Microsoft Certified",
    points: "350 pts",
    icon: <img src={certified} alt="MB-210" width="48" height="48" />,
    color: "white",
    link: "https://docs.microsoft.com/certifications/d365-functional-consultant-sales",
    description: "Expertise in configuring and implementing Dynamics 365 Sales solutions for businesses.",
    status: "Earned"
  },
  {
    name: "Applied Skills: Model Driven Apps",
    type: "Microsoft Applied Skills",
    points: "250 pts",
    icon: <img src={modelDrivenAppsBadge} alt="Model Driven Apps" width="48" height="48" />,
    color: "white",
    link: "https://docs.microsoft.com/learn/paths/create-app-models-business-processes/",
    description: "Building data-driven business applications using Power Apps model-driven approach.",
    status: "Earned"
  },
  {
    name: "Applied Skills: Canvas Apps",
    type: "Microsoft Applied Skills",
    points: "250 pts", 
    icon: <img src={powerCanvasAppsBadge} alt="Canvas Apps" width="48" height="48" />,
    color: "white",
    link: "https://docs.microsoft.com/learn/paths/create-powerapps/",
    description: "Creating custom business applications with intuitive user interfaces using Power Apps.",
    status: "Earned"
  },
  {
    name: "Applied Skills: Power Automate",
    type: "Microsoft Applied Skills",
    points: "250 pts",
    icon: <img src={createManageAppsBadge} alt="Power Automate" width="48" height="48" />,
    color: "white", 
    link: "https://docs.microsoft.com/learn/paths/automate-process-using-flow/",
    description: "Automating business processes and workflows to increase productivity and efficiency.",
    status: "Earned"
  },
  {
    name: "Advanced Diploma in Python Programming",
    type: "Professional Certification",
    points: "500 pts",
    icon: <img src={genericTrophyBadge} alt="Python Diploma" width="48" height="48" />,
    color: "white",
    link: "#certifications",
    description: "Advanced programming skills in Python for web development, data analysis, and automation.",
    status: "Earned"
  },
  {
    name: "DP-900: Azure Data Fundamentals",
    type: "Microsoft Certified",
    points: "150 pts",
    icon: <img src={fundamental} alt="DP-900" width="48" height="48" />,
    color: "seagreen",
    link: "https://learn.microsoft.com/en-us/certifications/azure-data-fundamentals/",
    description: "Demonstrates foundational knowledge of core data concepts and how they are implemented in Microsoft Azure.",
    status: "In Progress"
  },
  {
    name: "AI-900: Azure AI Fundamentals",
    type: "Microsoft Certified",
    points: "150 pts",
    icon: <img src={fundamental} alt="AI-900" width="48" height="48" />,
    color: "seagreen",
    link: "https://learn.microsoft.com/en-us/certifications/azure-ai-fundamentals/",
    description: "Demonstrates foundational knowledge of AI and machine learning concepts and how they are implemented in Microsoft Azure.",
    status: "In Progress"
  },
  {
    name: "AI-102: Azure AI Engineer Associate",
    type: "Microsoft Certified",
    points: "350 pts",
    icon: <img src={certified} alt="AI-102" width="48" height="48" />,
    color: "white",
    link: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/?practice-assessment-type=certification",
    description: "Validates the ability to design, build, and deploy AI solutions using Microsoft Azure Cognitive Services, Machine Learning, and conversational AI.",
    status: "In Progress"
  },
]

export function CertificateGrid() {
  return (
    <section id="certifications" className="section">
      <h2>
        <img 
          src={xheezeImg} 
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
        My Certifications & Profile
      </h2>
      
      {/* Certificate Cards Grid */}
      <div className="cards">
        {certificates.map((cert, index) => (
          <article key={index} className="cert-card">
            <div className="cert-header">
              <div className="cert-badge" style={{ backgroundColor: cert.color }}>
                {cert.icon}
              </div>
              {cert.points !== "Profile" && (
                <div className="cert-points">{cert.points}</div>
              )}
            </div>
            <h3 className="cert-title">{cert.name}</h3>
            <p className="cert-type">{cert.type}</p>
            {cert.description && (
              <p className="cert-description">{cert.description}</p>
            )}
            <div className="cert-status">
              <span className={`status-badge ${cert.status.toLowerCase().replace(' ', '-')}`}>
                {cert.status}
              </span>
              {cert.link.startsWith('http') && (
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cert-link"
                >
                  {cert.status === "In Progress" ? "Study Path →" : "View Details →"}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
