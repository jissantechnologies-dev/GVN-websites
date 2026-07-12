import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Reveal from '../components/Reveal.jsx'
import './Contact.css'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const ADDRESS = 'G1, Plot B, 2nd Street, Senthil Nagar, Keelkatalai - 600 117'
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`

function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus('error')
      console.error(
        'EmailJS is not configured. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env file.'
      )
      return
    }

    setStatus('sending')

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      .then(() => {
        setStatus('success')
        formRef.current.reset()
      })
      .catch((err) => {
        console.error('EmailJS error:', err)
        setStatus('error')
      })
  }

  return (
    <>
      <section className="section section-navy page-hero">
        <div className="blob-field">
          <span className="blob blob-1"></span>
          <span className="blob blob-2"></span>
        </div>
        <div className="container center hero-inner">
          <span className="eyebrow">Contact</span>
          <h1>Let's talk about your project</h1>
          <p className="lede">
            Whether you're interested in one of our products or need flexible
            consulting resources, send us a message and we'll get back to you.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <Reveal className="contact-info card">
            <h2>Get in touch</h2>
            <p>
              Fill out the form and our team will reach out to discuss your
              requirements, timeline, and how we can help.
            </p>
            <ul className="contact-details">
              <li>
                <span className="contact-icon">&#9993;&#65039;</span>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:gainvaluablesolution@gmail.com">gainvaluablesolution@gmail.com</a>
                </div>
              </li>
              <li>
                <span className="contact-icon">&#128222;</span>
                <div>
                  <strong>Phone</strong>
                  <a href="tel:+919025325123">+91 90253 25123</a>
                </div>
              </li>
              <li>
                <span className="contact-icon">&#128205;</span>
                <div>
                  <strong>Address</strong>
                  <span>{ADDRESS}</span>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal as="form" delay={150} className="contact-form card" innerRef={formRef} onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="name">Full Name</label>
              <input id="name" name="user_name" type="text" required placeholder="Your name" />
            </div>

            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input id="email" name="user_email" type="email" required placeholder="you@company.com" />
            </div>

            <div className="form-row">
              <label htmlFor="interest">I'm interested in</label>
              <select id="interest" name="interest" defaultValue="Software Development and Consulting">
                <option value="Software Development and Consulting">Software Development and Consulting</option>
                <option value="Software Development">Software Development</option>
                <option value="Consulting">Consulting</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-row">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required placeholder="Tell us about your project or requirements"></textarea>
            </div>

            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="form-status success">Thanks! Your message has been sent — we'll be in touch soon.</p>
            )}
            {status === 'error' && (
              <p className="form-status error">
                Something went wrong sending your message. Please try again, or email us directly.
              </p>
            )}
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <Reveal className="map-frame">
            <iframe
              title="Gain Valuable Solution location"
              src={MAP_SRC}
              width="100%"
              height="360"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default Contact
