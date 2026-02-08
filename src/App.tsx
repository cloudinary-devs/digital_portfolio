import { useState, useEffect } from 'react'
import './App.css'

// Cloudinary Demo account with CC0 licensed images/videos
const CLOUDINARY_DEMO = 'https://res.cloudinary.com/demo'
// Cloudinary training/docs videos
const CLOUDINARY_RES = 'https://cloudinary-res.cloudinary.com'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Portfolio projects with Cloudinary CC0 images
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      image: 'business_guy_laptop_coffee',
      description: 'Modern shopping experience with real-time inventory',
      tech: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Fashion Lookbook',
      category: 'design',
      image: 'docs/pattern-dress',
      description: 'Interactive fashion catalog with AR try-on',
      tech: ['Three.js', 'WebGL', 'Vue']
    },
    {
      id: 3,
      title: 'Mountain Adventure App',
      category: 'mobile',
      image: 'woman_mountain_ledge',
      description: 'Outdoor activity tracker with GPS navigation',
      tech: ['React Native', 'Firebase', 'Maps API']
    },
    {
      id: 4,
      title: 'Luxury Fashion Brand',
      category: 'web',
      image: 'docs/catwalk',
      description: 'Premium brand website with stunning visuals',
      tech: ['Next.js', 'Tailwind', 'Framer Motion']
    },
    {
      id: 5,
      title: 'Lifestyle Blog',
      category: 'design',
      image: 'docs/street-women',
      description: 'Content-rich platform with social integration',
      tech: ['Gatsby', 'GraphQL', 'Contentful']
    },
    {
      id: 6,
      title: 'Product Showcase',
      category: 'web',
      image: 'docs/prod-shoes1',
      description: '3D product viewer with zoom capabilities',
      tech: ['React', 'WebGL', 'GSAP']
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  const skills = [
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'UI/UX Design', level: 88 },
    { name: 'Performance', level: 92 },
    { name: 'Accessibility', level: 87 }
  ]

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className={`nav ${isVisible ? 'visible' : ''}`}>
        <div className="nav-container">
          <a href="#home" className="logo">AM</a>
          <button 
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#work" onClick={() => setIsMenuOpen(false)}>Work</a></li>
            <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section with Cloudinary Transformations */}
      <section id="home" className="hero-section">
        <div className="hero-background">
          {/* Background image with blur, overlay, and gradient effects - CC0 from demo */}
          <img 
            src={`${CLOUDINARY_DEMO}/image/upload/c_fill,g_auto,h_1080,w_1920/e_blur:800/f_auto/q_auto/vieste_italy.jpg`}
            alt="Background"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-profile">
            {/* Circular profile image with border effects and AI-enhanced quality - CC0 from demo */}
            <img 
              src={`${CLOUDINARY_DEMO}/image/upload/c_fill,g_face,h_300,w_300/r_max/e_improve/bo_8px_solid_rgb:ffffff/f_auto/q_auto:best/docs/profile-pic1.jpg`}
              alt="Alex Morgan"
              className="profile-image"
            />
          </div>
          <h1 className="hero-title">
            <span className="title-line">Hi, I'm Alex Morgan</span>
            <span className="title-line gradient-text">Frontend Developer</span>
          </h1>
          <p className="hero-subtitle">
            Crafting beautiful, performant web experiences with modern technologies
          </p>
          <div className="hero-cta">
            <a href="#work" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-image">
              {/* Image with artistic effects - larger for desktop clarity - Same person as hero - CC0 from demo */}
              <img 
                src={`${CLOUDINARY_DEMO}/image/upload/c_fill,g_auto,h_800,w_700/e_vignette:30/e_sharpen:100/r_20/bo_1px_solid_rgb:e0e0e0/f_auto/q_auto/docs/profile-pic1.jpg`}
                alt="About me"
              />
            </div>
            <div className="about-text">
              <h3>Passionate about creating exceptional digital experiences</h3>
              <p>
                With over 6 years of experience in frontend development, I specialize in building 
                responsive, accessible, and performant web applications. My expertise spans modern 
                JavaScript frameworks, UI/UX design, and progressive web technologies.
              </p>
              <p>
                I believe in writing clean, maintainable code and staying current with the latest 
                web standards. When I'm not coding, you'll find me exploring new design trends, 
                contributing to open-source projects, or mentoring aspiring developers.
              </p>
              <div className="stats">
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat">
                  <span className="stat-number">6+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">30+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section with Gallery */}
      <section id="work" className="work-section">
        <div className="container">
          <h2 className="section-title">Featured Work</h2>
          <div className="filter-buttons">
            <button 
              className={activeFilter === 'all' ? 'active' : ''}
              onClick={() => setActiveFilter('all')}
            >
              All
            </button>
            <button 
              className={activeFilter === 'web' ? 'active' : ''}
              onClick={() => setActiveFilter('web')}
            >
              Web
            </button>
            <button 
              className={activeFilter === 'mobile' ? 'active' : ''}
              onClick={() => setActiveFilter('mobile')}
            >
              Mobile
            </button>
            <button 
              className={activeFilter === 'design' ? 'active' : ''}
              onClick={() => setActiveFilter('design')}
            >
              Design
            </button>
          </div>
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  {/* Responsive images with automatic format, quality optimization - CC0 from demo */}
                  <img 
                    src={`${CLOUDINARY_DEMO}/image/upload/c_fill,g_auto,h_400,w_600/e_saturation:20/f_auto/q_auto/${project.image}.jpg`}
                    alt={project.title}
                  />
                  <div className="project-overlay">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tech-stack">
                      {project.tech.map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="video-section">
        <div className="container">
          <h2 className="section-title">Development Process</h2>
          <div className="video-grid">
            <div className="video-card">
              {/* Video with transformation: man and woman discussing over mobile - CC0 from demo */}
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                poster={`${CLOUDINARY_DEMO}/video/upload/so_0/c_fill,g_auto,h_400,w_600/f_jpg/q_auto/guy_woman_mobile.jpg`}
              >
                <source 
                  src={`${CLOUDINARY_DEMO}/video/upload/c_fill,h_400,w_600/f_auto/q_auto/guy_woman_mobile.mp4`} 
                  type="video/mp4" 
                />
              </video>
              <div className="video-caption">Design & Planning</div>
            </div>
            <div className="video-card">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                poster={`${CLOUDINARY_RES}/video/upload/so_133/c_pad,h_400,w_600,b_rgb:4a5568/f_jpg/q_auto/training/Uploading_Images_Videos_in_Laravel_with_Cloudinary-.jpg`}
              >
                <source 
                  src={`${CLOUDINARY_RES}/video/upload/so_133,eo_147/c_pad,h_400,w_600,b_rgb:4a5568/f_auto/q_auto/training/Uploading_Images_Videos_in_Laravel_with_Cloudinary-.mp4`} 
                  type="video/mp4" 
                />
              </video>
              <div className="video-caption">Code in Action</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="skills-content">
            <div className="skills-image">
              {/* Image with effects - CC0 from demo */}
              <img 
                src={`${CLOUDINARY_DEMO}/image/upload/c_fill,g_auto,h_500,w_400/e_grayscale/e_brightness:20/r_20/f_auto/q_auto/docs/coffee-man.jpg`}
                alt="Skills"
              />
            </div>
            <div className="skills-list">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-fill" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Clients Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-image">
                {/* Circular client photo - woman - tighter face crop - CC0 from demo */}
                <img 
                  src={`${CLOUDINARY_DEMO}/image/upload/c_thumb,g_face,h_300,w_300/e_sharpen:80/r_max/f_auto/q_auto/business_woman_laptop.jpg`}
                  alt="Client"
                />
              </div>
              <p className="testimonial-text">
                "Alex delivered an outstanding website that exceeded our expectations. 
                The attention to detail and performance optimization was impressive!"
              </p>
              <p className="testimonial-author">Sarah Johnson</p>
              <p className="testimonial-role">CEO, TechStart</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-image">
                {/* Circular client photo - man - tighter face crop - CC0 from demo */}
                <img 
                  src={`${CLOUDINARY_DEMO}/image/upload/c_thumb,g_face,h_300,w_300/e_sharpen:80/r_max/f_auto/q_auto/office_plaid_shirt_closeup.jpg`}
                  alt="Client"
                />
              </div>
              <p className="testimonial-text">
                "Working with Alex was a pleasure. Professional, responsive, and 
                delivered a beautiful, fast website that our users love."
              </p>
              <p className="testimonial-author">Michael Chen</p>
              <p className="testimonial-role">Founder, DesignCo</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-image">
                {/* Circular client photo - woman front facing - tighter face crop - CC0 from demo */}
                <img 
                  src={`${CLOUDINARY_DEMO}/image/upload/c_thumb,g_face,h_300,w_300/r_max/f_auto/q_auto/docs/profile-pic.jpg`}
                  alt="Client"
                />
              </div>
              <p className="testimonial-text">
                "The level of craftsmanship in Alex's work is exceptional. Every detail 
                is polished and the end result speaks for itself."
              </p>
              <p className="testimonial-author">Emily Rodriguez</p>
              <p className="testimonial-role">Marketing Director, StyleHub</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Let's Work Together</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Get In Touch</h3>
              <p>
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>alex.morgan@email.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>San Francisco, CA</span>
                </div>
              </div>
              <div className="social-links">
                <a href="https://github.com/cloudinary-devs/digital_portfolio" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">Dribbble</a>
              </div>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Subject" required />
              <textarea placeholder="Your Message" rows={6} required></textarea>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Alex Morgan. All rights reserved.</p>
          <p className="powered-by">Powered by Cloudinary</p>
        </div>
      </footer>
    </div>
  )
}

export default App
