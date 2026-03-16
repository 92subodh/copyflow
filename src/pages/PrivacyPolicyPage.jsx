import PageShell from './PageShell';
import { siteContact } from '../siteConfig';

export default function PrivacyPolicyPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title={<>Privacy <span className="accent">Policy</span></>}
      lead="This page explains how CopyFlow collects, uses, and protects your data while delivering faster campus printing."
      updatedOn="March 16, 2026"
    >
      <article className="policy-page__section">
        <h2>1. Information We Collect</h2>
        <p>We collect account details, order information, uploaded print files, payment references, and support messages that you submit while using CopyFlow.</p>
      </article>

      <article className="policy-page__section">
        <h2>2. How We Use Data</h2>
        <ul>
          <li>To process print orders and notify you about order status.</li>
          <li>To verify payments and prevent fraud.</li>
          <li>To improve kiosk reliability, app performance, and support quality.</li>
        </ul>
      </article>

      <article className="policy-page__section">
        <h2>3. Data Sharing</h2>
        <p>We do not sell personal data. Information may be shared with payment processors, print operations teams, and service providers only for operational needs.</p>
      </article>

      <article className="policy-page__section">
        <h2>4. File Retention</h2>
        <p>Uploaded files are retained only for the required print lifecycle and audit period, then securely deleted based on internal retention policies.</p>
      </article>

      <article className="policy-page__section">
        <h2>5. Your Rights</h2>
        <p>You can request access, correction, or deletion of personal data by contacting us at <a href={`mailto:${siteContact.emails.support}`}>{siteContact.emails.support}</a>.</p>
      </article>
    </PageShell>
  );
}
