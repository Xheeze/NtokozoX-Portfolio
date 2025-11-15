import React, { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission (you can replace this with actual form handling)
    try {
      // For demonstration purposes, we'll just show a success message
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    }
    
    setIsSubmitting(false)
    
    // Clear status after 3 seconds
    setTimeout(() => setSubmitStatus(''), 3000)
  }

  return (
    <section id="contact" className="section">
      <h2>Get In Touch</h2>
      <p>
        Open to freelance and full-time opportunities. Send me a message or
        connect on social media.
      </p>
      
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="What's this about?"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Tell me about your project or opportunity..."
            />
          </div>

          <button 
            type="submit" 
            className={`btn primary submit-btn ${isSubmitting ? 'submitting' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {submitStatus === 'success' && (
            <div className="form-message success">
              ✅ Message sent successfully! I'll get back to you soon.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="form-message error">
              ❌ Something went wrong. Please try again or email me directly.
            </div>
          )}
        </form>

        <div className="contact-info">
          <h3>Other Ways to Connect</h3>
          <div className="contact-links">
            <a className="btn" href="mailto:ntokozo.xheeze@gmail.com">
              📧 Email
            </a>
            <a className="btn" href="https://www.linkedin.com/in/ntokozo-sibiya1" target="_blank" rel="noreferrer">
              💼 LinkedIn
            </a>
            <a className="btn" href="https://github.com/xheeze" target="_blank" rel="noreferrer">
              🐙 GitHub
            </a>
          </div>
          
          <div className="contact-details">
            <p><strong>Response Time:</strong> Usually within 24 hours</p>
            <p><strong>Available for:</strong> Freelance projects, full-time roles, consulting</p>
            <p><strong>Specialties:</strong> Power Platform, React, Azure solutions</p>
          </div>
        </div>
      </div>
    </section>
  )
}
