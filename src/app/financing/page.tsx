import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, CreditCard, Calendar, Percent } from "lucide-react";

import { business } from "@/config/business";
import { toTel } from "@/lib/business";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MobileCallBar } from "@/components/mobile-call-bar";
import { CtaBanner } from "@/components/cta-banner";
import { Breadcrumb, getBreadcrumbSchema } from "@/components/breadcrumb";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: `Financing Options | ${business.name} — Affordable Electrical Services in ${business.city}`,
  description: `Flexible financing options for residential electrical services from ${business.name}. 0% interest plans, low monthly payments, and quick approval. Serving ${business.city}, ${business.state}.`,
  alternates: { canonical: `${business.website}/financing` },
};

const financingOptions = [
  {
    icon: Percent,
    title: "0% Interest for 12 Months",
    description: "Qualify for zero-interest financing on electrical projects over $1,000. No interest charges if paid in full within 12 months. Ideal for panel upgrades and rewiring projects.",
    highlight: "Most Popular",
    details: ["No interest if paid within 12 months", "Minimum project value: $1,000", "Quick credit decision", "No prepayment penalties"],
  },
  {
    icon: Calendar,
    title: "Low Monthly Payments",
    description: "Spread the cost of major electrical work over 24 to 60 months with predictable monthly payments. Perfect for whole-home generator installations and major upgrades.",
    highlight: "Flexible Terms",
    details: ["Terms from 24 to 60 months", "Fixed monthly payments", "Competitive interest rates", "Available for projects over $2,500"],
  },
  {
    icon: CreditCard,
    title: "Same-Day Approval",
    description: "Apply and get approved the same day as your service call. Simple application process with decisions in minutes. No impact on your credit score for initial pre-qualification.",
    highlight: "Quick & Easy",
    details: ["Soft credit check for pre-qualification", "Decisions in minutes", "Apply online or in-person", "Multiple lender options available"],
  },
];

export default function FinancingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        <section className="section-shell" aria-labelledby="financing-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: "Financing" }]} />

            <SectionHeading
              eyebrow="Financing Options"
              title="Quality electrical work that fits your budget."
              description={`${business.name} offers flexible financing options so you can get the residential electrical services you need without delay.`}
              align="center"
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {financingOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <article key={option.title} className="service-card relative rounded-[2rem] border border-gray-200 bg-white p-6">
                    <div className="flex h-full flex-col gap-5">
                      <div className="flex items-center justify-between">
                        <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <Icon className="size-6" />
                        </div>
                        <span className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">{option.highlight}</span>
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-gray-900">{option.title}</h3>
                        <p className="text-sm leading-7 text-gray-500">{option.description}</p>
                      </div>
                      <ul className="flex-1 space-y-2">
                        {option.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-2 text-sm text-gray-600">
                            <BadgeCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                      <div className="border-t border-gray-100 pt-4">
                        <Link href="/contact" className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-white transition hover:bg-primary/90">Apply Now</Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="reveal mt-12 rounded-[2rem] border border-primary/15 bg-primary/5 p-6 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Questions About Financing?</p>
              <p className="mt-3 text-lg leading-8 text-gray-700">
                Call us at <a href={toTel(business.phone)} className="font-semibold text-primary hover:underline">{business.phone}</a> to discuss which option works best for your project.
              </p>
            </div>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
      <MobileCallBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema([{ label: "Financing", href: "/financing" }])) }}
      />
    </>
  );
}
