import React from 'react'

const skillGroups = [
  {
    title: 'Power Platform',
    items: ['Power Apps (Canvas/Model-driven)', 'Power Automate', 'Power Pages', 'Dataverse', 'Power Fx']
  },
  {
    title: 'Web',
    items: ['React', 'JavaScript', 'Node.js', 'Vite', 'REST/Graph']
  },
  {
    title: 'Cloud & Data',
    items: ['Azure (Functions, Static Web Apps)', 'SQL', 'SharePoint', 'Microsoft Graph', 'ALM / DevOps']
  }
]

export function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="cards">
        {skillGroups.map((group) => (
          <article key={group.title} className="card">
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
