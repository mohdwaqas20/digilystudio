import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Services.module.css'

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

const services = [
  {
    id: 'web',
    icon: '🌐',
    title: 'Website Development',
    tagline: 'Fast. Modern. Built to Convert.',
    description: 'We craft high-performance websites using the latest frontend and backend technologies. From single-page portfolios to complex e-commerce platforms — we build digital homes your brand deserves.',
    benefits: [
      'Mobile-first, fully responsive layouts',
      'SEO-optimized structure from day one',
      'Fast loading speeds (Core Web Vitals compliant)',
      'CMS integration for easy content management',
      'Secure, scalable backend architecture',
    ],
    useCases: ['Business portfolios', 'E-commerce stores', 'SaaS landing pages', 'Corporate websites'],
    color: '#eef0ff',
    accent: '#6366f1',
  },
  {
    id: 'branding',
    icon: '✨',
    title: 'Branding & Logo Design',
    tagline: 'Identity That Speaks Before You Do.',
    description: 'Your logo is the face of your business. We create memorable brand identities that communicate your values, attract your ideal customers, and position you as the premium choice in your market.',
    benefits: [
      'Multiple logo concepts and iterations',
      'Full brand guidelines document',
      'Color palette and typography system',
      'Scalable vector files (SVG, AI, EPS)',
      'Light & dark mode variants',
    ],
    useCases: ['New business launches', 'Brand refresh/rebrand', 'Startup identity', 'D2C product brands'],
    color: '#f5f0ff',
    accent: '#8b5cf6',
  },
  {
    id: 'social',
    icon: '📱',
    title: 'Social Media & Canva Designs',
    tagline: 'Stop the Scroll. Start the Conversation.',
    description: 'We design complete social media packs — posts, stories, reels covers, and highlight icons — that make your brand instantly recognizable and build audience trust at scale.',
    benefits: [
      'Platform-optimized sizing for all channels',
      'Editable Canva templates delivered',
      'Consistent brand voice across all assets',
      'Monthly content calendar planning',
      'Instagram, Facebook, LinkedIn, YouTube covers',
    ],
    useCases: ['Brand launch campaigns', 'Product promotions', 'Festival/seasonal posts', 'Ongoing content needs'],
    color: '#e8f4ff',
    accent: '#0ea5e9',
  },
  {
    id: 'product',
    icon: '📦',
    title: 'Product Image Editing (Amazon / Flipkart)',
    tagline: 'Images That Sell On Their Own.',
    description: 'Premium e-commerce listing images with clean white backgrounds, lifestyle mockups, and infographic-style images that highlight your product\'s best features and drive conversions on Amazon and Flipkart.',
    benefits: [
      'Pure white background (marketplace compliant)',
      'High-resolution output (2000x2000px+)',
      'Lifestyle mockup compositions',
      'Feature highlight infographics',
      'Bulk order discounts available',
    ],
    useCases: ['Amazon Seller Central', 'Flipkart listings', 'Meesho products', 'D2C website galleries'],
    color: '#fff0f6',
    accent: '#ec4899',
  },
  {
    id: 'video',
    icon: '🎬',
    title: 'Video Editing & Promotions',
    tagline: 'Content That Moves People (and the Algorithm).',
    description: 'From 30-second Instagram reels to full-length promotional brand films — we edit, color grade, and add motion graphics to video content that captivates your audience and drives action.',
    benefits: [
      'Professional color grading & correction',
      'Animated text & motion graphics',
      'Background music & sound design',
      'Subtitles & captions included',
      'Social & YouTube optimized exports',
    ],
    useCases: ['Product launch videos', 'Brand story films', 'Instagram/YouTube reels', 'Ad creatives'],
    color: '#fffbeb',
    accent: '#f59e0b',
  },
  {
    id: 'identity',
    icon: '🎨',
    title: 'Business Identity Design',
    tagline: 'Make Every Touchpoint Premium.',
    description: 'Business cards, letterheads, envelopes, email signatures — all the physical and digital stationery that ensures your brand looks polished and professional at every client interaction.',
    benefits: [
      'Double-sided visiting card design',
      'Print-ready files (300 DPI CMYK)',
      'Letterhead & envelope design',
      'Email signature HTML template',
      'Brand merchandise concepts',
    ],
    useCases: ['Client-facing professionals', 'Corporate offices', 'Startups & SMBs', 'Freelancers & consultants'],
    color: '#f0fff4',
    accent: '#22c55e',
  },
]

function Services() {
  useScrollReveal()

  return (
    <div className={`page-enter ${styles.page}`}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={`${styles.heroContent} fade-up`}>
            <span className="badge">Our Services</span>
            <h1>
              Everything Your Brand Needs to{' '}
              <span className="gradient-text">Thrive Online</span>
            </h1>
            <p>
              One studio, six disciplines. We handle every creative need under one roof — so your brand stays consistent, beautiful, and growth-ready.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          {services.map((service, i) => (
            <div
              key={service.id}
              className={`${styles.serviceBlock} fade-up`}
              style={{ '--accent': service.accent, '--bg': service.color }}
            >
              <div className={`${styles.serviceLeft} ${i % 2 === 1 ? styles.serviceRight : ''}`}>
                <div className={styles.serviceIconWrap} style={{ background: service.color }}>
                  <span className={styles.serviceEmoji}>{service.icon}</span>
                </div>
                <span className={styles.serviceTagline} style={{ color: service.accent }}>
                  {service.tagline}
                </span>
                <h2 className={styles.serviceTitle}>{service.title}</h2>
                <p className={styles.serviceDesc}>{service.description}</p>
                <Link to="/contact" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                  Get a Quote
                </Link>
              </div>
              <div className={styles.serviceDetails}>
                <div className={styles.benefitsCard}>
                  <h4 className={styles.cardTitle}>✅ What You Get</h4>
                  <ul className={styles.benefitsList}>
                    {service.benefits.map(b => (
                      <li key={b} className={styles.benefitItem}>
                        <span className={styles.checkIcon} style={{ color: service.accent }}>✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.useCasesCard}>
                  <h4 className={styles.cardTitle}>🎯 Use Cases</h4>
                  <div className={styles.tags}>
                    {service.useCases.map(u => (
                      <span key={u} className={styles.tag} style={{ background: service.color, color: service.accent }}>
                        {u}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={`${styles.ctaBox} fade-up`}>
            <h2>Not sure what you need?</h2>
            <p>Let's hop on a quick call and figure out the best plan for your business.</p>
            <div className={styles.ctaBtns}>
              <Link to="/contact" className="btn-primary">Talk to Us Free</Link>
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

export default Services