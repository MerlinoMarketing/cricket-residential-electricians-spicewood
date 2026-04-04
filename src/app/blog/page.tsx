import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

import { brand } from "@/config/brand";
import { blogPosts } from "@/config/blog";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MobileCallBar } from "@/components/mobile-call-bar";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: `Blog -- ${brand.name}`,
  description: `Expert electrical tips, guides, and safety advice from ${brand.name}. Stay informed about your home's electrical system.`,
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="border-b border-gray-200 pb-16 pt-32 sm:pt-36">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Blog
            </p>
            <h1 className="mt-4 max-w-3xl text-balance font-heading text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Electrical tips, guides, and expert advice.
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-500">
              Stay informed about your home&apos;s electrical system with practical
              articles from our licensed electricians.
            </p>
          </div>
        </section>

        <section className="section-shell">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="service-card group rounded-xl border-gray-200 bg-white p-6"
                >
                  <div className="flex h-full flex-col justify-between gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          {post.category}
                        </span>
                      </div>
                      <h2 className="font-heading text-xl font-semibold text-gray-900 group-hover:text-primary">
                        {post.title}
                      </h2>
                      <p className="text-sm leading-7 text-gray-500">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="size-3.5" />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="size-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 border-t border-dashed border-gray-100 pt-4 text-sm font-medium text-primary">
                        Read article
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
