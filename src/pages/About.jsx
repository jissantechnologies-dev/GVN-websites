import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import './About.css'

const milestones = [
  {
    year: '2013',
    title: 'Founded',
    desc: 'Gain Valuable Solution was founded to help businesses build reliable, custom software.',
  },
  {
    year: 'Growth',
    title: 'Products & Consulting',
    desc: 'We grew into a company with our own products — S360, Gym-Genie, and a customizable ERP suite — alongside a flexible consulting practice.',
  },
  {
    year: 'Today',
    title: 'AI-First SDLC',
    desc: 'Every stage of our software development lifecycle is powered by AI-assisted tooling, from planning to deployment.',
  },
]

const sdlcStages = [
  {
    icon: '\u{1F4A1}',
    title: 'Plan & Discover',
    desc: 'AI-assisted research and requirement analysis help us scope projects faster and more accurately.',
  },
  {
    icon: '\u{1F3A8}',
    title: 'Design',
    desc: 'AI-supported prototyping speeds up UX exploration so we can validate ideas earlier.',
  },
  {
    icon: '\u{1F9E9}',
    title: 'Develop',
    desc: 'AI pair-programming and code generation accelerate delivery without compromising quality.',
  },
  {
    icon: '✅',
    title: 'Test',
    desc: 'AI-driven test generation and analysis help us catch issues earlier and ship with confidence.',
  },
  {
    icon: '\u{1F680}',
    title: 'Deploy',
    desc: 'Automated, AI-assisted pipelines make releases faster and more predictable.',
  },
  {
    icon: '\u{1F4CA}',
    title: 'Monitor & Improve',
    desc: 'AI-powered monitoring helps us catch issues and opportunities for improvement early.',
  },
]

function About() {
  return (
    <>
      <section className="section section-navy page-hero">
        <div className="blob-field">
          <span className="blob blob-1"></span>
          <span className="blob blob-2"></span>
        </div>
        <div className="container center hero-inner">
          <span className="eyebrow">About Us</span>
          <h1>Building valuable software since 2013</h1>
          <p className="lede">
            Gain Valuable Solution started in 2013 with a simple goal: build
            software that genuinely helps businesses run better. Today,
            we've evolved into a fully AI-first software development
            company — using AI across every stage of our SDLC to deliver
            faster, smarter, and more reliable results.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-story">
            <Reveal className="about-story-copy">
              <span className="eyebrow">Our Story</span>
              <h2>From a small team to an AI-first company</h2>
              <p>
                Since 2013, we've worked with schools, gyms, and enterprises
                to design and build software that solves real problems. Along
                the way, we grew from custom development projects into a
                company with our own products — S360, Gym-Genie, and a fully
                customizable ERP suite — plus a flexible consulting practice
                that helps businesses scale their technical teams.
              </p>
              <p>
                Today, AI is embedded in how we work — not as an add-on, but
                as the foundation of our software development lifecycle. From
                planning and design to development, testing, deployment, and
                monitoring, AI-assisted tooling helps our team move faster
                and deliver higher-quality software.
              </p>
              <Link to="/contact" className="btn btn-primary">Work with us</Link>
            </Reveal>

            <Reveal delay={150} className="about-timeline">
              {milestones.map((m) => (
                <div className="timeline-item" key={m.year}>
                  <div className="timeline-year">{m.year}</div>
                  <div className="timeline-body">
                    <h3>{m.title}</h3>
                    <p>{m.desc}</p>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container center">
          <Reveal as="span" className="eyebrow">AI-First SDLC</Reveal>
          <Reveal as="h2" delay={80}>AI, built into every stage of delivery</Reveal>
          <Reveal as="p" delay={140} className="lede">
            We don't just use AI tools on the side — our entire software
            development lifecycle is designed around them.
          </Reveal>
          <div className="grid grid-3">
            {sdlcStages.map((s, i) => (
              <Reveal delay={i * 100} className="card" key={s.title}>
                <div className="card-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-navy cta-section">
        <div className="container center">
          <h2>Let's build something valuable together</h2>
          <p className="lede">
            Whether it's a custom product or a flexible team, we'd love to
            hear about your project.
          </p>
          <div className="btn-row center">
            <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
