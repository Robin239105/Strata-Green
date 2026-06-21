import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service | Strata Green",
  description:
    "The terms governing your use of the Strata Green platform, materials, and services.",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal · Terms"
      title="Terms of Service"
      lastUpdated="1 May 2026"
      intro="These Terms of Service (“Terms”) govern your access to and use of the Strata Green website, platform, and related materials. By using the platform you agree to these Terms. If you do not agree, please discontinue use."
      sections={[
        {
          id: "use-of-platform",
          heading: "1. Use of the Platform",
          body: [
            "You may use the platform for lawful, informational, and professional purposes only. You agree not to interfere with its operation, attempt unauthorised access, or use it in any way that could damage or impair the service.",
          ],
        },
        {
          id: "no-investment-advice",
          heading: "2. No Investment Advice",
          body: [
            "Content on this platform — including project data, telemetry, and performance figures — is provided for information only and does not constitute investment advice, a solicitation, or an offer to buy or sell any security or interest in any fund or asset.",
            "Any illustrative metrics, including live generation and impact figures, may be simulated or indicative and should not be relied upon for investment decisions.",
          ],
        },
        {
          id: "intellectual-property",
          heading: "3. Intellectual Property",
          body: [
            "All trademarks, logos, content, and software on the platform are owned by or licensed to Strata Green and are protected by intellectual property laws. You may not reproduce or redistribute material without our prior written consent.",
          ],
        },
        {
          id: "third-party",
          heading: "4. Third-Party Links",
          body: [
            "The platform may link to third-party websites or resources. We are not responsible for the content, accuracy, or practices of those third parties, and access is at your own risk.",
          ],
        },
        {
          id: "liability",
          heading: "5. Limitation of Liability",
          body: [
            "To the fullest extent permitted by law, Strata Green is not liable for any indirect, incidental, or consequential loss arising from your use of, or inability to use, the platform. The platform is provided “as is” without warranties of any kind.",
          ],
        },
        {
          id: "governing-law",
          heading: "6. Governing Law",
          body: [
            "These Terms are governed by the laws of England and Wales, and any disputes are subject to the exclusive jurisdiction of the English courts. We may update these Terms from time to time; continued use constitutes acceptance of the revised Terms.",
          ],
        },
      ]}
    />
  );
}
