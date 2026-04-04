import Link from "next/link";
import { ArrowRight, Quote, Star } from "lucide-react";

import { brand } from "@/config/brand";
import { business } from "@/config/business";
import { SectionHeading } from "@/components/section-heading";

export function Reviews() {
  return (
    <section id="reviews" className="section-shell" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Customer Reviews"
          title={`See why homeowners trust ${brand.name}.`}
          description={`We are proud of our ${business.rating}-star rating from ${business.reviewCount}+ verified reviews. Here is what our customers have to say.`}
          align="center"
        />

        <div className="reveal flex snap-x gap-5 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible">
          {business.reviews.map((review) => (
            <article
              key={`${review.name}-${review.service}`}
              className="review-card min-w-[85%] snap-center rounded-xl border-gray-200 bg-white p-6 md:min-w-0"
            >
              <div className="flex h-full flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <Star
                        key={index}
                        className="size-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <div className="rounded-full border border-primary/10 bg-primary/5 p-2 text-primary">
                    <Quote className="size-4" />
                  </div>
                </div>

                <p className="text-base leading-8 text-gray-600">
                  &ldquo;{review.quote}&rdquo;
                </p>

                <div className="mt-auto border-t border-dashed border-gray-100 pt-5">
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-400">
                    {review.location} &middot; {review.service}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 rounded-xl border border-dashed border-gray-200 bg-gray-50 px-6 py-5 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary">
              All Reviews
            </p>
            <p className="mt-2 text-xl font-semibold text-gray-900">
              {business.rating} average from {business.reviewCount}+ reviews
            </p>
          </div>
          <Link
            href="/reviews"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-gray-200 px-5 text-sm font-semibold text-gray-700 transition hover:border-primary/40 hover:bg-white"
          >
            View All Reviews
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
