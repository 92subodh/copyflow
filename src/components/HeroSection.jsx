import { useEffect, useState } from 'react';
import { ArrowRight, Play, Shield, CreditCard, Trash2 } from 'lucide-react';
import './HeroSection.css';

const chatMessages = [
  { id: 1, from: 'user', text: '📎 assignment_final.pdf', delay: 400 },
  { id: 2, from: 'bot',  text: 'Got it! ✅ 3 pages received.\nHow many copies? (1/2/3...)', delay: 1200 },
  { id: 3, from: 'user', text: '2', delay: 2200 },
  { id: 4, from: 'bot',  text: 'Color or B&W? 🎨', delay: 3000 },
  { id: 5, from: 'user', text: 'B&W', delay: 3800 },
  { id: 6, from: 'bot',  text: 'Total: ₹6. Pay here 👇', delay: 4600, hasPayBtn: true },
  { id: 7, from: 'bot',  text: '✅ Payment confirmed!\nYour token:', delay: 5800, hasToken: true },
];

function ChatMessage({ msg, visible }) {
  return (
    <div
      className={`chat-bubble ${msg.from === 'user' ? 'chat-bubble--user' : 'chat-bubble--bot'} ${visible ? 'chat-bubble--visible' : ''}`}
    >
      <p className="chat-text">{msg.text}</p>
      {msg.hasPayBtn && (
        <button className="chat-pay-btn">Pay ₹6 via Razorpay →</button>
      )}
      {msg.hasToken && (
        <span className="chat-token">🔑 CF-4821</span>
      )}
      <span className="chat-time">{msg.from === 'user' ? '11:42' : '11:42'} {msg.from === 'user' ? '✓✓' : ''}</span>
    </div>
  );
}

export default function HeroSection() {
  const [visibleMessages, setVisibleMessages] = useState([]);

  useEffect(() => {
    chatMessages.forEach((msg) => {
      setTimeout(() => {
        setVisibleMessages((prev) => {
          if (prev.includes(msg.id)) return prev;
          return [...prev, msg.id];
        });
      }, msg.delay);
    });
  }, []);

  return (
    <section className="hero">
      {/* Background gradient mesh */}
      <div className="hero__bg" />

      <div className="hero__inner container">
        {/* LEFT: Text Content */}
        <div className="hero__text">
          <span className="section-eyebrow">🎓 Built for Campus Life</span>

          <h1 className="two-tone-heading hero__headline">
            Print from<br />
            <span className="accent">WhatsApp.</span><br />
            Skip the Queue.
          </h1>

          <p className="hero__sub">
            Send your file. Pay in chat. Collect at the kiosk.
            CopyFlow makes campus printing instant, secure, and queue-free.
          </p>

          <div className="hero__ctas">
            <a href="#" className="btn-primary">
              Start Printing Free <ArrowRight size={18} />
            </a>
            <a href="#how-it-works" className="btn-secondary">
              <span className="hero__play-icon"><Play size={14} fill="currentColor" /></span>
              See How It Works
            </a>
          </div>

          <div className="hero__trust">
            <span><Shield size={14} className="trust-icon trust-icon--green" /> No sign-up needed</span>
            <span><CreditCard size={14} className="trust-icon trust-icon--blue" /> Razorpay secured</span>
            <span><Trash2 size={14} className="trust-icon trust-icon--slate" /> Auto-deleted after print</span>
          </div>
        </div>

        {/* RIGHT: WhatsApp Chat Mockup */}
        <div className="hero__mockup">
          <div className="wa-card">
            {/* WhatsApp Header */}
            <div className="wa-header">
              <div className="wa-header__avatar">CF</div>
              <div className="wa-header__info">
                <span className="wa-header__name">CopyFlow Bot</span>
                <span className="wa-header__status">
                  <span className="wa-status-dot" />
                  online
                </span>
              </div>
              <div className="wa-header__icons">
                <div className="wa-dot" />
                <div className="wa-dot" />
                <div className="wa-dot" />
              </div>
            </div>

            {/* Chat Body */}
            <div className="wa-body">
              <div className="wa-date-chip">Today</div>

              {chatMessages.map((msg) => (
                <ChatMessage
                  key={msg.id}
                  msg={msg}
                  visible={visibleMessages.includes(msg.id)}
                />
              ))}

              {/* Typing indicator shown between messages */}
              {visibleMessages.length < chatMessages.length && visibleMessages.length > 0 && (
                <div className="wa-typing">
                  <span /><span /><span />
                </div>
              )}
            </div>

            {/* Chat input bar */}
            <div className="wa-input-bar">
              <div className="wa-input-field">Type a message</div>
              <div className="wa-send-btn">→</div>
            </div>
          </div>

          {/* Floating badges */}
          <div className="hero__badge hero__badge--print">
            <span className="badge-emoji">🖨️</span>
            <div>
              <div className="badge-title">Printing...</div>
              <div className="badge-sub">CF-4821 ready</div>
            </div>
          </div>

          <div className="hero__badge hero__badge--confirm">
            <span className="badge-emoji">✅</span>
            <div>
              <div className="badge-title">Payment done!</div>
              <div className="badge-sub">₹6 via UPI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
