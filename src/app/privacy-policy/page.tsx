import type { Metadata } from "next";

import { business } from "@/config/business";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MobileCallBar } from "@/components/mobile-call-bar";
import { Breadcrumb, getBreadcrumbSchema } from "@/components/breadcrumb";

export const metadata: Metadata = {
  title: `Privacy Policy | ${business.name}`,
  description: `Privacy policy for ${business.name}. Learn how we collect, use, and protect your personal information.`,
  alternates: { canonical: `${business.website}/privacy-policy` },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        <section className="section-shell">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: "Privacy Policy" }]} />
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Privacy Policy</h1>
            <p className="mt-4 text-sm text-gray-400">Last updated: March 25, 2026</p>

            <div className="mt-10 space-y-8 text-base leading-7 text-gray-600">
              <section>
                <h2 className="text-xl font-semibold text-gray-900">1. Information We Collect</h2>
                <p className="mt-3">{business.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects information you provide directly when you request a quote, schedule a service, or contact us. This may include your name, phone number, email address, service address, and details about your electrical needs.</p>
              </section>
              <section>
                <h2 className="text-xl font-semibold text-gray-900">2. How We Use Your Information</h2>
                <p className="mt-3">We use your information to:</p>
                <ul className="mt-3 list-disc space-y-2 pl-6">
                  <li>Provide, maintain, and improve our electrical services</li>
                  <li>Respond to your inquiries and schedule appointments</li>
                  <li>Send service reminders and follow-up communications</li>
                  <li>Process payments and maintain business records</li>
                  <li>Comply with legal obligations and protect our rights</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-semibold text-gray-900">3. Information Sharing</h2>
                <p className="mt-3">We do not sell, rent, or share your personal information with third parties for marketing purposes. We may share information with service providers who assist in our business operations under strict confidentiality agreements.</p>
              </section>
              <section>
                <h2 className="text-xl font-semibold text-gray-900">4. Data Security</h2>
                <p className="mt-3">We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
              </section>
              <section>
                <h2 className="text-xl font-semibold text-gray-900">5. Cookies and Analytics</h2>
                <p className="mt-3">Our website may use cookies and similar technologies to improve your browsing experience and analyze site traffic. You can control cookie preferences through your browser settings.</p>
              </section>
              <section>
                <h2 className="text-xl font-semibold text-gray-900">6. Your Rights</h2>
                <p className="mt-3">You have the right to access, correct, or delete your personal information. To exercise these rights, contact us at {business.email} or call {business.phone}.</p>
              </section>
              <section>
                <h2 className="text-xl font-semibold text-gray-900">7. Changes to This Policy</h2>
                <p className="mt-3">We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date.</p>
              </section>
              <section>
                <h2 className="text-xl font-semibold text-gray-900">8. Contact Us</h2>
                <p className="mt-3">
                  If you have questions about this privacy policy, please contact us at: <a href={`mailto:${business.email}`} className="text-primary hover:underline">{business.email}</a> or call <a href={`tel:${business.phone.replace(/[^\d+]/g, "")}`} className="text-primary hover:underline">{business.phone}</a>.
                </p>
                <p className="mt-2">{business.name}<br />{business.address}</p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCallBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema([{ label: "Privacy Policy", href: "/privacy-policy" }])) }}
      />
    </>
  );
}
