import PageShell from './PageShell';
import { siteContact } from '../siteConfig';

export default function RefundPolicyPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title={<>Refund <span className="accent">Policy</span></>}
      lead="This policy defines when refunds are available for print orders made through CopyFlow."
      updatedOn="March 16, 2026"
    >
      <article className="policy-page__section">
        <h2>1. Eligible Refund Cases</h2>
        <ul>
          <li>Payment completed but no print job was produced.</li>
          <li>Incorrect print output caused by kiosk or system error.</li>
          <li>Duplicate transaction for the same order.</li>
        </ul>
      </article>

      <article className="policy-page__section">
        <h2>2. Non-Refundable Cases</h2>
        <ul>
          <li>Incorrect files uploaded by the user.</li>
          <li>Design or formatting issues in source documents.</li>
          <li>Orders already printed correctly as submitted.</li>
        </ul>
      </article>

      <article className="policy-page__section">
        <h2>3. Refund Request Window</h2>
        <p>Raise refund requests within 48 hours of transaction time by sharing order ID, payment reference, and issue details.</p>
      </article>

      <article className="policy-page__section">
        <h2>4. Processing Timeline</h2>
        <p>Approved refunds are initiated within 3 business days and may take additional bank or payment gateway settlement time.</p>
      </article>

      <article className="policy-page__section">
        <h2>5. Contact for Refunds</h2>
        <p>Email <a href={`mailto:${siteContact.emails.billing}`}>{siteContact.emails.billing}</a> with subject line "Refund Request - Order ID" for faster processing.</p>
      </article>
    </PageShell>
  );
}
