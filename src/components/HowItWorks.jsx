import { useScroll, useTransform, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Upload, Settings2, CreditCard, Key, Printer } from 'lucide-react';
import './HowItWorks.css';

const steps = [
  {
    num: '01',
    icon: Upload,
    title: 'Send Your File',
    desc: 'Drop any PDF, Word document, or image directly into our WhatsApp or Telegram bot. No app to install, no accounts to create.',
    visualTitle: 'File Upload',
    visualChip: 'document_final.pdf',
  },
  {
    num: '02',
    icon: Settings2,
    title: 'Choose Settings',
    desc: 'Pick your print preferences right in the chat. Select color or B&W, single or double-sided, and the number of copies you need.',
    visualTitle: 'Print Preferences',
    visualChip: 'B&W · 2 copies',
  },
  {
    num: '03',
    icon: CreditCard,
    title: 'Pay Securely',
    desc: 'CopyFlow instantly generates a Razorpay checkout link. Pay using UPI, credit card, or your favorite wallet securely.',
    visualTitle: 'Payment Gateway',
    visualChip: 'Total: ₹6.00',
  },
  {
    num: '04',
    icon: Key,
    title: 'Get Your Token',
    desc: 'The moment your payment clears, the bot replies with a secure, unique 6-digit PIN code for your print job.',
    hasToken: true,
    visualTitle: 'Token Issued',
    visualChip: 'CF-4821',
  },
  {
    num: '05',
    icon: Printer,
    title: 'Collect at Kiosk',
    desc: 'Walk up to any CopyFlow campus kiosk, enter your secure PIN on the touchscreen, and grab your prints instantly.',
    visualTitle: 'Zero Queue',
    visualChip: 'Printing...',
  },
];

function TimelinePreviewCard({ step }) {
  const Icon = step.icon;
  return (
    <div className="timeline-preview">
      <div className="timeline-preview__header">
        <div className="timeline-preview__dots">
          <span />
          <span />
          <span />
        </div>
        <span className="timeline-preview__title">{step.visualTitle}</span>
      </div>
      <div className="timeline-preview__body">
        <div className="timeline-preview__icon-banner">
          <Icon size={24} className="timeline-preview__icon" />
        </div>
        <div className="timeline-preview__row">
          <span className="timeline-preview__line timeline-preview__line--lg" />
          <span className="timeline-preview__line timeline-preview__line--sm" />
        </div>
        <span className="timeline-preview__chip">{step.visualChip}</span>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setHeight(entry.contentRect.height);
      }
    });
    if (ref.current) resizeObserver.observe(ref.current);
    return () => resizeObserver.disconnect();
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 30%', 'end 80%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section id="how-it-works" className="how-section" ref={containerRef}>
      <div className="container">
        <div className="how-section__header">
          <span className="section-eyebrow">The Flow</span>
          <h2 className="two-tone-heading how-section__title">
            From Chat to Print <span className="accent">in 5 Steps</span>
          </h2>
          <p className="how-section__sub">
            No app download. No sign-up. Just open WhatsApp or Telegram and print instantly.
          </p>
        </div>

        <div className="how-timeline__wrapper" ref={ref}>
          {/* Static and animated lines */}
          <div className="how-timeline__line-container" style={{ height: height + 'px' }}>
            <div className="how-timeline__line-bg" />
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="how-timeline__line-fill"
            />
          </div>

          <div className="how-timeline__items">
            {steps.map((step) => {
              return (
                <article key={step.num} className="how-timeline__item">
                  <div className="how-timeline__sticky">
                    <div className="how-timeline__node">
                      <div className="how-timeline__node-inner" />
                    </div>
                    <h3 className="how-timeline__sticky-title">Step {step.num}</h3>
                  </div>

                  <div className="how-timeline__content">
                    <h3 className="how-timeline__mobile-title">Step {step.num}</h3>
                    <div className="how-timeline__content-blocks">
                      <div className="how-timeline__card">
                        <div className="how-timeline__card-header">
                          <div className="how-timeline__icon-wrap">
                            <step.icon size={20} strokeWidth={2.5} />
                          </div>
                          <h4 className="how-timeline__card-title">{step.title}</h4>
                        </div>
                        <p className="how-timeline__card-desc">{step.desc}</p>
                        {step.hasToken && (
                          <span className="timeline-item__token">Your PIN: {step.visualChip}</span>
                        )}
                      </div>

                      <div className="how-timeline__visual">
                        <TimelinePreviewCard step={step} />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

