import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  MapPin,
  Phone,
  Quote,
  Star,
} from "lucide-react";

import { brand } from "@/config/brand";
import { services } from "@/config/services";
import { locations, getLocationBySlug, getAllLocationSlugs } from "@/config/locations";
import { getServiceIcon, toTel } from "@/lib/business";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MobileCallBar } from "@/components/mobile-call-bar";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";

export function generateStaticParams() {
  return getAllLocationSlugs().map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const loc = getLocationBySlug(city);
  if (!loc) return {};
  return {
    title: loc.seo.title,
    description: loc.seo.description,
    keywords: loc.seo.keywords,
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const loc = getLocationBySlug(city);
  if (!loc) notFound();

  const otherLocations = locations.filter((l) => l.slug !== city);

  /* Location-specific schema */
  const locSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${brand.name} — ${loc.city}`,
    description: loc.description,
    telephone: loc.phone,
    email: brand.email,
    url: `${brand.website}/locations/${loc.slug}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: loc.city,
      addressRegion: loc.stateAbbr,
      postalCode: loc.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: loc.coordinates.lat,
      longitude: loc.coordinates.lng,
    },
    areaServed: loc.serviceAreas,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: loc.rating,
      reviewCount: loc.reviewCount,
    },
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="border-b border-gray-200 pb-16 pt-32 sm:pt-36">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/locations"
              className="mb-6 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-gray-900"
            >
              <ArrowLeft className="size-4" />
              All Locations
            </Link>
            <div className="grid gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="flex size-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="size-7" />
                </div>
                <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  Electrician in {loc.city}, {loc.stateAbbr}
                </h1>
                <p className="mt-2 text-sm text-gray-400">{loc.regionLabel}</p>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-500">
                  {loc.description}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white/80 px-3 py-1.5">
                    <Star className="size-4 fill-amber-400 text-amber-400" />
                    <span className="font-semibold text-gray-900">{loc.rating}</span>
                    <span>from {loc.reviewCount}+ reviews</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3 lg:pt-10">
                <Button
                  render={
                    <a href={toTel(loc.phone)} className="min-h-12 rounded-full px-6 text-base" />
                  }
                  className="rounded-full bg-primary px-6 text-white hover:bg-primary/90"
                >
                  <Phone className="size-4" />
                  Call {loc.phone}
                </Button>
                <Button
                  render={
                    <Link href="/contact" className="min-h-12 rounded-full px-6 text-base" />
                  }
                  variant="outline"
                  className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Request Free Quote
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services available */}
        <section className="section-shell">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
              <div className="space-y-10">
                <SectionHeading
                  eyebrow={`Services in ${loc.city}`}
                  title={`Residential electrician services available in ${loc.city}.`}
                  description={`Whether you need routine maintenance, a major installation, or an emergency repair, our ${loc.city} team is ready. We keep response times fast so you are never waiting long.`}
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  {services.map((service) => {
                    const Icon = getServiceIcon(service.icon);
                    return (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="group flex items-start gap-4 rounded-xl border border-dashed border-gray-200 bg-white p-4 transition hover:border-primary/30"
                      >
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <Icon className="size-5" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 group-hover:text-primary">
                            {service.name}
                          </p>
                          <p className="mt-1 text-sm leading-6 text-gray-500">
                            {service.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {/* Why choose us */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Why {loc.city} residents choose {brand.name}
                  </h3>
                  <ul className="space-y-3">
                    {[
                      `Fast response times throughout the ${loc.regionLabel} area`,
                      `${brand.yearsInBusiness}+ years of hands-on experience`,
                      `${loc.reviewCount}+ five-star reviews from ${loc.city} homeowners`,
                      `${brand.license} with ${brand.insurance.toLowerCase()} coverage`,
                      "Upfront pricing with no hidden fees or trip charges",
                      "Same-day and emergency service available",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                        <span className="text-sm leading-7 text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="space-y-6">
                <div className="dotted-card rounded-xl bg-white p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                    {loc.city} Service Info
                  </p>
                  <dl className="mt-4 space-y-4">
                    {[
                      { label: "Phone", value: loc.phone },
                      { label: "Hours", value: loc.hours },
                      { label: "Rating", value: `${loc.rating}/5 (${loc.reviewCount}+ reviews)` },
                      { label: "Emergency", value: brand.emergencyLabel },
                      { label: "Licensing", value: brand.license },
                    ].map(({ label, value }) => (
                      <div key={label} className="border-b border-gray-200 pb-3 last:border-0 last:pb-0">
                        <dt className="text-xs uppercase tracking-[0.2em] text-gray-400">{label}</dt>
                        <dd className="mt-1 text-sm font-medium text-gray-700">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="rounded-xl bg-primary p-6 text-white">
                  <p className="text-lg font-semibold">Serving {loc.city}</p>
                  <p className="mt-2 text-sm leading-7 text-white/80">
                    Call now for a free estimate or to schedule a same-day
                    appointment in the {loc.regionLabel} area.
                  </p>
                  <a
                    href={toTel(loc.phone)}
                    className="mt-4 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
                  >
                    <Phone className="size-4" />
                    {loc.phone}
                  </a>
                </div>

                {/* Service areas */}
                <div className="dotted-card rounded-xl bg-white p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                    Service Areas
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {loc.serviceAreas.map((area) => (
                      <span
                        key={area}
                        className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1.5 text-sm text-gray-600"
                      >
                        <MapPin className="size-3 text-gray-400" />
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Reviews */}
        {loc.reviews.length > 0 && (
          <section className="section-shell border-t border-gray-200 bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading
                eyebrow={`${loc.city} Reviews`}
                title={`What ${loc.city} homeowners say about us.`}
                description={`We have earned a ${loc.rating}-star rating from ${loc.reviewCount}+ verified reviews in the ${loc.regionLabel} area.`}
              />
              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {loc.reviews.map((review) => (
                  <article
                    key={`${review.name}-${review.service}`}
                    className="review-card rounded-xl border-gray-200 bg-white p-6"
                  >
                    <div className="flex h-full flex-col gap-5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <div className="rounded-full border border-primary/10 bg-primary/5 p-2 text-primary">
                          <Quote className="size-4" />
                        </div>
                      </div>
                      <p className="text-base leading-8 text-gray-600">
                        &ldquo;{review.quote}&rdquo;
                      </p>
                      <div className="mt-auto border-t border-gray-100 pt-4">
                        <p className="font-semibold text-gray-900">{review.name}</p>
                        <p className="text-sm text-gray-400">
                          {review.location} &middot; {review.service}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        {loc.faq.length > 0 && (
          <section className="section-shell border-t border-gray-200">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <SectionHeading
                eyebrow={`${loc.city} FAQ`}
                title={`Common questions from ${loc.city} homeowners.`}
                description="Quick answers to the questions we hear most from this service area."
              />
              <div className="mt-8 space-y-5">
                {loc.faq.map((item) => (
                  <div key={item.question} className="reveal dotted-card rounded-xl bg-white p-5">
                    <h3 className="text-base font-semibold text-gray-900">{item.question}</h3>
                    <p className="mt-2 text-sm leading-7 text-gray-600">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Other locations */}
        {otherLocations.length > 0 && (
          <section className="section-shell border-t border-gray-200 bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-semibold text-gray-900">
                Other locations we serve
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {otherLocations.map((l) => (
                  <Link
                    key={l.slug}
                    href={`/locations/${l.slug}`}
                    className="group flex items-center gap-4 rounded-xl border border-dashed border-gray-200 bg-white p-4 transition hover:border-primary/30"
                  >
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <MapPin className="size-5" />
                    </div>
                    <div>
                      <span className="font-medium text-gray-700 group-hover:text-gray-900">
                        {l.city}, {l.stateAbbr}
                      </span>
                      <p className="text-xs text-gray-400">{l.regionLabel}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <MobileCallBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locSchema) }}
      />
    </>
  );
}
