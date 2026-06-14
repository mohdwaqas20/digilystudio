import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

/* ---- Scroll animation hook ---- */
function useScrollReveal(selector = '.fade-up') {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    const els = document.querySelectorAll(selector)
    els.forEach(el => observer.observe(el))
    return () => els.forEach(el => observer.unobserve(el))
  }, [selector])
}

/* ---- Data ---- */
const services = [
  {
    icon: '🌐',
    title: 'Website Development',
    desc: 'Fast, modern websites built with cutting-edge tech — from portfolios to full-stack platforms.',
    color: '#eef0ff',
  },
  {
    icon: '✨',
    title: 'Branding & Logo Design',
    desc: 'Memorable identities that make your brand stand out from the very first impression.',
    color: '#f5f0ff',
  },
  {
    icon: '📱',
    title: 'Social Media Design',
    desc: 'Eye-catching creatives for Instagram, Facebook & LinkedIn that drive real engagement.',
    color: '#e8f4ff',
  },
  {
    icon: '📦',
    title: 'Product Image Editing',
    desc: 'Premium Amazon & Flipkart listing images — white backgrounds, enhanced & conversion-ready.',
    color: '#fff0f6',
  },
  {
    icon: '🎬',
    title: 'Video Editing',
    desc: 'Promotional videos, reels & brand films that tell your story and convert viewers to clients.',
    color: '#fffbeb',
  },
  {
    icon: '🎨',
    title: 'Business Identity Design',
    desc: 'Visiting cards, letterheads & brand stationery that make every touchpoint premium.',
    color: '#f0fff4',
  },
]

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '80+', label: 'Happy Clients' },
  { value: '2', label: 'Countries Served' },
  { value: '5★', label: 'Client Rating' },
]

const testimonials = [
  {
    name: 'Arjun Mehta',
    role: 'Founder, StyleKart India',
    text: 'Digily Studio transformed our Amazon listings completely. Sales jumped 40% within a month of uploading the new product images. Absolutely professional work!',
    avatar: 'AM',
    rating: 5,
  },
  {
    name: 'Sara Al-Rashid',
    role: 'CEO, Bloom Events Dubai',
    text: 'They designed our entire brand identity — logo, website, and social media templates. The team understood our vision perfectly and delivered beyond expectations.',
    avatar: 'SA',
    rating: 5,
  },
  {
    name: 'Priya Nair',
    role: 'Director, Nair & Co.',
    text: 'The website they built for us is stunning and loads super fast. We\'ve been getting compliments from clients daily. Highly recommend Digily Studio!',
    avatar: 'PN',
    rating: 5,
  },
]

const whyUs = [
  {
    icon: '🚀',
    title: 'Fast Turnaround',
    desc: 'We move quickly without compromising quality. Most projects delivered ahead of schedule.',
  },
  {
    icon: '💡',
    title: 'Creative Excellence',
    desc: 'Every design decision is intentional — built to convert visitors into paying customers.',
  },
  {
    icon: '🤝',
    title: 'Dedicated Support',
    desc: 'We\'re available via WhatsApp 6 days a week. You\'ll never be left waiting for answers.',
  },
  {
    icon: '💰',
    title: 'Transparent Pricing',
    desc: 'No hidden fees, no surprise invoices. Clear packages for every budget, big or small.',
  },
]

/* ---- Component ---- */
function Home() {
  useScrollReveal()

  return (
    <div className={`page-enter ${styles.home}`}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroOrb1} />
          <div className={styles.heroOrb2} />
          <div className={styles.heroGrid} />
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={`${styles.heroBadge} fade-up`}>
              <span className="badge">🌍 Serving India & Dubai</span>
            </div>
            <h1 className={`${styles.heroTitle} fade-up`}>
              We Build Brands, Websites &{' '}
              <span className="gradient-text">Digital Experiences</span>
              {' '}That Grow Businesses
            </h1>
            <p className={`${styles.heroSub} fade-up`}>
              Full-service digital creative agency — from stunning websites and logos to Amazon product images and promotional videos. Your vision, elevated.
            </p>
            <div className={`${styles.heroCtas} fade-up`}>
              <Link to="/contact" className="btn-primary">
                Get a Free Quote
                <ArrowRight />
              </Link>
              <Link to="/portfolio" className="btn-secondary">
                View Our Work
              </Link>
            </div>
            <div className={`${styles.heroStats} fade-up`}>
              {stats.map(s => (
                <div key={s.label} className={styles.heroStat}>
                  <span className={styles.heroStatValue}>{s.value}</span>
                  <span className={styles.heroStatLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={`${styles.heroVisual} fade-up`}>
            <HeroIllustration />
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <div className="section-header fade-up">
            <span className="badge">What We Do</span>
            <h2>Services Built for <span className="gradient-text">Real Results</span></h2>
            <p>From first brand touchpoint to your e-commerce listing — we handle every pixel.</p>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`${styles.serviceCard} fade-up`}
                style={{ transitionDelay: `${i * 60}ms`, '--card-bg': s.color }}
              >
                <div className={styles.serviceIcon} style={{ background: s.color }}>
                  {s.icon}
                </div>
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className={styles.serviceDesc}>{s.desc}</p>
                <Link to="/services" className={styles.serviceLink}>
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
          <div className={styles.servicesCta}>
            <Link to="/services" className="btn-secondary fade-up">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className={`section ${styles.whySection}`}>
        <div className="container">
          <div className={styles.whyInner}>
            <div className={`${styles.whyLeft} fade-up`}>
              <span className="badge">Why Digily Studio</span>
              <h2>The Agency That <span className="gradient-text">Actually Delivers</span></h2>
              <p>
                We've worked with startups, D2C brands, and established businesses across India and Dubai. What sets us apart isn't just design — it's strategy, speed, and genuine care for your growth.
              </p>
              <Link to="/about" className="btn-primary" style={{ marginTop: '8px' }}>
                Our Story <ArrowRight />
              </Link>
            </div>
            <div className={styles.whyRight}>
              {whyUs.map((item, i) => (
                <div key={item.title} className={`${styles.whyCard} fade-up`} style={{ transitionDelay: `${i * 80}ms` }}>
                  <span className={styles.whyIcon}>{item.icon}</span>
                  <div>
                    <h4 className={styles.whyTitle}>{item.title}</h4>
                    <p className={styles.whyDesc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className={`section ${styles.portfolioSection}`}>
        <div className="container">
          <div className="section-header fade-up">
            <span className="badge">Our Work</span>
            <h2>Projects We're <span className="gradient-text">Proud Of</span></h2>
            <p>A glimpse into the brands and experiences we've crafted.</p>
          </div>
          <div className={styles.portfolioGrid}>
            {portfolioItems.map((item, i) => (
              <div
                key={item.title}
                className={`${styles.portfolioCard} fade-up`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={styles.portfolioThumb} style={{ background: item.bg }}>
                  <span className={styles.portfolioEmoji}>{item.emoji}</span>
                  <span className={styles.portfolioTag}>{item.tag}</span>
                </div>
                <div className={styles.portfolioInfo}>
                  <h4>{item.title}</h4>
                  <p>{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.portfolioCta}>
            <Link to="/portfolio" className="btn-primary fade-up">
              View Full Portfolio <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={`section ${styles.testimonialsSection}`}>
        <div className="container">
          <div className="section-header fade-up">
            <span className="badge">Client Love</span>
            <h2>What Our Clients <span className="gradient-text">Say</span></h2>
            <p>Real words from real businesses we've helped grow.</p>
          </div>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((t, i) => (
              <div key={t.name} className={`${styles.testimonialCard} fade-up`} style={{ transitionDelay: `${i * 100}ms` }}>
                <div className={styles.testimonialStars}>
                  {'★'.repeat(t.rating)}
                </div>
                <p className={styles.testimonialText}>"{t.text}"</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>{t.avatar}</div>
                  <div>
                    <strong className={styles.testimonialName}>{t.name}</strong>
                    <span className={styles.testimonialRole}>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={`${styles.ctaBox} fade-up`}>
            <div className={styles.ctaOrb} />
            <span className="badge" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>
              Ready to Start?
            </span>
            <h2 className={styles.ctaTitle}>
              Let's Build Something <br />Great Together
            </h2>
            <p className={styles.ctaSub}>
              Whether you need a website, brand identity, or product images — we're just one message away.
            </p>
            <div className={styles.ctaButtons}>
              <Link to="/contact" className={styles.ctaBtnWhite}>
                Get a Free Quote <ArrowRight />
              </Link>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <WhatsAppSmall /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ---- Portfolio Items ---- */
const portfolioItems = [
  { title: 'StyleKart E-Commerce', sub: 'Website Development', tag: 'Web', emoji: '🛍️', bg: 'linear-gradient(135deg, #eef0ff, #ddd6fe)' },
  { title: 'Bloom Events Brand', sub: 'Logo & Identity Design', tag: 'Branding', emoji: '🌸', bg: 'linear-gradient(135deg, #fff0f6, #fce7f3)' },
  { title: 'FreshHarvest Listings', sub: 'Amazon Product Images', tag: 'Product', emoji: '🥗', bg: 'linear-gradient(135deg, #f0fff4, #d1fae5)' },
  { title: 'TechFlow Promo Reel', sub: 'Video Editing', tag: 'Video', emoji: '🎬', bg: 'linear-gradient(135deg, #fffbeb, #fef3c7)' },
  { title: 'Luminary Skincare', sub: 'Social Media Pack', tag: 'Design', emoji: '✨', bg: 'linear-gradient(135deg, #f5f0ff, #ede9fe)' },
  { title: 'Nexus Consulting', sub: 'Business Identity Design', tag: 'Branding', emoji: '💼', bg: 'linear-gradient(135deg, #e8f4ff, #dbeafe)' },
]

/* ---- Icons ---- */
function ArrowRight({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="8" x2="13" y2="8" />
      <polyline points="9 4 13 8 9 12" />
    </svg>
  )
}

function WhatsAppSmall() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

function HeroIllustration() {
  return (
    <div className={styles.heroIllustration}>
      <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.heroSvg}>
        {/* Background Cards */}
        <rect x="20" y="40" width="200" height="130" rx="16" fill="white" filter="url(#shadow1)" />
        <rect x="260" y="20" width="200" height="100" rx="16" fill="white" filter="url(#shadow1)" />
        <rect x="20" y="195" width="200" height="100" rx="16" fill="white" filter="url(#shadow1)" />
        <rect x="260" y="145" width="200" height="170" rx="16" fill="white" filter="url(#shadow1)" />

        {/* Card 1: Website */}
        <rect x="36" y="60" width="168" height="8" rx="4" fill="#e8eaff" />
        <rect x="36" y="76" width="120" height="6" rx="3" fill="#f0f2ff" />
        <rect x="36" y="96" width="168" height="52" rx="8" fill="url(#grad1)" opacity="0.9" />
        <text x="120" y="128" textAnchor="middle" fill="white" fontSize="11" fontFamily="Inter" fontWeight="600">Website Dev</text>
        <text x="120" y="143" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="9" fontFamily="Inter">Launched 🚀</text>

        {/* Card 2: Branding */}
        <circle cx="282" cy="50" r="16" fill="url(#grad2)" />
        <text x="282" y="55" textAnchor="middle" fill="white" fontSize="12">✨</text>
        <rect x="306" y="40" width="136" height="8" rx="4" fill="#e8eaff" />
        <rect x="306" y="56" width="100" height="6" rx="3" fill="#f0f2ff" />
        <rect x="276" y="78" width="168" height="28" rx="6" fill="#f5f0ff" />
        <text x="360" y="97" textAnchor="middle" fill="#7c3aed" fontSize="10" fontFamily="Inter" fontWeight="600">Logo Delivered ✓</text>

        {/* Card 3: Product */}
        <rect x="36" y="210" width="80" height="70" rx="8" fill="url(#grad3)" opacity="0.8" />
        <text x="76" y="250" textAnchor="middle" fill="white" fontSize="20">📦</text>
        <rect x="126" y="215" width="78" height="7" rx="3" fill="#e8eaff" />
        <rect x="126" y="230" width="60" height="6" rx="3" fill="#f0f2ff" />
        <rect x="126" y="248" width="78" height="6" rx="3" fill="#f0f2ff" />
        <rect x="126" y="264" width="50" height="6" rx="3" fill="#f0f2ff" />

        {/* Card 4: Video + Social */}
        <rect x="276" y="164" width="168" height="90" rx="10" fill="url(#grad4)" opacity="0.85" />
        <text x="360" y="215" textAnchor="middle" fill="white" fontSize="28">🎬</text>
        <text x="360" y="240" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="10" fontFamily="Inter" fontWeight="600">Promo Video Ready</text>

        <rect x="276" y="270" width="168" height="30" rx="8" fill="#fff8f0" />
        <text x="360" y="289" textAnchor="middle" fill="#d97706" fontSize="10" fontFamily="Inter" fontWeight="600">Social Media Pack ★★★★★</text>

        {/* Floating badges */}
        <rect x="160" y="10" width="80" height="26" rx="13" fill="url(#grad1)" />
        <text x="200" y="27" textAnchor="middle" fill="white" fontSize="10" fontFamily="Inter" fontWeight="600">India 🇮🇳</text>

        <rect x="350" y="330" width="86" height="26" rx="13" fill="url(#grad2)" />
        <text x="393" y="347" textAnchor="middle" fill="white" fontSize="10" fontFamily="Inter" fontWeight="600">Dubai 🇦🇪</text>

        <defs>
          <filter id="shadow1" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#6366f1" floodOpacity="0.1" />
          </filter>
          <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#6366f1" />
            <stop offset="1" stopColor="#8b5cf6" />
          </linearGradient>
          <linearGradient id="grad2" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#8b5cf6" />
            <stop offset="1" stopColor="#0ea5e9" />
          </linearGradient>
          <linearGradient id="grad3" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#0ea5e9" />
            <stop offset="1" stopColor="#6366f1" />
          </linearGradient>
          <linearGradient id="grad4" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#4f46e5" />
            <stop offset="1" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default Home