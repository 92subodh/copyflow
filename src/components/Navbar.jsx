import { useState, useEffect } from 'react';
import { Printer, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      // Hide navbar if scrolling down, show if scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100 && !menuOpen) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [menuOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--solid' : ''} ${!isVisible ? 'navbar--hidden' : ''} ${menuOpen ? 'navbar--menu-open' : ''}`}>
      <div className="navbar__inner container">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <Printer size={22} strokeWidth={2.2} className="navbar__logo-icon" />
          <span>
            <span className="logo-copy">Copy</span>
            <span className="logo-flow">Flow</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="navbar__links">
          <li><a href="/#how-it-works">How it Works</a></li>
          <li><a href="/#features">Features</a></li>
          <li><a href="/#colleges">For Colleges</a></li>
          <li><a href="/#faq">FAQ</a></li>
          <li><Link to="/contact-us">Contact</Link></li>
        </ul>

        {/* CTA */}
        <a href="#" className="btn-primary navbar__cta">
          Get Started Free
        </a>

        {/* Mobile Hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="navbar__mobile-menu">
          <ul>
            <li><a href="/#how-it-works" onClick={() => setMenuOpen(false)}>How it Works</a></li>
            <li><a href="/#features" onClick={() => setMenuOpen(false)}>Features</a></li>
            <li><a href="/#colleges" onClick={() => setMenuOpen(false)}>For Colleges</a></li>
            <li><a href="/#faq" onClick={() => setMenuOpen(false)}>FAQ</a></li>
            <li><Link to="/contact-us" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
          <a href="#" className="btn-primary" style={{ marginTop: '12px', justifyContent: 'center' }}>
            Get Started Free
          </a>
        </div>
      )}
    </nav>
  );
}
