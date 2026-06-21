import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Strata Green",
  description:
    "How Strata Green collects, uses, and protects personal data across our institutional energy infrastructure platform.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal · Privacy"
      title="Privacy Policy"
      lastUpdated="1 May 2026"
      intro="Strata Green Holdings PLC (“Strata Green”, “we”, “us”) is committed to protecting the privacy of investors, partners, candidates, and visitors. This policy explains what personal data we process, why we process it, and the rights available to you."
      sections={[
        {
          id: "data-we-collect",
          heading: "1. Data We Collect",
          body: [
            "We collect information you provide directly — such as your name, organisation, email address, and telephone number when you subscribe to The Energy Briefing, request investor materials, or apply for a role.",
            "We also collect technical data automatically when you visit our platform, including IP address, device and browser type, and pages viewed, in order to operate and secure the service.",
          ],
          bullets: [
            "Identity and contact data (name, organisation, email, phone)",
            "Investor and onboarding data, where you engage our Investor Relations team",
            "Technical and usage data collected via cookies and similar technologies",
          ],
        },
        {
          id: "how-we-use",
          heading: "2. How We Use Your Data",
          body: [
            "We process personal data to deliver requested materials, manage investor and commercial relationships, recruit talent, improve our platform, and meet legal and regulatory obligations applicable to a listed infrastructure company.",
          ],
        },
        {
          id: "legal-basis",
          heading: "3. Legal Basis for Processing",
          body: [
            "Where the UK GDPR or EU GDPR applies, we rely on one or more of the following bases: your consent, the performance of a contract, our legitimate business interests, and compliance with a legal obligation.",
          ],
        },
        {
          id: "sharing",
          heading: "4. Sharing and International Transfers",
          body: [
            "We do not sell personal data. We share data only with vetted service providers, professional advisers, and regulators where required. Where data is transferred outside the UK or EEA, we apply appropriate safeguards such as Standard Contractual Clauses.",
          ],
        },
        {
          id: "retention",
          heading: "5. Data Retention",
          body: [
            "We retain personal data only for as long as necessary for the purposes set out above, after which it is securely deleted or anonymised in line with our records-retention schedule.",
          ],
        },
        {
          id: "your-rights",
          heading: "6. Your Rights",
          body: [
            "Subject to applicable law, you may request access to, correction, or deletion of your personal data, object to or restrict certain processing, and withdraw consent at any time.",
          ],
          bullets: [
            "Access, rectification, and erasure",
            "Restriction of and objection to processing",
            "Data portability and withdrawal of consent",
          ],
        },
      ]}
    />
  );
}
