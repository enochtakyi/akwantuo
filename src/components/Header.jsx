import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './Header.css'

const Header = () => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <div className="logo-icon"></div>
            <span className="logo-text">AkwantuoExpress</span>
          </Link>
          
          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMobileMenu}>
              Home
            </Link>
            <Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={closeMobileMenu}>
              About
            </Link>
            <Link to="/services" className={`nav-link ${isActive('/services')}`} onClick={closeMobileMenu}>
              Services
            </Link>
            <Link to="/routes" className={`nav-link ${isActive('/routes')}`} onClick={closeMobileMenu}>
              Routes & Fares
            </Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={closeMobileMenu}>
              Contact
            </Link>
            <div className="mobile-actions">
              <button className="btn btn-outline" onClick={closeMobileMenu}>Login</button>
              <button className="btn btn-primary" onClick={closeMobileMenu}>Book Now</button>
            </div>
          </nav>

          <div className="header-actions">
            <button className="btn btn-outline">Login</button>
            <button className="btn btn-primary">Book Now</button>
          </div>

          <button className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
