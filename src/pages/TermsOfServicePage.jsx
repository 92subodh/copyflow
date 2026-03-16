import PageShell from './PageShell';

export default function TermsOfServicePage() {
  return (
    <PageShell
      eyebrow="Legal"
      title={<>Terms of <span className="accent">Service</span></>}
      lead="These terms govern your use of CopyFlow's website, messaging bot, and kiosk print services."
      updatedOn="March 16, 2026"
    >
      <article className="policy-page__section">
        <h2>1. Acceptance of Terms</h2>
        <p>By creating an order or using CopyFlow channels, you agree to these terms and all applicable laws in your jurisdiction.</p>
      </article>

      <article className="policy-page__section">
        <h2>2. User Responsibilities</h2>
        <ul>
          <li>Upload only files you own or are authorized to print.</li>
          <li>Provide accurate contact information for order communication.</li>
          <li>Do not use CopyFlow for illegal, harmful, or abusive content.</li>
        </ul>
      </article>

      <article className="policy-page__section">
        <h2>3. Service Availability</h2>
        <p>We strive for high uptime, but outages may occur because of network, power, or third-party platform dependency.</p>
      </article>

      <article className="policy-page__section">
        <h2>4. Intellectual Property</h2>
        <p>CopyFlow branding, interface elements, and technology remain the property of CopyFlow. User-uploaded files remain owned by users.</p>
      </article>

      <article className="policy-page__section">
        <h2>5. Liability Limits</h2>
        <p>To the maximum extent allowed by law, CopyFlow is not liable for indirect losses arising from service interruptions or delayed pickup.</p>
      </article>
    </PageShell>
  );
}
