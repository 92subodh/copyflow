import PageShell from './PageShell';
import { siteContact } from '../siteConfig';

export default function ContactUsPage() {
  return (
    <PageShell
      eyebrow="Support"
      title={<>Contact <span className="accent">Us</span></>}
      lead="Need help with an order, campus onboarding, or partnership? Our team is here to support you."
      updatedOn="March 16, 2026"
    >
      <section className="policy-page__section">
        <h2>Reach CopyFlow</h2>
        <div className="contact-grid">
          <div className="contact-box">
            <h3>General Support</h3>
            <p>Email: <a href={`mailto:${siteContact.emails.support}`}>{siteContact.emails.support}</a></p>
            <p>Phone: {siteContact.phone.display}</p>
          </div>

          <div className="contact-box">
            <h3>Business & Campuses</h3>
            <p>Email: <a href={`mailto:${siteContact.emails.partnerships}`}>{siteContact.emails.partnerships}</a></p>
            <p>Response time: {siteContact.support.responseTime}</p>
          </div>

          <div className="contact-box">
            <h3>Refund & Billing</h3>
            <p>Email: <a href={`mailto:${siteContact.emails.billing}`}>{siteContact.emails.billing}</a></p>
            <p>Include your order ID and payment reference.</p>
          </div>

          <div className="contact-box">
            <h3>Messaging Channels</h3>
            <p>WhatsApp: <a href={siteContact.channels.whatsapp} target="_blank" rel="noreferrer">Chat now</a></p>
            <p>Telegram: <a href={siteContact.channels.telegram} target="_blank" rel="noreferrer">Open bot</a></p>
          </div>
        </div>
      </section>

      <section className="policy-page__section">
        <h2>Operating Hours</h2>
        <p>{siteContact.support.hours}. For urgent kiosk issues, include kiosk location in your message.</p>
      </section>

      <section className="policy-page__section">
        <h2>Office Address</h2>
        <p>{siteContact.company.legalName}, {siteContact.company.address}</p>
      </section>
    </PageShell>
  );
}
