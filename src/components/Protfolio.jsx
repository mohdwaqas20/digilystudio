import React, { useState, useEffect } from 'react'
import styles from './Portfolio.module.css'

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

const allProjects = [
  {
    id: 1,
    title: 'StyleKart E-Commerce Platform',
    category: 'websites',
    description: 'Full-stack e-commerce website with product filtering, cart management, and payment integration.',
    image: '🛍️',
    bg: 'linear-gradient(135deg, #eef0ff, #ddd6fe)',
    tags: ['React', 'Node.js', 'MongoDB', 'Payment Gateway'],
  },
  {
    id: 2,
    title: 'Bloom Events Brand Identity',
    category: 'branding',
    description: 'Complete brand identity including logo, color palette, typography system, and brand guidelines.',
    image: '🌸',
    bg: 'linear-gradient(135deg, #fff0f6, #fce7f3)',
    tags: ['Logo Design', 'Brand Guidelines', 'Color Palette'],
  },
  {
    id: 3,
    title: 'FreshHarvest Amazon Listings',
    category: 'product-images',
    description: 'Premium product images with white background, lifestyle mockups, and feature highlights for 50+ SKUs.',
    image: '🥗',
    bg: 'linear-gradient(135deg, #f0fff4, #d1fae5)',
    tags: ['Product Photography', 'Retouching', 'Amazon Optimization'],
  },
  {
    id: 4,
    title: 'TechFlow Promo Reel',
    category: 'videos',
    description: '60-second promotional video with motion graphics, color grading, and background music.',
    image: '🎬',
    bg: 'linear-gradient(135deg, #fffbeb, #fef3c7)',
    tags: ['Video Editing', 'Motion Graphics', 'Color Grading'],
  },
  {
    id: 5,
    title: 'Luminary Skincare Social Pack',
    category: 'design',
    description: 'Complete social media design pack - 30 posts, stories, highlights, and Canva templates for 3 months.',
    image: '✨',
    bg: 'linear-gradient(135deg, #f5f0ff, #ede9fe)',
    tags: ['Social Media', 'Canva Templates', 'Instagram'],
  },
  {
    id: 6,
    title: 'Nexus Consulting Website',
    category: 'websites',
    description: 'Corporate website with service showcase, team section, client testimonials, and contact forms.',
    image: '💼',
    bg: 'linear-gradient(135deg, #e8f4ff, #dbeafe)',
    tags: ['Web Design', 'WordPress', 'SEO'],
  },
  {
    id: 7,
    title: 'Urban Cafe Brand Identity',
    category: 'branding',
    description: 'Logo redesign, menu design, storefront signage, and social media branding for trendy cafe chain.',
    image: '☕',
    bg: 'linear-gradient(135deg, #fef3c7, #fed7aa)',
    tags: ['Logo Redesign', 'Menu Design', 'Brand Collateral'],
  },
  {
    id: 8,
    title: 'ElectroHub Flipkart Optimization',
    category: 'product-images',
    description: 'Enhanced product images for 30+ electronics with spec infographics and lifestyle compositions.',
    image: '⚡',
    bg: 'linear-gradient(135deg, #d1fae5, #a7f3d0)',
    tags: ['Flipkart Listing', 'Infographics', 'Retouching'],
  },
  {
    id: 9,
    title: 'Summit Fitness Video Campaign',
    category: 'videos',
    description: 'Instagram Reels series (15 videos) for fitness brand launch campaign with trending audio.',
    image: '💪',
    bg: 'linear-gradient(135deg, #fce7f3, #fbcfe8)',
    tags: ['Reels Editing', 'Audio Sync', 'Social Video'],
  },
  {
    id: 10,
    title: 'DevStudio Portfolio Website',
    category: 'websites',
    description: 'Modern developer portfolio with project showcase, blog, and interactive skill visualization.',
    image: '💻',
    bg: 'linear-gradient(135deg, #e0e7ff, #dbeafe)',
    tags: ['Web Design', 'Next.js', 'Interactive'],
  },
  {
    id: 11,
    title: 'Artisan Bakery Business Cards',
    category: 'design',
    description: 'Premium visiting cards, box design, and email signature for artisanal bakery business.',
    image: '🍰',
    bg: 'linear-gradient(135deg, #fef3c7, #fde68a)',
    tags: ['Business Cards', 'Packaging', 'Brand Collateral'],
  },
  {
    id: 12,
    title: 'GreenLeaf Eco Brand Campaign',
    category: 'design',
    description: 'Comprehensive social media campaign for eco-friendly products - 60 graphics over 3 months.',
    image: '🌱',
    bg: 'linear-gradient(135deg, #dcfce7, #bbf7d0)',
    tags: ['Social Media', 'Campaign Design', 'Sustainability'],
  },
]

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'websites', label: 'Websites' },
  { id: 'branding', label: 'Branding' },
  { id: 'design', label: 'Social & Design' },
  { id: 'product-images', label: 'Product Images' },
  { id: 'videos', label: 'Videos' },
]

function Portfolio() {
  useScrollReveal()
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects = activeCategory === 'all'
    ? allProjects
    : allProjects.filter(p => p.category === activeCategory)

  return (
    <div className={`page-enter ${styles.portfolio}`}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={`${styles.heroContent} fade-up`}>
            <span className="badge">Our Portfolio</span>
            <h1>
              150+ Projects. 80+ Happy Clients.{' '}
              <span className="gradient-text">Infinite Possibilities.</span>
            </h1>
            <p>
              From stunning websites and brand identities to captivating videos and conversion-optimized product images — here's what we've created for brands across India and Dubai.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className={`section ${styles.filterSection}`}>
        <div className="container">
          <div className={`${styles.filterControls} fade-up`}>
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.active : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className={`section ${styles.gridSection}`}>
        <div className="container">
          <div className={styles.projectsGrid}>
            {filteredProjects.map((project, i) => (
              <div
                key={project.id}
                className={`${styles.projectCard} fade-up`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className={styles.projectImage} style={{ background: project.bg }}>
                  <span className={styles.projectEmoji}>{project.image}</span>
                  <span className={styles.projectBadge}>{categories.find(c => c.id === project.category)?.label}</span>
                </div>
                <div className={styles.projectInfo}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDesc}>{project.description}</p>
                  <div className={styles.projectTags}>
                    {project.tags.map(tag => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={`${styles.ctaBox} fade-up`}>
            <h2>Want to See More?</h2>
            <p>These are just a few of our favorites. Let's create something amazing together.</p>
            <div className={styles.ctaBtns}>
              <a href="#" className="btn-primary" onClick={(e) => {
                e.preventDefault()
                document.querySelector('a[href*="contact"]')?.click()
              }}>
                Get a Free Quote
              </a>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio