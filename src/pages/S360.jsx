import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import './SoftwareDevelopment.css'

const featureDetails = [
  {
    icon: '\u{1F4DA}',
    title: 'Admissions & Student Enrollment',
    desc: 'Digitize the entire admissions journey — online applications, document uploads, seat allocation, and enrollment approvals — cutting down paperwork and manual data entry.',
  },
  {
    icon: '\u{1F4DD}',
    title: 'Attendance Tracking',
    desc: 'Mark and monitor attendance for students and staff in seconds, with automated alerts to parents for absences and real-time attendance reports for administrators.',
  },
  {
    icon: '\u{1F4C5}',
    title: 'Timetable & Exam Management',
    desc: 'Build conflict-free class timetables, schedule exams, and manage invigilation duties, all from one dashboard shared with teachers and students.',
  },
  {
    icon: '\u{1F4B3}',
    title: 'Fee Collection & Online Payments',
    desc: 'Accept fee payments online, generate receipts automatically, track dues and defaulters, and give parents a clear view of payment history.',
  },
  {
    icon: '\u{1F4CA}',
    title: 'Report Cards & Performance Tracking',
    desc: 'Generate report cards automatically from recorded assessments, track student performance over time, and share progress with parents instantly.',
  },
  {
    icon: '\u{1F514}',
    title: 'Parent-Teacher Communication Portal',
    desc: 'Keep parents informed with announcements, homework updates, and direct messaging with teachers — reducing missed communication and follow-up calls.',
  },
]

function S360() {
  return (
    <>
      <section className="section section-navy page-hero">
        <div className="blob-field">
          <span className="blob blob-1"></span>
          <span className="blob blob-2"></span>
        </div>
        <div className="container center hero-inner">
          <span className="eyebrow">School Management Application</span>
          <h1>S360 — everything a school needs, in one place</h1>
          <p className="lede">
            S360 brings admissions, attendance, timetables, fees, results, and
            parent communication together into a single, easy-to-use platform
            for schools, teachers, students, and parents.
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
          <Reveal as="h2" delay={80}>What S360 gives your school</Reveal>
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
          <h2>Ready to bring S360 to your school?</h2>
          <p className="lede">
            Let's talk about how S360 can be set up and customized for your
            institution.
          </p>
          <div className="btn-row center">
            <Link to="/contact" className="btn btn-primary">Start a Conversation</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default S360
