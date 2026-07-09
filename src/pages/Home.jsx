import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Counter from '../components/Counter.jsx'
import './Home.css'

const clients = [
  'Indus Foundries',
  'VNETZ Consultancy',
  'Klass N Trends',
  'Verifitech India',
  'DOTS Technologies',
  'Youwin',
  'Microliftz',
  'Defence Academy',
  'iTech',
  'Rela Institute & Medical Centre',
  'NeoBloom',
  'SmartITFrame',
  'Kingston',
  'Avant-Garde',
  'YEGA Enterprises',
  'Infocare Solutions',
  'Digital Smart IT',
  'Vernalsoft',
  'Healthmed',
]

const projects = [
  {
    name: 'S360',
    tag: 'School Management',
    desc: 'A complete school management application covering admissions, attendance, exams, fees, and communication in one platform.',
  },
  {
    name: 'Gym-Genie',
    tag: 'Gym Management',
    desc: 'A gym management application for memberships, billing, trainer scheduling, and member engagement.',
  },
  {
    name: 'Full ERP',
    tag: 'Customizable Suite',
    desc: 'A fully customizable ERP model that adapts to any industry — finance, inventory, HR, sales, and operations in one system.',
  },
]

const stats = [
  { to: 20, suffix: '+', label: 'Happy Clients' },
  { to: 3, suffix: '', label: 'Core Products' },
  { to: 100, suffix: '%', label: 'Flexible Engagement' },
  { to: 24, suffix: '/7', label: 'AI-Assisted Delivery' },
]

function Home() {
  return (
    <>
      <section className="hero section-navy">
        <div className="blob-field">
          <span className="blob blob-1"></span>
          <span className="blob blob-2"></span>
          <span className="blob blob-3"></span>
        </div>
        <div className="container hero-inner">
          <p className="tagline center-tagline">Creating Value through Innovation</p>
          <span className="eyebrow">AI-Driven Software Development &amp; Consulting</span>
          <h1>Gain Valuable Solution</h1>
          <p className="lede">
            We're an AI-driven software development company that blends smart
            automation with hands-on engineering to design and build custom
            software — plus flexible, on-demand technical resources so your
            business can move faster without the overhead of hiring.
          </p>
          <div className="btn-row center">
            <Link to="/software-development" className="btn btn-primary">Explore Our Products</Link>
            <Link to="/consulting" className="btn btn-outline">See Consulting Services</Link>
            <Link to="/contact" className="btn btn-outline">Talk to an Expert</Link>
          </div>
        </div>

        <div className="container stats-bar">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} className="stat">
              <span className="stat-number">
                <Counter to={s.to} suffix={s.suffix} />
              </span>
              <span className="stat-label">{s.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2 services-grid">
            <Reveal className="card service-card">
              <div className="card-icon">&#128187;</div>
              <h3>Software Development</h3>
              <p>
                We build custom, scalable applications from the ground up —
                from school and gym management systems to full ERP solutions
                tailored to your industry, accelerated with AI-assisted
                development.
              </p>
              <Link to="/software-development">View our projects &rarr;</Link>
            </Reveal>
            <Reveal delay={120} className="card service-card">
              <div className="card-icon">&#129309;</div>
              <h3>Consulting</h3>
              <p>
                Our flexible resource model gives you access to skilled
                developers and consultants exactly when you need them —
                scale up or down without long hiring cycles.
              </p>
              <Link to="/consulting">Explore consulting &rarr;</Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container center">
          <Reveal as="span" className="eyebrow">Our Products</Reveal>
          <Reveal as="h2" delay={80}>Software we've built</Reveal>
          <Reveal as="p" delay={140} className="lede">
            A look at the applications our team has designed, developed, and
            deployed for real businesses.
          </Reveal>
          <div className="grid grid-3">
            {projects.map((p, i) => (
              <Reveal delay={i * 120} className="card project-card" key={p.name}>
                <span className="tag">{p.tag}</span>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <Link to="/software-development">Learn more &rarr;</Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container center">
          <Reveal as="span" className="eyebrow">Our Clients</Reveal>
          <Reveal as="h2" delay={80}>Our Happy Clients</Reveal>
          <Reveal as="p" delay={140} className="lede">
            Below are the primary clients that Gain Valuable Solution engages,
            both directly and indirectly, for the provision of IT services.
          </Reveal>
          <Reveal delay={200} className="client-marquee">
            <div className="client-marquee-track">
              {[...clients, ...clients].map((name, i) => (
                <span className="client-logo-pill" key={`${name}-${i}`}>{name}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="grid grid-4 why-grid">
            <Reveal>
              <div className="card-icon">&#129504;</div>
              <h3>AI-driven engineering</h3>
              <p>We use AI-assisted tooling across our workflow to build and ship reliable software faster.</p>
            </Reveal>
            <Reveal delay={100}>
              <div className="card-icon">&#9889;</div>
              <h3>Built for scale</h3>
              <p>Our applications are architected to grow with your business, from first users to full-scale operations.</p>
            </Reveal>
            <Reveal delay={200}>
              <div className="card-icon">&#127919;</div>
              <h3>Industry-adaptable</h3>
              <p>From education to fitness to enterprise operations, our solutions are built to be customized for your industry.</p>
            </Reveal>
            <Reveal delay={300}>
              <div className="card-icon">&#128737;&#65039;</div>
              <h3>Flexible engagement</h3>
              <p>Bring in the exact skills you need, when you need them, through our flexible resource consulting model.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-navy cta-section">
        <div className="container center">
          <Reveal as="h2">Have a project in mind?</Reveal>
          <Reveal as="p" delay={100} className="lede">
            Tell us about your business and we'll help you find the right
            software or consulting solution.
          </Reveal>
          <Reveal delay={200} className="btn-row center">
            <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default Home
