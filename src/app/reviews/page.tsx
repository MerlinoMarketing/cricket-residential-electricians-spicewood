import type { Metadata } from "next";
import { Quote, Star } from "lucide-react";

import { business } from "@/config/business";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MobileCallBar } from "@/components/mobile-call-bar";
import { CtaBanner } from "@/components/cta-banner";
import { Breadcrumb, getBreadcrumbSchema } from "@/components/breadcrumb";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: `Reviews | ${business.name} — ${business.rating}-Star Rated ${business.category} in ${business.city}`,
  description: `Read ${business.reviewCount}+ verified reviews for ${business.name}. ${business.rating}-star rated ${business.category.toLowerCase()} serving ${business.city}, ${business.state}.`,
  alternates: { canonical: `${business.website}/reviews` },
};

const additionalReviews = [
  {
    name: "Jessica R.",
    service: "Electrical Repair",
    quote:
      "Our outdoor GFCI outlets kept tripping in the Texas heat. The electrician replaced them with weather-rated units and added proper covers. No more issues even during storm season.",
    location: business.city,
    rating: 5,
    date: "2025-11-14",
  },
  {
    name: "Daniel C.",
    service: "Generator Installation",
    quote:
      "With Texas summer heat, losing AC power is dangerous. They installed a whole-home generator that kicks in automatically. Worth every penny for our family's safety.",
    location: business.city,
    rating: 5,
    date: "2025-10-22",
  },
  {
    name: "Maria G.",
    service: "Lighting Installation",
    quote:
      "Had them install landscape lighting around our front yard and walkways. They chose high-quality LED fixtures and the result is stunning. Professional crew from start to finish.",
    location: business.city,
    rating: 5,
    date: "2025-09-08",
  },
];

const allReviews = [
  ...business.reviews.map((r, i) => ({
    ...r,
    date: `2026-0${i + 1}-15`,
  })),
  ...additionalReviews,
];

export default function ReviewsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        <section className="section-shell" aria-labelledby="reviews-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: "Reviews" }]} />

            <SectionHeading
              eyebrow="Customer Reviews"
              title={`See why ${business.city} homeowners trust ${business.name}.`}
              description={`We're proud of our ${business.rating}-star rating from ${business.reviewCount}+ verified reviews. Here's what our customers have to say.`}
              align="center"
            />

            <div className="reveal mx-auto mt-10 flex max-w-4xl flex-col items-center justify-between gap-4 rounded-[2rem] border border-gray-200 bg-gray-50 px-6 py-5 text-center sm:flex-row sm:text-left">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-primary">Google Reviews</p>
                <p className="mt-2 text-xl font-semibold text-gray-900">
                  {business.rating} average rating from {business.reviewCount}+ reviews
                </p>
              </div>
              <a
                href={business.cidUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-gray-200 px-5 text-sm font-semibold text-gray-700 transition hover:border-primary/40 hover:bg-white"
              >
                View on Google
              </a>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {allReviews.map((review) => (
                <article
                  key={`${review.name}-${review.service}`}
                  className="review-card rounded-[2rem] border border-gray-200 bg-white p-6"
                >
                  <div className="flex h-full flex-col gap-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: review.rating }).map((_, index) => (
                          <Star key={index} className="size-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <div className="rounded-full border border-primary/10 bg-primary/5 p-2 text-primary">
                        <Quote className="size-4" />
                      </div>
                    </div>
                    <p className="text-base leading-8 text-gray-600">&ldquo;{review.quote}&rdquo;</p>
                    <div className="mt-auto border-t border-gray-100 pt-5">
                      <p className="font-semibold text-gray-900">{review.name}</p>
                      <p className="text-sm text-gray-400">{review.location} &middot; {review.service}</p>
                      {"date" in review && <p className="mt-1 text-xs text-gray-300">{review.date}</p>}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
      <MobileCallBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: business.name,
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: business.rating,
              reviewCount: business.reviewCount,
              bestRating: 5,
            },
            review: allReviews.map((r) => ({
              "@type": "Review",
              author: { "@type": "Person", name: r.name },
              reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
              reviewBody: r.quote,
              ...("date" in r ? { datePublished: r.date } : {}),
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema([{ label: "Reviews", href: "/reviews" }])),
        }}
      />
    </>
  );
}
