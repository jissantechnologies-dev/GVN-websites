import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import './SoftwareDevelopment.css'

const featureDetails = [
  {
    icon: '\u{1F4B0}',
    title: 'Finance & Accounting',
    desc: 'Manage ledgers, invoicing, budgeting, and financial reporting in one module, with real-time visibility into your company\'s financial health.',
  },
  {
    icon: '\u{1F4E6}',
    title: 'Inventory & Supply Chain',
    desc: 'Track stock levels, purchase orders, and supplier relationships, with automated reordering and full visibility across warehouses.',
  },
  {
    icon: '\u{1F465}',
    title: 'HR, Payroll & Workforce',
    desc: 'Handle employee records, attendance, payroll processing, and performance reviews from a single, centralized HR module.',
  },
  {
    icon: '\u{1F4CA}',
    title: 'Sales, CRM & Order Management',
    desc: 'Manage leads, quotes, orders, and customer relationships, keeping your sales pipeline and fulfillment process in sync.',
  },
  {
    icon: '\u{1F3ED}',
    title: 'Custom Modules for Your Industry',
    desc: 'Extend the platform with modules tailored to your specific industry needs, built on the same core system without disrupting existing workflows.',
  },
  {
    icon: '\u{1F4C8}',
    title: 'Centralized Reporting & Analytics',
    desc: 'Get unified dashboards and reports across finance, inventory, HR, and sales, so decision-makers always have an accurate, up-to-date view.',
  },
]

function ERP() {
  return (
    <>
      <section className="section section-navy page-hero">
        <div className="blob-field">
          <span className="blob blob-1"></span>
          <span className="blob blob-2"></span>
        </div>
        <div className="container center hero-inner">
          <span className="eyebrow">Customizable Enterprise Suite</span>
          <h1>Full ERP — one platform for your whole business</h1>
          <p className="lede">
            Our full ERP model is a customizable, modular system that can be
            adopted for any industry — giving you one platform to manage
            finance, inventory, HR, sales, and operations.
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
          <Reveal as="h2" delay={80}>What our ERP gives your business</Reveal>
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
          <h2>Ready to build your custom ERP?</h2>
          <p className="lede">
            Let's talk about which modules your business needs and how we can
            tailor the platform to your industry.
          </p>
          <div className="btn-row center">
            <Link to="/contact" className="btn btn-primary">Start a Conversation</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default ERP
