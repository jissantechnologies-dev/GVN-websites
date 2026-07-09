import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="section center" style={{ padding: '120px 0' }}>
      <div className="container">
        <span className="eyebrow">404</span>
        <h1>Page not found</h1>
        <p className="lede">The page you're looking for doesn't exist or has moved.</p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </section>
  )
}

export default NotFound
