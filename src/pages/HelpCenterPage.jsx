import PageShell from './PageShell';
import { siteContact } from '../siteConfig';

export default function HelpCenterPage() {
  return (
    <PageShell
      eyebrow="Support"
      title={<>Help <span className="accent">Center</span></>}
      lead="Find quick answers about orders, payments, kiosk pickup, and troubleshooting."
      updatedOn="March 16, 2026"
    >
      <article className="policy-page__section">
        <h2>Bot Commands</h2>
        <ul className="help-command-list">
          {siteContact.helpCenter.commands.map((item) => (
            <li key={item.command}>
              <span className="help-command-code">{item.command}</span>
              <span>{item.description}</span>
            </li>
          ))}
        </ul>
      </article>

      <article className="policy-page__section">
        <h2>Order Help</h2>
        <ul>
          <li>Track status from your chat updates or kiosk order screen.</li>
          <li>If your print is delayed, share your order ID and kiosk location with support.</li>
          <li>For wrong output, contact support within 48 hours with photo proof.</li>
        </ul>
      </article>

      <article className="policy-page__section">
        <h2>Payment & Refund Help</h2>
        <ul>
          <li>Use your payment reference for faster verification.</li>
          <li>Duplicate or failed transactions can be reviewed by billing support.</li>
          <li>Refund requests are handled at <a href={`mailto:${siteContact.emails.billing}`}>{siteContact.emails.billing}</a>.</li>
        </ul>
      </article>

      <article className="policy-page__section">
        <h2>Contact Channels</h2>
        <p>Email: <a href={`mailto:${siteContact.emails.support}`}>{siteContact.emails.support}</a></p>
        <p>WhatsApp: <a href={siteContact.channels.whatsapp} target="_blank" rel="noreferrer">Open WhatsApp</a></p>
        <p>Telegram: <a href={siteContact.channels.telegram} target="_blank" rel="noreferrer">Open Telegram Bot</a></p>
        <p>Support hours: {siteContact.support.hours}</p>
      </article>
    </PageShell>
  );
}
