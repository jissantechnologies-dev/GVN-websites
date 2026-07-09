import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import './Consulting.css'

const models = [
  {
    icon: '\u{1F464}',
    title: 'Staff Augmentation',
    desc: 'Add individual developers, testers, or designers to your existing team to fill skill gaps or handle overflow work.',
  },
  {
    icon: '\u{1F465}',
    title: 'Dedicated Team',
    desc: 'A full team assembled around your project — managed by us, working as an extension of your business.',
  },
  {
    icon: '\u{1F4CB}',
    title: 'Project-Based',
    desc: 'Hand off a defined project with clear deliverables and timelines, and we take it from planning to delivery.',
  },
  {
    icon: '⏱️',
    title: 'Time & Material',
    desc: 'Pay only for the hours and resources used — ideal for evolving scopes and ongoing support work.',
  },
]

const benefits = [
  'Scale your team up or down as project needs change',
  'Access skilled developers, testers, and consultants on demand',
  'Avoid the time and cost of a full-time hiring cycle',
  'Bring in specialized expertise for short-term or long-term needs',
  'Maintain control while we handle sourcing and delivery',
  'Transparent engagement models with no long-term lock-in',
]

function Consulting() {
  return (
    <>
      <section className="section section-navy page-hero">
        <div className="blob-field">
          <span className="blob blob-1"></span>
          <span className="blob blob-2"></span>
        </div>
        <div className="container center hero-inner">
          <span className="eyebrow">Consulting</span>
          <h1>A flexible resource model, built around your needs</h1>
          <p className="lede">
            We help businesses scale their technical capacity without the
            overhead of traditional hiring — providing the right people, with
            the right skills, for exactly as long as you need them.
          </p>
          <div className="btn-row center">
            <Link to="/contact" className="btn btn-primary">Talk to Us</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container center">
          <Reveal as="span" className="eyebrow">Engagement Models</Reveal>
          <Reveal as="h2" delay={80}>Choose the model that fits your project</Reveal>
          <Reveal as="p" delay={140} className="lede">
            Our flexible resource model adapts to how you work — bring in one
            specialist or a full team, for a single project or an ongoing
            partnership.
          </Reveal>
          <div className="grid grid-4">
            {models.map((m, i) => (
              <Reveal delay={i * 100} className="card" key={m.title}>
                <div className="card-icon">{m.icon}</div>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="benefits-row">
            <Reveal className="benefits-copy">
              <span className="eyebrow">Why Flexible Resourcing</span>
              <h2>Built to move at your pace</h2>
              <p>
                Hiring full-time takes time, and every project has different
                needs. Our consulting model gives you direct access to
                experienced developers and consultants who can plug into your
                team quickly, and scale as your requirements change.
              </p>
              <Link to="/contact" className="btn btn-outline">Discuss your requirements</Link>
            </Reveal>
            <Reveal delay={150} className="benefits-list">
              <ul className="feature-list">
                {benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-navy cta-section">
        <div className="container center">
          <h2>Let's build your team</h2>
          <p className="lede">
            Tell us about the skills and timeline you need, and we'll put
            together the right resource plan for your project.
          </p>
          <div className="btn-row center">
            <Link to="/contact" className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Consulting
