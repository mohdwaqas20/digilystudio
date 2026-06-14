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
              Your Worldwide<span className="gradient-text">Digital Partner</span> <br />

            </h1>
            <p>
              Founded in 2026, Digily Studio brings premium digital experiences to clients across the globe. Our mission is to equip startups and established businesses with the custom design, development, and AI visuals needed to stand out on the world stage.
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
                To empower businesses worldwide with high-end digital solutions that aren't just beautiful — but built to convert and scale. We believe that custom code and premium design are the secret weapons of growing brands.
              </p>
            </div>

            {/* Vision */}
            <div className={`${styles.missionCard} fade-up`} style={{ transitionDelay: '100ms' }}>
              <div className={styles.missionIcon}>
                <span>✨</span>
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the premier digital partner for ambitious brands across the globe. A worldwide studio where modern web technology meets strategic creativity, ensuring every project drives tangible business growth.
              </p>
            </div>

            {/* Values */}
            <div className={`${styles.missionCard} fade-up`} style={{ transitionDelay: '200ms' }}>
              <div className={styles.missionIcon}>
                <span>💡</span>
              </div>
              <h3>Our Values</h3>
              <p>
                <strong>Speed:</strong> Fast, flawless execution without compromise.<br />
                <strong>Excellence:</strong> Premium design and clean code on every pixel.<br />
                <strong>Honesty:</strong> Transparent pricing and direct communication.
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
              <a href="https://wa.me/919984090593" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
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
    title: 'All-In-One Digital Studio',
    desc: 'Custom web development, premium branding, and AI product videos all under one roof. No need to manage multiple freelancers.',
  },
  {
    title: 'Fast & High-Quality Work',
    desc: 'We move quickly to launch your project on time, without ever compromising on clean code or premium design aesthetics.',
  },
  {
    title: 'Built for Business Growth',
    desc: 'Whether it is a luxury e-commerce store or a corporate B2B portal, we build platforms that actually drive sales and attract clients.',
  },
  {
    title: 'Honest & Clear Pricing',
    desc: 'Premium digital solutions designed for startups and growing businesses. No hidden fees, just clear and upfront project pricing.',
  },
  {
    title: 'Direct WhatsApp Support',
    desc: 'Skip the agency middlemen. You communicate directly with us via WhatsApp for fast updates and crystal-clear communication.',
  },
  {
    title: 'Modern Tech & AI Powered',
    desc: 'We use the latest web technologies (like React) and cutting-edge AI video tools to keep your brand steps ahead of the competition.',
  },
]

const stats = [
  {
    value: '100%',
    label: 'Custom Designs',
    desc: 'Fully responsive and tailored to your brand',
  },
  {
    value: '1-on-1',
    label: 'Client Support',
    desc: 'Direct communication and dedicated attention',
  },
  {
    value: 'Global',
    label: 'Client Reach',
    desc: 'Serving startups and businesses worldwide',
  }
]
const processSteps = [
  {
    title: 'Discovery & Planning',
    desc: 'We start with a direct consultation to understand your business goals, target audience, and exactly what you need built.',
  },
  {
    title: 'Design & UI/UX',
    desc: 'We craft premium brand identities and modern website layouts, ensuring the visual direction aligns perfectly with your vision.',
  },
  {
    title: 'Development & Production',
    desc: 'From writing clean custom code for your web platform to generating dynamic AI product videos, we bring the designs to life.',
  },
  {
    title: 'Review & Refinement',
    desc: 'We share the functional website or video drafts with you. We iterate directly based on your feedback until the final result is flawless.',
  },
  {
    title: 'Launch & Deployment',
    desc: 'We handle the technical setup, connect your domains, and officially launch your new e-commerce store, B2B portal, or digital campaign.',
  },
  {
    title: 'Ongoing Support',
    desc: 'Even after going live, we are just a message away for any tweaks, platform updates, or future digital projects your business needs.',
  },
]

const teamMembers = [
  {
    name: 'Mohd Waqas',
    avatar: '👨‍💻',
    role: 'Founder & Full-Stack Developer',
    bio: 'Dubai-based developer and creative director. Specializes in building high-performance e-commerce platforms, B2B portals, and premium brand identities.',
  }
]
export default About