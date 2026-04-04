import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";

import { brand } from "@/config/brand";
import { business } from "@/config/business";
import { toTel } from "@/lib/business";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MobileCallBar } from "@/components/mobile-call-bar";
import { SectionHeading } from "@/components/section-heading";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: `Pricing -- ${brand.name}`,
  description: `Transparent pricing for residential electrical services from ${brand.name}. View typical price ranges for common services and request a free estimate.`,
};

const pricingCategories = [
  {
    title: "Outlets & Switches",
    items: [
      { service: "Standard outlet installation", range: "$150 - $300" },
      { service: "GFCI outlet installation", range: "$175 - $350" },
      { service: "USB outlet installation", range: "$175 - $325" },
      { service: "Dedicated 240V outlet", range: "$350 - $650" },
      { service: "Switch replacement", range: "$100 - $250" },
      { service: "Dimmer switch installation", range: "$125 - $275" },
    ],
  },
  {
    title: "Lighting",
    items: [
      { service: "Recessed light installation (per fixture)", range: "$150 - $250" },
      { service: "Ceiling fan installation", range: "$200 - $450" },
      { service: "Chandelier installation", range: "$250 - $500" },
      { service: "Under-cabinet lighting", range: "$400 - $800" },
      { service: "Landscape lighting (basic)", range: "$1,200 - $3,000" },
      { service: "Security floodlight installation", range: "$200 - $400" },
    ],
  },
  {
    title: "Panel & Wiring",
    items: [
      { service: "Panel upgrade (200-amp)", range: "$1,800 - $3,500" },
      { service: "Panel upgrade (400-amp)", range: "$3,500 - $6,000" },
      { service: "Sub-panel installation", range: "$800 - $1,800" },
      { service: "Whole-house rewiring (average home)", range: "$8,000 - $15,000" },
      { service: "Circuit addition", range: "$300 - $700" },
      { service: "Aluminum wiring remediation", range: "$3,000 - $8,000" },
    ],
  },
  {
    title: "Safety & Protection",
    items: [
      { service: "Whole-home surge protector", range: "$300 - $600" },
      { service: "Smoke detector installation (per unit)", range: "$80 - $150" },
      { service: "CO detector installation (per unit)", range: "$80 - $150" },
      { service: "GFCI protection upgrade (whole home)", range: "$500 - $1,200" },
      { service: "Electrical safety inspection", range: "$200 - $400" },
      { service: "Ground rod installation", range: "$200 - $400" },
    ],
  },
  {
    title: "Specialty Services",
    items: [
      { service: "EV charger installation (Level 2)", range: "$800 - $2,000" },
      { service: "Standby generator installation", range: "$5,000 - $12,000" },
      { service: "Hot tub / pool wiring", range: "$1,200 - $3,000" },
      { service: "Home office dedicated circuits", range: "$400 - $800" },
      { service: "Attic / garage fan wiring", range: "$300 - $600" },
      { service: "Smart home switch conversion", range: "$75 - $150 per switch" },
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="border-b border-gray-200 pb-16 pt-32 sm:pt-36">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Pricing
            </p>
            <h1 className="mt-4 max-w-3xl text-balance font-heading text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Transparent pricing for every service.
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-500">
              We believe in upfront pricing with no hidden fees. Below are
              typical price ranges for our most common residential electrical
              services. Every job gets a detailed written estimate before work
              begins.
            </p>
          </div>
        </section>

        <section className="section-shell">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-dashed border-primary/20 bg-primary/5 p-5 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-heading text-lg font-semibold text-gray-900">
                    Free estimates on every project
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    Prices shown are typical ranges. Your exact quote depends on
                    the specific scope, wiring accessibility, and local code
                    requirements. We provide a detailed written estimate before
                    any work begins.
                  </p>
                </div>
                <div className="flex shrink-0 gap-3">
                  <a
                    href={toTel(business.phone)}
                    className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-white transition hover:bg-primary/90"
                  >
                    <Phone className="size-4" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 space-y-12">
              {pricingCategories.map((category) => (
                <div key={category.title} className="reveal">
                  <h2 className="font-heading text-2xl font-semibold text-gray-900">
                    {category.title}
                  </h2>
                  <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200 bg-gray-50">
                          <th className="px-5 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Service
                          </th>
                          <th className="px-5 py-3.5 text-right text-sm font-semibold text-gray-900">
                            Typical Range
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.items.map((item, index) => (
                          <tr
                            key={item.service}
                            className={
                              index < category.items.length - 1
                                ? "border-b border-gray-100"
                                : ""
                            }
                          >
                            <td className="px-5 py-4 text-sm text-gray-600">
                              {item.service}
                            </td>
                            <td className="px-5 py-4 text-right text-sm font-medium text-gray-900">
                              {item.range}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell border-t border-gray-200 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <SectionHeading
                  eyebrow="Our Pricing Promise"
                  title="No surprises, no hidden fees, no pressure."
                  description="We earn your trust through transparency. Here is what you can expect when you work with us."
                />
                <ul className="mt-8 space-y-4">
                  {[
                    "Free on-site estimates for all projects",
                    "Detailed written quote before any work begins",
                    "No hidden trip charges or diagnostic fees",
                    "Price locked once you approve the scope",
                    "No overtime charges for scheduled appointments",
                    "Satisfaction guaranteed on every job",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                      <span className="text-sm leading-7 text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full max-w-md rounded-xl bg-primary p-6 text-white sm:p-8">
                  <p className="font-heading text-2xl font-semibold">
                    Ready for your free estimate?
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/80">
                    Call us directly or request a quote online. Most estimates
                    are provided same-day for straightforward projects.
                  </p>
                  <div className="mt-6 flex flex-col gap-3">
                    <a
                      href={toTel(business.phone)}
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
                    >
                      <Phone className="size-4" />
                      {business.phone}
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      Request Quote Online
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
