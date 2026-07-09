import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpeg'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-col footer-brand">
          <div className="footer-logo-badge">
            <img src={logo} alt="Gain Valuable Solution" />
          </div>
          <p className="footer-tagline">Creating Value through Innovation</p>
          <p>
            An AI-driven software development and consulting partner helping
            businesses build custom applications and scale with flexible,
            on-demand teams.
          </p>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/software-development">Software Development</Link></li>
            <li><Link to="/consulting">Consulting</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Projects</h4>
          <ul>
            <li><Link to="/software-development">S360 School Management</Link></li>
            <li><Link to="/software-development">Gym-Genie</Link></li>
            <li><Link to="/software-development">Full ERP Suite</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Get in touch</h4>
          <ul>
            <li><a href="mailto:gainvaluablesolution@gmail.com">gainvaluablesolution@gmail.com</a></li>
            <li><a href="tel:+919025325123">+91 90253 25123</a></li>
            <li>G1, Plot B, 2nd Street, Senthil Nagar, Keelkatalai - 600 117</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; {year} Gain Valuable Solution. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
