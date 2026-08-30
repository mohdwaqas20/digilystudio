import React, { useState, useEffect } from 'react'
import styles from './Portfolio.module.css'
import { IMAGES } from '../assets/images'

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
    title: 'Leezoo E-Commerce Platform',
    category: 'websites',
    description: 'Custom full-stack e-commerce website built for a luxury streetwear brand. Features clean minimalist UI and responsive design.',
    image: '🛍️',
    img: IMAGES.webDevMockup,
    bg: 'linear-gradient(135deg, #1a1830, #241f38)',
    tags: ['React', 'Vite', 'Supabase', 'E-commerce'],
    websiteLink: 'https://www.leezoo.in', 
    postLink: '',
  },
  {
    id: 2,
    title: 'Ayat Exims',
    category: 'websites',
    description: 'Professional corporate website and B2B portal designed for a leather manufacturing and export company.',
    image: '💼',
    bg: 'linear-gradient(135deg, #10241a, #123021)',
    tags: ['Corporate Website', 'B2B Portal', 'Frontend Development'],
    websiteLink: 'https://mohdwaqas20.github.io/ayat-exims/', // Replace with the actual link
    postLink: '',
  },
  {
    id: 3,
    title: 'Personal Developer Portfolio',
    category: 'websites',
    description: 'Modern developer portfolio showcasing web development projects, UI/UX skills, and technical capabilities.',
    image: '👨‍💻',
    bg: 'linear-gradient(135deg, #131b28, #101c2c)',
    tags: ['Web Design', 'UI/UX', 'Frontend'],
    websiteLink: 'https://mohdwaqas20.github.io/CodeAlpha_Portfolio_Website/#', // Replace with your portfolio link
    postLink: '',
  },
  {
    id: 4,
    title: 'Leezoo Luxury Streetwear',
    category: 'branding',
    description: 'Complete brand identity focusing on a premium aesthetic, including naming, logo design, and brand guidelines.',
    image: '✨',
    img: IMAGES.brandingMockup,
    bg: 'linear-gradient(135deg, #241522, #2c1826)',
    tags: ['Brand Identity', 'Logo Design', 'Luxury Aesthetic'],
    websiteLink: 'https://www.leezoo.in',
    postLink: '',
  },
  {
    id: 10,
    title: 'Social Content System',
    category: 'design',
    description: 'A cohesive grid of social media creatives designed to keep a brand feed consistent, premium, and scroll-stopping.',
    image: '📱',
    img: IMAGES.socialMockup,
    bg: 'linear-gradient(135deg, #101c2c, #131b28)',
    tags: ['Social Media', 'Content Design', 'Brand Consistency'],
    websiteLink: '',
    postLink: '',
  },
  {
    id: 5,
    title: 'Product Promotional Video',
    category: 'videos',
    description: 'Dynamic promotional video generated using AI, transforming static product photos into engaging social media content.',
    image: '🎬',
    img: IMAGES.videoEditingMockup,
    bg: 'linear-gradient(135deg, #2a2110, #332714)',
    tags: ['AI Video', 'Social Media', 'Product Promo'],
    websiteLink: '',
    postLink: 'https://www.instagram.com/reel/DZKcuYgvRA5/?igsh=MXcxdzA5NDM5eTl0bw==', // Replace with your social media post link
  },
  {
    id: 6,
    title: 'Product Promotional Video',
    category: 'videos',
    description: 'High-quality promotional reel designed to capture attention and drive product sales on digital platforms.',
    image: '🪄',
    bg: 'linear-gradient(135deg, #1e1a2e, #201c33)',
    tags: ['Video Editing', 'AI Generation', 'E-commerce'],
    websiteLink: '',
    postLink: 'https://www.instagram.com/reel/DZHqsWGvjvg/?igsh=Y2E0dmo4eWMyaHFw', 
  },
  {
    id: 7,
    title: 'Product Promotional Video',
    category: 'videos',
    description: 'Short-form video content created to highlight product features and boost brand engagement.',
    image: '📱',
    bg: 'linear-gradient(135deg, #332714, #33220f)',
    tags: ['Promotional Video', 'Reels', 'Brand Awareness'],
    websiteLink: '',
    postLink: 'https://www.instagram.com/reel/DZFePhFPnF0/?igsh=MXJhdXcxNmFsMXc3bA==', 
  },
  {
    id: 8,
    title: 'Product Promotional Video',
    category: 'videos',
    description: 'Visually striking product showcase video engineered to stop the scroll and convert viewers into buyers.',
    image: '🚀',
    bg: 'linear-gradient(135deg, #dcfce7, #123322)',
    tags: ['AI Video', 'Product Showcase', 'Marketing'],
    websiteLink: '',
    postLink: 'https://www.instagram.com/reel/DZXlGyIS4V0/?igsh=emlxMDduNXhkcjRl', 
  },
  {
    id: 9,
    title: 'Product Promotional Video',
    category: 'videos',
    description: 'A beautifully rendered promotional video demonstrating the product in a modern, cinematic style.',
    image: '🎥',
    bg: 'linear-gradient(135deg, #2c1826, #2c1826)',
    tags: ['Video Editing', 'Motion Content', 'Social Ads'],
    websiteLink: '',
    postLink: 'https://www.instagram.com/reel/DZh7T-_ynEz/?igsh=MXNuYnE5ZTZpMGx5Yg==', 
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
              Premium Digital Experiences.{' '}
              <span className="gradient-text">Built for Growth.</span>
            </h1>
            <p>
              We partner with growing startups and established businesses to build custom e-commerce platforms, corporate portals, and dynamic visuals that stand out.
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
                  {project.img ? (
                    <img
                      src={project.img}
                      alt={project.title}
                      className={styles.projectImg}
                      loading="lazy"
                    />
                  ) : (
                    <span className={styles.projectEmoji}>{project.image}</span>
                  )}
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
                  {(project.websiteLink || project.postLink) && (
                    <div className={styles.projectActions}>
                      {project.websiteLink && (
                        <a
                          href={project.websiteLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.actionBtn}
                        >
                          View Project <span className={styles.btnArrow}>→</span>
                        </a>
                      )}
                      {project.postLink && (
                        <a
                          href={project.postLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.actionBtn}
                        >
                          View Project <span className={styles.btnArrow}>→</span>
                        </a>
                      )}
                    </div>
                  )}
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
              <a href="https://wa.me/919984090593" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
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