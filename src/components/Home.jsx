import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import Hero3D from './Hero3D'
import { IMAGES } from '../assets/images'

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
    title: 'Custom Web Development',
    desc: 'We build complete, high-performance websites from scratch, handling both responsive front-end design and secure back-end systems.',
    color: '#1a1830',
  },
  {
    icon: '✨',
    title: 'Brand Naming & Logo Design',
    desc: 'We provide creative brand name suggestions and design premium, memorable logos to capture your unique business identity.',
    color: '#1e1a2e',
  },
  {
    icon: '📱',
    title: 'E-commerce Setup',
    desc: 'We build secure, fully functional e-commerce platforms designed to showcase your products and drive online sales.',
    color: '#131b28',
  },
  {
    icon: '📦',
    title: 'AI & Product Image Editing',
    desc: 'We create clean, white-background listing photos and use advanced AI to generate realistic model-wearing shots for your products.',
    color: '#241522',
  },
  {
    icon: '🎬',
    title: 'AI Video Generation',
    desc: 'Send us a standard product photo, and we will use cutting-edge AI to transform it into a stunning, dynamic promotional video.',
    color: '#2a2110',
  },
  {
    icon: '🎨',
    title: 'Business Identity Design',
    desc: 'We design professional visiting cards, letterheads, and brand stationery to give your business a cohesive, premium look.',
    color: '#10241a',
  },
]

const stats = [
  { value: '100%', label: 'Custom Designs' },
  { value: '1-on-1', label: 'Client Support' },
  { value: 'Global', label: 'Client Reach' },
]

const testimonials = [
  {
    name: 'Praveen',
    role: 'Co-Founder, Leezoo',
    text: 'Digily Studio brought our luxury streetwear brand to life. The custom e-commerce website they built is incredibly fast, clean, and perfectly captures our premium aesthetic. Outstanding web development work!',
    avatar: 'PR',
    rating: 5,
  },
  {
    name: 'Ali Imran',
    role: 'Operations, Ayat Exims',
    text: 'We needed a professional B2B portal to help us connect with international clients, and they delivered exactly that. The corporate website is polished, responsive, and positions our manufacturing business perfectly.',
    avatar: 'AI',
    rating: 5,
  },
  {
    name: 'Vishal',
    role: 'Co-Founder, Leezoo',
    text: 'The AI promotional videos and brand identity design gave our product launch a massive boost. They turned our flat product photos into dynamic, high-end content that looks amazing on our social media.',
    avatar: 'VI', // You can change this to their initials
    rating: 5,
  },
]

const whyUs = [
  {
    icon: '🚀',
    title: 'Fast & Flawless Execution',
    desc: 'We move quickly without compromising on clean code or design quality. Your project stays on track and on time.',
  },
  {
    icon: '💡',
    title: 'Built From Scratch',
    desc: 'No generic templates here. Every website and brand identity is custom-crafted to make your business stand out globally.',
  },
  {
    icon: '🤝',
    title: 'Direct Founder Access',
    desc: 'Skip the agency middlemen. You work directly with us, ensuring crystal-clear communication and fast answers when you need them.',
  },
  {
    icon: '💰',
    title: 'Transparent Pricing',
    desc: 'No hidden fees or surprise invoices. We provide clear, honest project quotes tailored to your startup or small business budget.',
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
              <span className="badge">🌍 SERVING CLIENTS WORLDWIDE</span>
            </div>
            <h1 className={`${styles.heroTitle} fade-up`}>
              Elevating {' '}
              <span className="gradient-text">Small Businesses</span>
              {' '}With Custom Websites & Branding.
            </h1>
            <p className={`${styles.heroSub} fade-up`}>
              A full-service digital agency helping small businesses, startups, and local brands stand out online. From custom web development to complete digital branding, we transform your ideas into modern, high-performing digital experiences. Your vision, elevated.
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
            <img
              src={IMAGES.heroAbstract}
              alt=""
              aria-hidden="true"
              className={styles.heroGlow}
            />
            <Hero3D />
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
              <h2>The Studio That <span className="gradient-text">Actually Delivers</span></h2>
              <p>
                We partner with startups, small businesses, and growing brands worldwide. What sets us apart isn't just clean code or beautiful design — it's our direct approach, fast execution, and genuine care for your digital growth.
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
                  {item.link && (
                    <div className={styles.portfolioBtnWrap}>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.portfolioActionBtn}
                      >
                        View Project <span className={styles.btnArrow}>→</span>
                      </a>
                    </div>
                  )}
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
              <a href="https://wa.me/919984090593" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <WhatsAppSmall /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


const portfolioItems = [
  { 
    title: 'Leezoo E-Commerce', 
    sub: 'Custom Web Development', 
    tag: 'Web', 
    emoji: '🛒', 
    bg: 'linear-gradient(135deg, #1a1830, #241f38)',
    link: 'https://www.leezoo.in',
  },
  { 
    title: 'Product Promotional Video', 
    sub: 'AI Video Generation', 
    tag: 'Video', 
    emoji: '🎬', 
    bg: 'linear-gradient(135deg, #2a2110, #332714)',
    link: 'https://www.instagram.com/reel/DZKcuYgvRA5/?igsh=MXcxdzA5NDM5eTl0bw==',
  },
  { 
    title: 'Leezoo Luxury Streetwear', 
    sub: 'Brand Identity & Aesthetic', 
    tag: 'Branding', 
    emoji: '✨', 
    bg: 'linear-gradient(135deg, #241522, #2c1826)',
    link: 'https://www.leezoo.in',
  },
  
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


export default Home