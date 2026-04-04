import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Star } from "lucide-react";

import { brand } from "@/config/brand";
import { locations } from "@/config/locations";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MobileCallBar } from "@/components/mobile-call-bar";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: `Service Locations — ${brand.name}`,
  description: `${brand.name} provides licensed residential electrician services in ${locations.map((l) => `${l.city}, ${l.stateAbbr}`).join(" | ")}. Find your nearest location.`,
};

export default function LocationsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="border-b border-gray-200 pb-16 pt-32 sm:pt-36">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Our Locations
            </p>
            <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Residential electrician services in {locations.length} regions.
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-500">
              Each location is staffed with licensed, insured technicians who
              know the local code requirements and respond fast. Select your area
              below.
            </p>
          </div>
        </section>

        <section className="section-shell">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2">
              {locations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="group dotted-card reveal rounded-xl bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-900/5"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <MapPin className="size-6" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div>
                        <h2 className="text-xl font-semibold text-gray-900">
                          {loc.city}, {loc.stateAbbr}
                        </h2>
                        <p className="text-sm text-gray-400">
                          {loc.regionLabel}
                        </p>
                      </div>
                      <p className="text-sm leading-7 text-gray-500">
                        {loc.description.slice(0, 160)}...
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <span className="inline-flex items-center gap-1.5">
                          <Star className="size-3.5 fill-amber-400 text-amber-400" />
                          {loc.rating} ({loc.reviewCount}+ reviews)
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Phone className="size-3.5" />
                          {loc.phone}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-medium text-primary">
                        View location details
                        <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
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
