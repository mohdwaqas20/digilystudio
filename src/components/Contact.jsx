import React, { useState, useEffect } from 'react'
import styles from './Contact.module.css'

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    const els = document.querySelectorAll('.fade-up')
    els.forEach(el => observer.observe(el))
    return () => els.forEach(el => observer.unobserve(el))
  }, [])
}

function Contact() {
  useScrollReveal()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'website-development',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', service: 'website-development', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className={`page-enter ${styles.contact}`}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={`${styles.heroContent} fade-up`}>
            <span className="badge">Get In Touch</span>
            <h1>
              Let's Talk About Your <span className="gradient-text">Next Project</span>
            </h1>
            <p>
              Whether you have a specific project in mind or just want to explore what's possible, we're here to help. Reach out via email, WhatsApp, or the form below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`section ${styles.contactSection}`}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Contact Info */}
            <div className={`${styles.contactInfo} fade-up`}>
              <h2>Contact Information</h2>
              <p>Feel free to reach out using any of these methods. I typically respond within 2-4 hours.</p>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>✉️</div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:info.digilystudio@gmail.com">info.digilystudio@gmail.com</a>
                  <p>I'll get back to you within 24 hours</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>💬</div>
                <div>
                  <h4>WhatsApp</h4>
                  <a href="https://wa.me/919984090593" target="_blank" rel="noopener noreferrer">+91 99840 90593</a>
                  <p>Chat directly with the founder for quick responses</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>📍</div>
                <div>
                  <h4>Workspace</h4>
                  <p><strong>Based in Dubai, UAE</strong></p>
                  <p>Operating 100% Remotely & Serving Clients Worldwide</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>⏰</div>
                <div>
                  <h4>Working Hours</h4>
                  <p>Monday - Saturday: 10 AM - 8 PM</p>
                  <p>Flexible availability for international time zones</p>
                </div>
              </div>

              <div className={styles.socialLinks}>
                <h4>Follow Us</h4>
                <div className={styles.socials}>
                  <a href="https://www.instagram.com/digilystudio?igsh=aW51dGtrMTNoaXN6" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="Instagram">📱</a>
                  <a href="https://facebook.com/digilystudio" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="Facebook">📘</a>
                  <a href="https://linkedin.com/company/digilystudio" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="LinkedIn">💼</a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`${styles.formWrapper} fade-up`} style={{ transitionDelay: '100ms' }}>
              <div className={styles.formBox}>
                <h2>Send a Message</h2>
                <p>Tell me about your project and I'll get back to you with a custom proposal.</p>

                {submitted && (
                  <div className={styles.successMessage}>
                    ✓ Thanks for reaching out! I'll get back to you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="service">Service Interested In *</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="website-development">Website Development</option>
                      <option value="ecommerce-b2b">E-Commerce & B2B Portals</option>
                      <option value="branding-logo">Brand Identity & Logo Design</option>
                      <option value="ai-promotional-videos">AI Promotional Videos</option>
                      <option value="product-images">Marketplace Product Editing</option>
                      <option value="other">Other / Multiple Services</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Tell Me About Your Project *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="Describe your project, goals, timeline, and budget if you have one..."
                    />
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    Send Message
                  </button>

                  <p className={styles.formNote}>
                    I'll review your message and get back to you within 24 hours via email or WhatsApp.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ CTA */}
      <section className={`section ${styles.faqSection}`}>
        <div className="container">
          <div className="section-header fade-up">
            <h2>Frequently Asked <span className="gradient-text">Questions</span></h2>
            <p>Quick answers to common questions about working with us.</p>
          </div>

          <div className={styles.faqGrid}>
            {faqs.map((faq, i) => (
              <div key={faq.q} className={`${styles.faqCard} fade-up`} style={{ transitionDelay: `${i * 80}ms` }}>
                <h4>{faq.q}</h4>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={`${styles.ctaBox} fade-up`}>
            <h2>Still Have Questions?</h2>
            <p>No problem! Hit us up on WhatsApp for a quick chat about your project.</p>
            <a href="https://wa.me/919984090593" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              💬 Chat on WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

const faqs = [
  {
    q: 'What\'s your average project timeline?',
    a: 'Because I handle everything directly without agency delays, I move fast. Web development projects typically take 1 to 2 weeks, while branding and AI promotional videos are usually delivered within 2 to 4 days.',
  },
  {
    q: 'Do you offer free consultations?',
    a: 'Yes! I offer a quick, free chat via WhatsApp or Google Meet. We will jump straight into your project goals and figure out the fastest way to get your digital solution live.',
  },
  {
    q: 'What\'s your payment structure?',
    a: 'I typically require a 50% upfront deposit to secure your spot and start working immediately. The remaining 50% is due upon final delivery and successful deployment of your project.',
  },
  {
    q: 'Do you provide revisions?',
    a: 'Absolutely. I want you to be completely thrilled with the final result. We will do quick, direct review rounds, and I usually turn around edits within 24 hours.',
  },
  {
    q: 'Will I communicate with an agency team or directly with you?',
    a: 'You work directly with me, the founder. This means no agency middlemen, crystal-clear communication, and much faster turnaround times. You get premium work without the corporate wait times.',
  },
  {
    q: 'What exact files and formats do you deliver at the end?',
    a: 'For web development, you get a fully deployed, live website connected to your domain, plus the clean source code. For design and videos, you receive all high-resolution files (MP4, PNG, SVG) ready for use.',
  },
]

export default Contact