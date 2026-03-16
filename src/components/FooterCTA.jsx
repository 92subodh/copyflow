import { ArrowRight, MessageCircle, Send } from 'lucide-react';
import { siteContact } from '../siteConfig';
import './FooterCTA.css';

export default function FooterCTA() {
  return (
    <section className="footer-cta">
      {/* Decorative orbs */}
      <div className="footer-cta__orb footer-cta__orb--left" />
      <div className="footer-cta__orb footer-cta__orb--right" />

      <div className="features-heading container footer-cta__inner">
        <h2 className="two-tone-heading footer-cta__heading">
          Your Campus Deserves<br />
          <span className="footer-cta__accent">Smarter Printing</span>
        </h2>

        <p className="footer-cta__sub">
          Join thousands of students who've already ditched the queue.
        </p>

        <div className="footer-cta__buttons">
          <a href="#" className="footer-cta__btn-main">
            Print for Free Today <ArrowRight size={18} />
          </a>

          <div className="footer-cta__channels">
            <a href={siteContact.channels.whatsapp} className="footer-cta__channel footer-cta__channel--wa" aria-label="WhatsApp">
              <MessageCircle size={20} />
              <span>WhatsApp</span>
            </a>
            <a href={siteContact.channels.telegram} className="footer-cta__channel footer-cta__channel--tg" aria-label="Telegram">
              <Send size={20} />
              <span>Telegram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
