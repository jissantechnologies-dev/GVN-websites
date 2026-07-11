import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import './SoftwareDevelopment.css'

const featureDetails = [
  {
    icon: '\u{1F4AA}',
    title: 'Membership Plans & Renewals',
    desc: 'Create flexible membership tiers, automate renewal reminders, and let members upgrade or pause plans without back-and-forth paperwork.',
  },
  {
    icon: '\u{23F1}\u{FE0F}',
    title: 'Automated Billing & Invoicing',
    desc: 'Generate invoices automatically, collect recurring payments, and keep a clear record of dues, discounts, and payment history for every member.',
  },
  {
    icon: '\u{1F4C5}',
    title: 'Trainer & Class Scheduling',
    desc: 'Manage trainer availability, book classes and personal training sessions, and avoid double-bookings with a shared, real-time schedule.',
  },
  {
    icon: '\u{1F4C8}',
    title: 'Member Check-in & Attendance',
    desc: 'Track member check-ins at the front desk or via app, monitor gym usage patterns, and flag inactive members before they churn.',
  },
  {
    icon: '\u{1F3CB}\u{FE0F}',
    title: 'Progress Tracking & Engagement',
    desc: 'Log workouts, body measurements, and goals for each member, and keep them engaged with milestones and progress notifications.',
  },
  {
    icon: '\u{1F4CA}',
    title: 'Revenue & Retention Reports',
    desc: 'Get a clear view of revenue trends, membership growth, and retention rates to make informed decisions about your gym\'s operations.',
  },
]

function GymGenie() {
  return (
    <>
      <section className="section section-navy page-hero">
        <div className="blob-field">
          <span className="blob blob-1"></span>
          <span className="blob blob-2"></span>
        </div>
        <div className="container center hero-inner">
          <span className="eyebrow">Gym Management Application</span>
          <h1>Gym-Genie — run your gym from one dashboard</h1>
          <p className="lede">
            Gym-Genie helps gym owners manage memberships, billing, and
            trainers from a single dashboard, while giving members a smooth
            experience from sign-up to check-in.
          </p>
          <div className="btn-row center">
            <Link to="/contact" className="btn btn-primary">Discuss this project</Link>
            <Link to="/software-development" className="btn btn-outline">Back to Software Development</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container center">
          <Reveal as="span" className="eyebrow">Features</Reveal>
          <Reveal as="h2" delay={80}>What Gym-Genie gives your gym</Reveal>
          <div className="grid grid-3">
            {featureDetails.map((f, i) => (
              <Reveal delay={i * 100} className="card" key={f.title}>
                <div className="card-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-navy cta-section">
        <div className="container center">
          <h2>Ready to bring Gym-Genie to your gym?</h2>
          <p className="lede">
            Let's talk about how Gym-Genie can be set up and customized for
            your facility.
          </p>
          <div className="btn-row center">
            <Link to="/contact" className="btn btn-primary">Start a Conversation</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default GymGenie
