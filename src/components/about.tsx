import { BadgeCheck, Building2, Shield, ThumbsUp } from "lucide-react";

import { brand } from "@/config/brand";
import { business } from "@/config/business";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section id="about" className="section-shell bg-gray-50" aria-labelledby="about-heading">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:px-8">
        <div className="reveal">
          <div className="relative overflow-hidden rounded-xl border border-dashed border-gray-200 bg-white">
            <div
              className="min-h-[420px] bg-cover bg-center"
              style={{ backgroundImage: `url(${brand.aboutImage})` }}
              role="img"
              aria-label={`${brand.name} team at work`}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(255,255,255,0.9)_100%)]" />
            <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-gray-200 bg-white p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-primary">
                Established Track Record
              </p>
              <p className="mt-2 text-3xl font-semibold text-gray-900">
                {brand.yearsInBusiness}+ years
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Professional experience across repairs, maintenance, upgrades, and emergency callouts.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <SectionHeading
            eyebrow="About Us"
            title="Trusted electricians across every location we serve."
            description={`With over ${brand.yearsInBusiness} years of hands-on experience, we deliver reliable results backed by proper licensing, full insurance, and a commitment to customer satisfaction.`}
          />

          <div className="reveal grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: BadgeCheck,
                title: brand.license,
                copy: "Fully credentialed professionals meeting all local and state requirements.",
              },
              {
                icon: Shield,
                title: brand.insurance,
                copy: "Complete liability and workers' compensation coverage for your peace of mind.",
              },
              {
                icon: Building2,
                title: "Multi-Location",
                copy: "Serving homeowners in multiple states with the same high standard of work.",
              },
              {
                icon: ThumbsUp,
                title: "Satisfaction Guaranteed",
                copy: `Rated ${business.rating}/5 by ${business.reviewCount}+ homeowners who trust our work.`,
              },
            ].map(({ icon: Icon, title, copy }) => (
              <article
                key={title}
                className="rounded-md border border-dashed border-gray-200 bg-white p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                    <p className="text-sm leading-6 text-gray-500">{copy}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="reveal rounded-xl border border-primary/15 bg-primary/5 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Our Promise
            </p>
            <p className="mt-3 text-lg leading-8 text-gray-700">
              We believe in honest assessments, fair pricing, and standing behind every job.
              From the first phone call to the final walkthrough, you&apos;ll experience the
              difference that {brand.yearsInBusiness}+ years of dedication makes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
