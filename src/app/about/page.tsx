import type { Metadata } from "next";
import {
  Award,
  BadgeCheck,
  Building2,
  Handshake,
  Shield,
  ThumbsUp,
  Users,
  Zap,
} from "lucide-react";

import { brand } from "@/config/brand";
import { business } from "@/config/business";
import { locations } from "@/config/locations";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MobileCallBar } from "@/components/mobile-call-bar";
import { CtaBanner } from "@/components/cta-banner";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: `About Us -- ${brand.name}`,
  description: `Learn about ${brand.name}: ${brand.yearsInBusiness}+ years of licensed, insured residential electrical services across ${locations.length} Texas locations since ${brand.founded}.`,
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="border-b border-gray-200 pb-16 pt-32 sm:pt-36">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              About Us
            </p>
            <h1 className="mt-4 max-w-3xl text-balance font-heading text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Trusted residential electrical experts since {brand.founded}.
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-500">
              {brand.name} was founded on a straightforward idea: homeowners
              deserve electrical work that is safe, transparent, and done right
              the first time. That commitment has carried us to {locations.length}{" "}
              Texas service regions and thousands of satisfied customers.
            </p>
          </div>
        </section>

        <section className="section-shell">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Our Values"
              title="What guides every job we take on."
              description="These principles are non-negotiable for our team, from the front office to the field."
            />

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: BadgeCheck,
                  title: "Code-First Quality",
                  copy: "Every installation and repair meets or exceeds NEC standards and local code requirements. We do not cut corners.",
                },
                {
                  icon: Handshake,
                  title: "Upfront Pricing",
                  copy: "You receive a clear, written estimate before any work begins. No surprise charges, no hidden line items.",
                },
                {
                  icon: Shield,
                  title: "Licensed & Insured",
                  copy: "Full liability coverage and workers' compensation on every job. Your property and our crew are protected.",
                },
                {
                  icon: Users,
                  title: "Community Driven",
                  copy: "We hire locally, train continuously, and reinvest in the Texas communities we serve. Our technicians live where they work.",
                },
              ].map(({ icon: Icon, title, copy }) => (
                <article
                  key={title}
                  className="reveal dotted-card rounded-xl bg-white p-6"
                >
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-gray-900">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-gray-500">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell border-t border-gray-200 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="reveal grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Zap,
                  stat: `${brand.yearsInBusiness}+`,
                  label: "Years in Business",
                },
                {
                  icon: Building2,
                  stat: `${locations.length}`,
                  label: "Service Regions",
                },
                {
                  icon: ThumbsUp,
                  stat: `${business.reviewCount}+`,
                  label: "Five-Star Reviews",
                },
                {
                  icon: Award,
                  stat: "100%",
                  label: "Licensed Technicians",
                },
              ].map(({ icon: Icon, stat, label }) => (
                <div
                  key={label}
                  className="rounded-xl border border-gray-200 bg-white p-6 text-center"
                >
                  <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <p className="mt-4 font-heading text-3xl font-semibold text-gray-900">
                    {stat}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <p className="reveal text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Our Promise
            </p>
            <p className="reveal mt-4 text-xl leading-9 text-gray-700">
              We believe in honest assessments, fair pricing, and standing behind
              every job. From the first phone call to the final walkthrough, you
              will experience the difference that {brand.yearsInBusiness}+ years
              of dedication makes. If something is not right, we come back and
              make it right -- no questions, no charges.
            </p>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
