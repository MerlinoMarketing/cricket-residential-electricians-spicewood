import type { Metadata } from "next";

import { business } from "@/config/business";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MobileCallBar } from "@/components/mobile-call-bar";
import { Breadcrumb, getBreadcrumbSchema } from "@/components/breadcrumb";

export const metadata: Metadata = {
  title: `Terms of Service | ${business.name}`,
  description: `Terms of service for ${business.name}. Read our terms governing the use of our website and electrical services.`,
  alternates: { canonical: `${business.website}/terms` },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        <section className="section-shell">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: "Terms of Service" }]} />
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Terms of Service</h1>
            <p className="mt-4 text-sm text-gray-400">Last updated: March 25, 2026</p>

            <div className="mt-10 space-y-8 text-base leading-7 text-gray-600">
              <section>
                <h2 className="text-xl font-semibold text-gray-900">1. Acceptance of Terms</h2>
                <p className="mt-3">By accessing or using the {business.name} website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.</p>
              </section>
              <section>
                <h2 className="text-xl font-semibold text-gray-900">2. Services</h2>
                <p className="mt-3">{business.name} provides professional residential electrical services in {business.city}, {business.state} and surrounding areas. All services are subject to availability and may require an on-site assessment before work begins.</p>
              </section>
              <section>
                <h2 className="text-xl font-semibold text-gray-900">3. Estimates and Pricing</h2>
                <p className="mt-3">We provide free estimates for most electrical services. Estimates are valid for 30 days unless otherwise stated. Final pricing may vary based on actual conditions discovered during the work. Any changes will be communicated and approved before proceeding.</p>
              </section>
              <section>
                <h2 className="text-xl font-semibold text-gray-900">4. Scheduling and Cancellation</h2>
                <p className="mt-3">Appointments can be rescheduled or cancelled with at least 24 hours&apos; notice. We make every effort to arrive within the scheduled service window.</p>
              </section>
              <section>
                <h2 className="text-xl font-semibold text-gray-900">5. Payment Terms</h2>
                <p className="mt-3">Payment is due upon completion of services unless other arrangements have been agreed upon in writing. We accept all major credit cards, checks, and cash. Financing options may be available for qualifying projects.</p>
              </section>
              <section>
                <h2 className="text-xl font-semibold text-gray-900">6. Warranties</h2>
                <p className="mt-3">All workmanship is backed by our service warranty. Manufacturer warranties apply to all installed products and equipment.</p>
              </section>
              <section>
                <h2 className="text-xl font-semibold text-gray-900">7. Limitation of Liability</h2>
                <p className="mt-3">{business.name} shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website. Our total liability shall not exceed the amount paid for the specific service giving rise to the claim.</p>
              </section>
              <section>
                <h2 className="text-xl font-semibold text-gray-900">8. Intellectual Property</h2>
                <p className="mt-3">All content on this website is the property of {business.name} and is protected by applicable intellectual property laws.</p>
              </section>
              <section>
                <h2 className="text-xl font-semibold text-gray-900">9. Governing Law</h2>
                <p className="mt-3">These terms are governed by the laws of the state of {business.state}. Any disputes shall be resolved in the courts of {business.state}.</p>
              </section>
              <section>
                <h2 className="text-xl font-semibold text-gray-900">10. Contact</h2>
                <p className="mt-3">
                  For questions about these terms, contact us at: <a href={`mailto:${business.email}`} className="text-primary hover:underline">{business.email}</a> or call <a href={`tel:${business.phone.replace(/[^\d+]/g, "")}`} className="text-primary hover:underline">{business.phone}</a>.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCallBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema([{ label: "Terms of Service", href: "/terms" }])) }}
      />
    </>
  );
}
