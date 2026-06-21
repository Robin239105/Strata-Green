import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy | Strata Green",
  description:
    "How Strata Green uses cookies and similar technologies, and how to manage your preferences.",
};

export default function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Legal · Cookies"
      title="Cookie Policy"
      lastUpdated="1 May 2026"
      intro="This Cookie Policy explains how Strata Green uses cookies and similar technologies to recognise you when you visit our platform, and the choices available to you. It should be read alongside our Privacy Policy."
      sections={[
        {
          id: "what-are-cookies",
          heading: "1. What Are Cookies?",
          body: [
            "Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work, to improve efficiency, and to provide reporting information to site operators.",
          ],
        },
        {
          id: "types-we-use",
          heading: "2. Types of Cookies We Use",
          body: [
            "We use a limited set of cookies, grouped by purpose:",
          ],
          bullets: [
            "Strictly necessary — required for core functionality such as security and navigation",
            "Performance and analytics — help us understand how the platform is used so we can improve it",
            "Preference — remember choices such as region and display settings",
          ],
        },
        {
          id: "third-party-cookies",
          heading: "3. Third-Party Cookies",
          body: [
            "Some cookies are set by third-party services that appear on our pages, such as analytics providers. We do not control these cookies; please refer to the relevant third party's own policy for details.",
          ],
        },
        {
          id: "managing",
          heading: "4. Managing Your Preferences",
          body: [
            "You can set or amend your browser controls to accept or refuse cookies. If you disable strictly necessary cookies, parts of the platform may not function as intended. Most browsers also allow you to delete cookies already stored.",
          ],
        },
        {
          id: "updates",
          heading: "5. Updates to This Policy",
          body: [
            "We may update this Cookie Policy to reflect changes in technology, regulation, or our practices. The “last updated” date above indicates when it was most recently revised.",
          ],
        },
      ]}
    />
  );
}
