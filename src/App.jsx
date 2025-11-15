import React from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import { TechGrid } from './components/TechGrid'
import { Projects } from './components/Projects'
import { CertificateGrid } from './components/CertificateGrid'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import Experience from './components/Experience'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
  <Experience />
        <TechGrid />
        <Projects />
        <CertificateGrid />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
