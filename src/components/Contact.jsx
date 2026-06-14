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
              <p>Feel free to reach out to us using any of these methods. We typically respond within 2-4 hours.</p>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>✉️</div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:info.digilystudio@gmail.com">info.digilystudio@gmail.com</a>
                  <p>We'll get back to you within 24 hours</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>💬</div>
                <div>
                  <h4>WhatsApp</h4>
                  <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">+91 9999 999 999</a>
                  <p>Chat with us directly - we love quick conversations</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>📍</div>
                <div>
                  <h4>Our Locations</h4>
                  <p><strong>India:</strong> Based in New Delhi</p>
                  <p><strong>UAE:</strong> Serving Dubai & Abu Dhabi</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>⏰</div>
                <div>
                  <h4>Working Hours</h4>
                  <p>Monday - Saturday: 10 AM - 8 PM IST</p>
                  <p>Sunday: Available via WhatsApp only</p>
                </div>
              </div>

              <div className={styles.socialLinks}>
                <h4>Follow Us</h4>
                <div className={styles.socials}>
                  <a href="https://instagram.com/digilystudio" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="Instagram">📱</a>
                  <a href="https://linkedin.com/company/digilystudio" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="LinkedIn">💼</a>
                  <a href="https://twitter.com/digilystudio" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="Twitter">🐦</a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`${styles.formWrapper} fade-up`} style={{ transitionDelay: '100ms' }}>
              <div className={styles.formBox}>
                <h2>Send us a Message</h2>
                <p>Tell us about your project and we'll get back to you with a custom proposal.</p>

                {submitted && (
                  <div className={styles.successMessage}>
                    ✓ Thanks for reaching out! We'll get back to you soon.
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
                      <option value="branding-logo">Branding & Logo Design</option>
                      <option value="social-media">Social Media & Canva Design</option>
                      <option value="product-images">Product Image Editing</option>
                      <option value="video-editing">Video Editing & Promotions</option>
                      <option value="business-identity">Business Identity Design</option>
                      <option value="other">Other / Multiple Services</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Tell Us About Your Project *</label>
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
                    We'll review your message and get back to you within 24 hours via email or WhatsApp.
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
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
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
    a: 'Most projects take 2-4 weeks depending on scope and complexity. Rush projects are available with expedited pricing.',
  },
  {
    q: 'Do you offer free consultations?',
    a: 'Yes! We offer a free 15-minute discovery call to understand your project and provide initial recommendations.',
  },
  {
    q: 'What\'s your payment structure?',
    a: 'We typically require 50% upfront and 50% on delivery. Custom payment plans available for larger projects.',
  },
  {
    q: 'Do you provide revisions?',
    a: 'Absolutely! Included revisions vary by service. We\'re committed to your satisfaction.',
  },
  {
    q: 'Can you work with our existing brand guidelines?',
    a: 'Yes! We can work within existing brand guidelines or create new ones from scratch.',
  },
  {
    q: 'What file formats do you deliver?',
    a: 'All files in the formats you need - SVG, PNG, PDF, AI, PSD, HTML, etc. We ensure compatibility with your workflow.',
  },
]

export default Contact