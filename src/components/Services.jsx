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
    icon: '💻',
    title: 'Custom Web Development',
    tagline: 'Fast. Modern. Built to Convert.',
    description: 'We build complete, high-performance websites from scratch, handling both responsive front-end design and secure back-end systems.',
    benefits: [
      'Mobile-first, fully responsive layouts',
      'Clean, efficient frontend code',
      'Fast loading speeds for better retention',
      'Secure and scalable backend architecture',
      'Custom database integration',
    ],
    useCases: ['Business Portfolios', 'Startup Landing Pages', 'E-commerce Websites', 'Custom Websites'],
    color: '#eef0ff',
    accent: '#6366f1',
  },
  {
    id: 'branding',
    icon: '✨',
    title: 'Brand Naming & Logo Design',
    tagline: 'Memorable. Unique. Built for You.',
    description: 'We provide creative brand name suggestions and design premium, memorable logos to capture your unique business identity.',
    benefits: [
      'Creative brand name brainstorming',
      'Multiple unique logo concepts',
      'High-resolution vector files included',
      'Color palette & typography selection',
      'Full commercial ownership rights',
    ],
    useCases: ['New business launches', 'Startup branding', 'Company rebrands', 'Product line identities'],
    color: '#f5f0ff',
    accent: '#8b5cf6',
  },
  {
    id: 'social', // ID kept exactly as 'social' so your CSS/design doesn't break!
    icon: '🛒',
    title: 'E-commerce Setup',
    tagline: 'Secure. Scalable. Ready to Sell.',
    description: 'We build secure, fully functional e-commerce platforms designed to showcase your products and drive online sales.',
    benefits: [
      'Secure payment gateway integration',
      'User-friendly product management dashboard',
      'Optimized, frictionless checkout experience',
      'Mobile-ready shopping interfaces',
      'Order and inventory tracking setup',
    ],
    useCases: ['Clothing Brands', 'Digital Stores', 'B2B Wholesale', 'Local Shops'],
    color: '#e8f4ff',
    accent: '#0ea5e9',
  },
  {
    id: 'product',
    icon: '📦',
    title: 'AI & Product Image Editing',
    tagline: 'Crisp. Realistic. Market-Ready.',
    description: 'We create clean, white-background listing photos and use advanced AI to generate realistic model-wearing shots for your products.',
    benefits: [
      'Clean white background extraction',
      'AI-generated realistic human models',
      'Color correction and lighting enhancement',
      'Marketplace-ready formatting (Amazon/Flipkart)',
      'High-conversion visual appeal',
    ],
    useCases: ['E-commerce product pages', 'Amazon/Flipkart listings', 'Apparel lookbooks', 'Social media showcases'],
    color: '#fff0f6',
    accent: '#ec4899',
  },
  {
    id: 'video',
    icon: '🪄',
    title: 'AI Video Generation',
    tagline: 'Dynamic. Engaging. Scroll-Stopping.',
    description: 'Send us a standard product photo, and we will use cutting-edge AI to transform it into a stunning, dynamic promotional video.',
    benefits: [
      'Transform static images into fluid motion',
      'High-quality cinematic rendering',
      'Perfect formatting for social media reels',
      'No expensive video shoots required',
      'Fast turnaround times for campaigns',
    ],
    useCases: ['Instagram Reels & TikToks', 'Product launch teasers', 'Website hero backgrounds', 'Digital ad campaigns'],
    color: '#fffbeb',
    accent: '#f59e0b',
  },
  {
    id: 'identity',
    icon: '🎨',
    title: 'Business Identity Design',
    tagline: 'Professional. Cohesive. Premium.',
    description: 'We design professional visiting cards, letterheads, and brand stationery to give your business a cohesive, premium look.',
    benefits: [
      'Custom visiting card designs',
      'Professional letterhead formatting',
      'Cohesive brand stationery sets',
      'Print-ready file delivery',
      'Consistent visual identity across physical media',
    ],
    useCases: ['Networking events', 'Client presentations', 'Corporate communications', 'Physical retail packaging'],
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
              Custom Digital Solutions for{' '}
              <span className="gradient-text">Growing Brands</span>
            </h1>
            <p>
              From your very first logo to a fully custom web platform. We provide the essential design, development, and digital services your business needs to succeed under one roof.
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