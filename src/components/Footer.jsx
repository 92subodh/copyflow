import { Printer, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const links = {
  Product: [
    { label: 'How it Works', href: '/#how-it-works' },
    { label: 'Features', href: '/#features' },
    { label: 'For Colleges', href: '/#colleges' },
    { label: 'FAQs', href: '/#faq' },
  ],
  Support: [
    { label: 'Help Center', to: '/help-center' },
    { label: 'Contact Us', to: '/contact-us' },
  ],
  Legal: [
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Terms of Service', to: '/terms-of-service' },
    { label: 'Refund Policy', to: '/refund-policy' },
  ],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand column */}
          <div className="footer__brand">
            <a href="#" className="footer__logo">
              <Printer size={20} className="footer__logo-icon" />
              <span>
                <span className="logo-copy">Copy</span>
                <span className="logo-flow">Flow</span>
              </span>
            </a>
            <p className="footer__tagline">Print it. Pay it. Pick it up.</p>
            <p className="footer__tagline2">Zero Queue. Zero Stress.</p>
            <div className="footer__socials">
              <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
              <a href="https://www.instagram.com/copyflow2026?igsh=Zm81NjNlcXhjZW0w" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="#" aria-label="GitHub"><Github size={18} /></a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading} className="footer__col">
              <h4 className="footer__col-heading">{heading}</h4>
              <ul>
                {items.map((item) => (
                  <li key={item.label}>
                    {item.to ? (
                      <Link to={item.to}>{item.label}</Link>
                    ) : (
                      <a href={item.href}>{item.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <span>© 2025 CopyFlow. Made with ☕ in India.</span>
          <span className="footer__bottom-right">
            Secured by <span className="footer__razorpay">Razorpay</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
