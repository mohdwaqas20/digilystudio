import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './About.module.css'

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

function About() {
  useScrollReveal()

  return (
    <div className={`page-enter ${styles.about}`}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={`${styles.heroContent} fade-up`}>
            <span className="badge">About Digily Studio</span>
            <h1>
              We Are A <span className="gradient-text">Digital Creative</span> Agency<br />
              Built for Scale & Excellence
            </h1>
            <p>
              Founded in 2022, Digily Studio has grown into one of India's most trusted creative studios, serving ambitious brands across India and Dubai. Our mission? To make premium digital creativity accessible to every business, regardless of size.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={`section ${styles.missionSection}`}>
        <div className="container">
          <div className={styles.missionGrid}>
            {/* Mission */}
            <div className={`${styles.missionCard} fade-up`}>
              <div className={styles.missionIcon}>
                <span>🎯</span>
              </div>
              <h3>Our Mission</h3>
              <p>
                To empower businesses with world-class creative solutions that aren't just beautiful — but built to convert, scale, and drive real business results. We believe great design is the secret weapon of growing brands.
              </p>
            </div>

            {/* Vision */}
            <div className={`${styles.missionCard} fade-up`} style={{ transitionDelay: '100ms' }}>
              <div className={styles.missionIcon}>
                <span>✨</span>
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the go-to creative partner for ambitious brands across South Asia and the Middle East. A studio where creativity meets strategy, and every project moves the business needle.
              </p>
            </div>

            {/* Values */}
            <div className={`${styles.missionCard} fade-up`} style={{ transitionDelay: '200ms' }}>
              <div className={styles.missionIcon}>
                <span>💡</span>
              </div>
              <h3>Our Values</h3>
              <p>
                <strong>Speed:</strong> Fast turnaround without compromise.<br/>
                <strong>Quality:</strong> Premium execution on every pixel.<br/>
                <strong>Honesty:</strong> Transparent communication, always.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={`section ${styles.whySection}`}>
        <div className="container">
          <div className="section-header fade-up">
            <h2>Why Brands Choose <span className="gradient-text">Digily Studio</span></h2>
            <p>We're not just another creative agency. Here's what makes us different.</p>
          </div>

          <div className={styles.whyGrid}>
            {whyChooseUs.map((item, i) => (
              <div key={item.title} className={`${styles.whyCard} fade-up`} style={{ transitionDelay: `${i * 80}ms` }}>
                <span className={styles.whyNumber}>{String(i + 1).padStart(2, '0')}</span>
                <h3 className={styles.whyTitle}>{item.title}</h3>
                <p className={styles.whyDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={`section ${styles.statsSection}`}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((stat, i) => (
              <div key={stat.label} className={`${styles.statCard} fade-up`} style={{ transitionDelay: `${i * 100}ms` }}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
                <p className={styles.statDesc}>{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={`section ${styles.processSection}`}>
        <div className="container">
          <div className="section-header fade-up">
            <h2>How We Work</h2>
            <p>A streamlined process that delivers exceptional results, fast.</p>
          </div>

          <div className={styles.processSteps}>
            {processSteps.map((step, i) => (
              <div key={step.title} className={`${styles.processStep} fade-up`} style={{ transitionDelay: `${i * 100}ms` }}>
                <div className={styles.stepNumber}>{i + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>

          <div className={styles.processVisual}>
            <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className={styles.processLine}>
              <line x1="0" y1="50" x2="1000" y2="50" stroke="url(#processGradient)" strokeWidth="2" />
              <defs>
                <linearGradient id="processGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--indigo-500)" />
                  <stop offset="50%" stopColor="var(--violet-500)" />
                  <stop offset="100%" stopColor="var(--sky-500)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={`section ${styles.teamSection}`}>
        <div className="container">
          <div className="section-header fade-up">
            <h2>Meet The Team</h2>
            <p>Talented creatives, designers, and developers passionate about your success.</p>
          </div>

          <div className={styles.teamGrid}>
            {teamMembers.map((member, i) => (
              <div key={member.name} className={`${styles.teamCard} fade-up`} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className={styles.teamAvatar}>{member.avatar}</div>
                <h3>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                <p className={styles.bio}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={`${styles.ctaBox} fade-up`}>
            <h2>Let's Create Something Extraordinary Together</h2>
            <p>Ready to transform your brand? Let's talk about what makes your business special.</p>
            <div className={styles.ctaBtns}>
              <Link to="/contact" className="btn-primary">Start Your Project</Link>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const whyChooseUs = [
  {
    title: 'Multi-Disciplinary Expertise',
    desc: 'Web design, branding, video, product imaging, social media — one studio, endless possibilities. No juggling multiple vendors.',
  },
  {
    title: 'Fast Turnaround Without Compromise',
    desc: 'Most projects delivered ahead of schedule. We\'ve built processes to move quickly while maintaining premium quality.',
  },
  {
    title: 'Results-Driven Approach',
    desc: 'Every design decision is intentional. We don\'t just make things pretty — we build for conversions and business growth.',
  },
  {
    title: 'Accessible Pricing for Every Budget',
    desc: 'Startup-friendly rates without the startup-quality feeling. Premium creative solutions that won\'t break the bank.',
  },
  {
    title: '6-Day WhatsApp Support',
    desc: 'We\'re here when you need us. Direct communication, quick response times, no corporate runaround.',
  },
  {
    title: 'Proven Track Record',
    desc: '150+ projects, 80+ happy clients, 5★ ratings. We\'ve delivered for e-commerce, SaaS, D2C, and corporate brands.',
  },
]

const stats = [
  {
    value: '150+',
    label: 'Projects Delivered',
    desc: 'Across all disciplines and industries',
  },
  {
    value: '80+',
    label: 'Happy Clients',
    desc: 'In India, UAE, and beyond',
  },
  {
    value: '2',
    label: 'Countries Served',
    desc: 'India and Dubai with same premium quality',
  },
  {
    value: '5★',
    label: 'Client Rating',
    desc: 'Across all platforms and reviews',
  },
]

const processSteps = [
  {
    title: 'Discovery & Strategy',
    desc: 'We dive deep into your brand, goals, and target audience to craft a strategic direction.',
  },
  {
    title: 'Conceptualization',
    desc: 'Creative brainstorming and ideation to develop multiple concepts for your consideration.',
  },
  {
    title: 'Design & Production',
    desc: 'Our designers and developers bring concepts to life with pixel-perfect execution.',
  },
  {
    title: 'Feedback & Refinement',
    desc: 'Your input matters. We iterate based on your feedback until you\'re thrilled.',
  },
  {
    title: 'Final Delivery',
    desc: 'All files, assets, documentation, and guidelines delivered ready for deployment.',
  },
  {
    title: 'Ongoing Support',
    desc: 'We\'re here for tweaks, updates, and future projects. Your success doesn\'t end at launch.',
  },
]

const teamMembers = [
  {
    name: 'Arjun Singh',
    avatar: '👨‍💼',
    role: 'Founder & Creative Director',
    bio: '10+ years in digital design. Passionate about building brands that people love.',
  },
  {
    name: 'Priya Sharma',
    avatar: '👩‍🎨',
    role: 'Lead Designer',
    bio: 'Award-winning brand designer. Specializes in creating identities that resonate.',
  },
  {
    name: 'Vikram Patel',
    avatar: '👨‍💻',
    role: 'Full-Stack Developer',
    bio: 'React & Node.js expert. Turns designs into blazing-fast, conversion-optimized websites.',
  },
  {
    name: 'Sneha Gupta',
    avatar: '🎬',
    role: 'Video & Motion Designer',
    bio: 'Creates cinematic content that tells your brand story and drives engagement.',
  },
]

export default About