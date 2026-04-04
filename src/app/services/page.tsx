import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { brand } from "@/config/brand";
import { services } from "@/config/services";
import { getServiceIcon } from "@/lib/business";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MobileCallBar } from "@/components/mobile-call-bar";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: `Our Services — ${brand.name}`,
  description: `Explore the full range of residential electrician services offered by ${brand.name}. Licensed, insured, and trusted across all locations.`,
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="border-b border-gray-200 pb-16 pt-32 sm:pt-36">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              What We Do
            </p>
            <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Professional residential electrician services.
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-500">
              From routine maintenance to emergency repairs, our licensed team
              delivers reliable results backed by {brand.yearsInBusiness}+ years
              of experience.
            </p>
          </div>
        </section>

        <section className="section-shell">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = getServiceIcon(service.icon);
                return (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="service-card group rounded-xl border-gray-200 bg-white p-6"
                  >
                    <div className="flex h-full flex-col justify-between gap-8">
                      <div className="space-y-4">
                        <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <Icon className="size-6" />
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-900">
                          {service.name}
                        </h2>
                        <p className="text-sm leading-7 text-gray-500">
                          {service.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-medium text-primary">
                        Learn more
                        <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                );
              })}
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
