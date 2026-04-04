"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { ChevronDown, Menu, Phone } from "lucide-react";

import { brand } from "@/config/brand";
import { business } from "@/config/business";
import { services } from "@/config/services";
import { toTel } from "@/lib/business";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Locations", href: "/locations", hasDropdown: false },
  { label: "About", href: "/about", hasDropdown: false },
  { label: "Reviews", href: "/reviews", hasDropdown: false },
  { label: "Blog", href: "/blog", hasDropdown: false },
  { label: "Pricing", href: "/pricing", hasDropdown: false },
  { label: "FAQ", href: "/faq", hasDropdown: false },
  { label: "Contact", href: "/contact", hasDropdown: false },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleMouseEnter() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setDropdownOpen(true);
  }

  function handleMouseLeave() {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  }

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-xl"
          : "bg-transparent",
      ].join(" ")}
    >
      <nav
        className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <Link href="/" className="min-h-11 min-w-11 py-2">
          <span className="block font-heading text-base font-semibold tracking-[0.22em] text-gray-900 sm:text-lg">
            {brand.name}
          </span>
          <span className="block text-xs uppercase tracking-[0.25em] text-gray-400">
            {brand.category}
          </span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <div
                key={item.href}
                className="relative"
                ref={dropdownRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center gap-1 py-3 text-sm font-medium text-gray-600 transition hover:text-gray-900"
                >
                  {item.label}
                  <ChevronDown
                    className={[
                      "size-3.5 transition-transform duration-200",
                      dropdownOpen ? "rotate-180" : "",
                    ].join(" ")}
                  />
                </Link>
                {dropdownOpen && (
                  <div className="absolute left-1/2 top-full z-50 w-[540px] -translate-x-1/2 pt-2">
                    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-xl shadow-gray-900/5">
                      <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                        Our Services
                      </p>
                      <div className="grid grid-cols-2 gap-1">
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="rounded-lg px-3 py-2.5 text-sm text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
                            onClick={() => setDropdownOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                      <div className="mt-3 border-t border-gray-100 pt-3">
                        <Link
                          href="/services"
                          className="block rounded-lg px-3 py-2 text-sm font-medium text-primary transition hover:bg-primary/5"
                          onClick={() => setDropdownOpen(false)}
                        >
                          View All Services
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="min-h-11 py-3 text-sm font-medium text-gray-600 transition hover:text-gray-900"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={toTel(business.phone)}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-gray-200 px-4 text-sm font-medium text-gray-700 transition hover:border-primary/40 hover:bg-gray-50"
          >
            <Phone className="size-4 text-primary" />
            {business.phone}
          </a>
          <Button
            render={
              <Link href="/contact" className="min-h-11 rounded-full px-5 text-sm" />
            }
            className="rounded-full bg-primary px-5 text-white hover:bg-primary/90"
          >
            Get Free Quote
          </Button>
        </div>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon-lg"
                  className="min-h-11 min-w-11 rounded-full border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                />
              }
            >
              <Menu className="size-5" />
              <span className="sr-only">Open navigation</span>
            </SheetTrigger>
            <SheetContent className="w-[88vw] max-w-sm border-gray-200 bg-white px-6 py-6 text-gray-900">
              <SheetTitle className="sr-only">Mobile navigation</SheetTitle>
              <div className="space-y-8 pt-10">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-primary">
                    {brand.category}
                  </p>
                  <p className="mt-2 font-heading text-2xl font-semibold">{brand.name}</p>
                </div>

                <div className="flex flex-col gap-3">
                  {navItems.map((item) =>
                    item.hasDropdown ? (
                      <div key={item.href}>
                        <button
                          type="button"
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className="flex min-h-12 w-full items-center justify-between rounded-xl border border-dashed border-gray-200 px-4 text-base font-medium text-gray-700 transition hover:border-primary/40 hover:bg-gray-50"
                        >
                          {item.label}
                          <ChevronDown
                            className={[
                              "size-4 transition-transform duration-200",
                              mobileServicesOpen ? "rotate-180" : "",
                            ].join(" ")}
                          />
                        </button>
                        {mobileServicesOpen && (
                          <div className="mt-2 space-y-1 pl-4">
                            {services.map((service) => (
                              <SheetClose
                                key={service.slug}
                                render={
                                  <Link
                                    href={`/services/${service.slug}`}
                                    className="flex min-h-10 items-center rounded-lg px-3 text-sm text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
                                  />
                                }
                              >
                                {service.name}
                              </SheetClose>
                            ))}
                            <SheetClose
                              render={
                                <Link
                                  href="/services"
                                  className="flex min-h-10 items-center rounded-lg px-3 text-sm font-medium text-primary transition hover:bg-primary/5"
                                />
                              }
                            >
                              View All Services
                            </SheetClose>
                          </div>
                        )}
                      </div>
                    ) : (
                      <SheetClose
                        key={item.href}
                        render={
                          <Link
                            href={item.href}
                            className="flex min-h-12 items-center rounded-xl border border-dashed border-gray-200 px-4 text-base font-medium text-gray-700 transition hover:border-primary/40 hover:bg-gray-50"
                          />
                        }
                      >
                        {item.label}
                      </SheetClose>
                    )
                  )}
                </div>

                <div className="space-y-3 rounded-xl border border-dashed border-gray-200 bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">
                    Same-day appointments and fast emergency response.
                  </p>
                  <a
                    href={toTel(business.phone)}
                    className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-4 text-sm font-semibold text-white"
                  >
                    <Phone className="size-4" />
                    Call {business.phone}
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
