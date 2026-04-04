import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock, Phone, User } from "lucide-react";

import { brand } from "@/config/brand";
import { business } from "@/config/business";
import { blogPosts, getAllBlogSlugs, getBlogPostBySlug } from "@/config/blog";
import { toTel } from "@/lib/business";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MobileCallBar } from "@/components/mobile-call-bar";

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} -- ${brand.name}`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Organization",
      name: brand.name,
    },
    datePublished: post.date,
    publisher: {
      "@type": "Organization",
      name: brand.name,
      url: brand.website,
    },
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="border-b border-gray-200 pb-16 pt-32 sm:pt-36">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-gray-900"
            >
              <ArrowLeft className="size-4" />
              All Articles
            </Link>
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {post.category}
            </span>
            <h1 className="max-w-2xl text-balance font-heading text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span className="inline-flex items-center gap-1.5">
                <User className="size-4" />
                {post.author}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="size-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {post.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base leading-8 text-gray-600"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 rounded-xl bg-primary p-6 text-white sm:p-8">
              <p className="font-heading text-xl font-semibold sm:text-2xl">
                Need professional electrical help?
              </p>
              <p className="mt-2 text-sm leading-7 text-white/80 sm:text-base">
                {brand.name} is here to help with any residential electrical
                project. Call for a free estimate or schedule a service call today.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
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
                  Get Free Quote
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {otherPosts.length > 0 && (
          <section className="section-shell border-t border-gray-200 bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="font-heading text-2xl font-semibold text-gray-900">
                More articles
              </h2>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {otherPosts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group rounded-xl border border-dashed border-gray-200 bg-white p-5 transition hover:border-primary/30 hover:shadow-md"
                  >
                    <span className="text-xs font-medium text-primary">
                      {p.category}
                    </span>
                    <h3 className="mt-2 font-heading text-base font-semibold text-gray-900 group-hover:text-primary">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {p.excerpt.slice(0, 120)}...
                    </p>
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}
