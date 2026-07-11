import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import './SoftwareDevelopment.css'

const projects = [
  {
    id: 's360',
    name: 'S360',
    tag: 'School Management Application',
    icon: '\u{1F393}',
    orbit: ['\u{1F4DA}', '\u{1F4DD}', '\u{1F4B3}', '\u{1F514}'],
    accent: '#4f7cff',
    desc: 'S360 is a complete school management application built to simplify daily operations for schools, teachers, students, and parents — from admissions to results, all in one place.',
    features: [
      'Admissions & student enrollment',
      'Attendance tracking for students and staff',
      'Timetable and exam management',
      'Fee collection and online payments',
      'Report cards and performance tracking',
      'Parent-teacher communication portal',
    ],
  },
  {
    id: 'gym-genie',
    name: 'Gym-Genie',
    tag: 'Gym Management Application',
    icon: '\u{1F3CB}️',
    orbit: ['\u{1F4AA}', '\u{23F1}️', '\u{1F4C5}', '\u{1F4C8}'],
    accent: '#ff7a45',
    desc: 'Gym-Genie helps gym owners manage memberships, billing, and trainers from a single dashboard, while giving members a smooth experience from sign-up to check-in.',
    features: [
      'Membership plans and renewals',
      'Automated billing and invoicing',
      'Trainer and class scheduling',
      'Member check-in and attendance',
      'Progress tracking and engagement tools',
      'Reports on revenue and retention',
    ],
  },
  {
    id: 'erp',
    name: 'Full ERP',
    tag: 'Customizable Enterprise Suite',
    icon: '\u{1F3ED}',
    orbit: ['\u{1F4B0}', '\u{1F4E6}', '\u{1F465}', '\u{1F4CA}'],
    accent: '#22c98a',
    desc: 'Our full ERP model is a customizable, modular system that can be adopted for any industry — giving you one platform to manage finance, inventory, HR, sales, and operations.',
    features: [
      'Finance & accounting',
      'Inventory and supply chain management',
      'HR, payroll, and workforce management',
      'Sales, CRM, and order management',
      'Custom modules tailored to your industry',
      'Centralized reporting and analytics',
    ],
  },
]

function SoftwareDevelopment() {
  return (
    <>
      <section className="section section-navy page-hero">
        <div className="blob-field">
          <span className="blob blob-1"></span>
          <span className="blob blob-2"></span>
        </div>
        <div className="container center hero-inner">
          <span className="eyebrow">AI-Driven Software Development</span>
          <h1>Products &amp; custom applications we build</h1>
          <p className="lede">
            We design, develop, and maintain purpose-built software — using
            AI-assisted engineering to move faster — from ready-to-adopt
            products like S360 and Gym-Genie to fully customized ERP systems
            for any industry.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {projects.map((p, i) => (
            <Reveal as="div" className={`project-row ${i % 2 === 1 ? 'reverse' : ''}`} key={p.id}>
              <div id={p.id} className="project-visual">
                <div className="project-visual-stage" style={{ '--accent': p.accent }}>
                  <span className="visual-glow"></span>
                  <span className="visual-ring ring-1"></span>
                  <span className="visual-ring ring-2"></span>
                  <div className="project-visual-icon">{p.icon}</div>
                  <div className="orbit-track">
                    {p.orbit.map((o, oi) => (
                      <span className="orbit-item" style={{ '--i': oi, '--n': p.orbit.length }} key={o + oi}>
                        {o}
                      </span>
                    ))}
                  </div>
                  <span className="sparkle sparkle-1"></span>
                  <span className="sparkle sparkle-2"></span>
                  <span className="sparkle sparkle-3"></span>
                </div>
              </div>
              <div className="project-content">
                <span className="tag">{p.tag}</span>
                <h2>{p.name}</h2>
                <p>{p.desc}</p>
                <ul className="feature-list">
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <div className="btn-row">
                  <Link to="/contact" className="btn btn-primary">Discuss this project</Link>
                  <Link to={`/software-development/${p.id}`} className="btn btn-outline">Read more...</Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container center">
          <Reveal as="span" className="eyebrow">Our Approach</Reveal>
          <Reveal as="h2" delay={80}>How we build your software</Reveal>
          <div className="grid grid-4 process-grid">
            <Reveal className="card">
              <div className="card-icon">1</div>
              <h3>Discover</h3>
              <p>We learn your business, users, and goals to define the right scope.</p>
            </Reveal>
            <Reveal delay={100} className="card">
              <div className="card-icon">2</div>
              <h3>Design</h3>
              <p>We map out workflows and interfaces that are simple to use.</p>
            </Reveal>
            <Reveal delay={200} className="card">
              <div className="card-icon">3</div>
              <h3>Develop</h3>
              <p>We build in iterative cycles using AI-assisted tooling, so you see progress early and often.</p>
            </Reveal>
            <Reveal delay={300} className="card">
              <div className="card-icon">4</div>
              <h3>Support</h3>
              <p>We deploy, monitor, and continue to improve your application.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-navy cta-section">
        <div className="container center">
          <h2>Need something custom?</h2>
          <p className="lede">
            Whether it's adopting S360, Gym-Genie, or building your own ERP,
            let's talk about what you need.
          </p>
          <div className="btn-row center">
            <Link to="/contact" className="btn btn-primary">Start a Conversation</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default SoftwareDevelopment
