import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQSection.css';

const faqs = [
  {
    q: 'What file types can I send?',
    a: 'PDF, Word (.docx), JPEG, and PNG. More formats coming soon.',
  },
  {
    q: 'Is my document safe?',
    a: 'Yes. Files are encrypted in transit and permanently deleted within 1 hour of printing. We never store your documents.',
  },
  {
    q: 'What payment methods are accepted?',
    a: 'UPI, credit/debit card, and all major wallets (Paytm, PhonePe, Google Pay) via Razorpay.',
  },
  {
    q: 'What if I lose my token?',
    a: 'Your token is also sent to your WhatsApp/Telegram chat. Just scroll up in your conversation with CopyFlow Bot!',
  },
  {
    q: 'Which campuses have kiosks?',
    a: 'Type /shops in the CopyFlow bot to see all kiosk locations near you. We are expanding every week.',
  },
  {
    q: 'Can I cancel after paying?',
    a: "Refunds are processed within 24 hours if the kiosk hasn't started printing. Contact us via the bot.",
  },
];

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
      <button className="faq-item__trigger" onClick={onToggle}>
        <span className="faq-item__question">{faq.q}</span>
        <ChevronDown size={20} className="faq-item__chevron" />
      </button>
      <div
        className="faq-item__body"
        style={{ maxHeight: isOpen ? '320px' : '0' }}
      >
        <p className="faq-item__answer">{faq.a}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="faq" className="faq-section" ref={sectionRef}>
      <div className="container">
        <div className="faq-section__header reveal">
          <span className="section-eyebrow">FAQ</span>
          <h2 className="two-tone-heading" style={{ fontSize: 'var(--text-h2)', color: 'var(--navy)' }}>
            Got Questions? <span className="accent">We've Got Answers.</span>
          </h2>
        </div>

        <div className="faq-list reveal" style={{ transitionDelay: '0.15s' }}>
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.q}
              faq={faq}
              isOpen={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
