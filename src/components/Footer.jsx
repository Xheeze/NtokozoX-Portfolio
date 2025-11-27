import React from 'react'
//
export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <p> the Power Platform & Web Developer © Ntokozo Sibiya {year}</p>
    </footer>
  )
}
