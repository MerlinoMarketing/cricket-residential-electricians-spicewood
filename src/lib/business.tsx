import {
  CheckCircle2,
  Clock3,
  Home,
  ShieldCheck,
  type LucideIcon,
  Wrench,
  Zap,
} from "lucide-react";

import { brand } from "@/config/brand";
import { business } from "@/config/business";
import type { ServiceIcon } from "@/config/services";

const iconMap = {
  wrench: Wrench,
  shield: ShieldCheck,
  home: Home,
  zap: Zap,
  clock: Clock3,
  check: CheckCircle2,
} satisfies Record<string, LucideIcon>;

export function getServiceIcon(icon: ServiceIcon) {
  return iconMap[icon] ?? Wrench;
}

export function renderServiceIcon(icon: ServiceIcon, className: string = "size-5") {
  const Icon = iconMap[icon] ?? Wrench;
  return <Icon className={className} />;
}

export function toTel(phone: string) {
  const digits = phone.replace(/[^\d+]/g, "");
  return `tel:${digits}`;
}

export function isUsableHref(href?: string | null) {
  if (!href) return false;
  const value = href.trim();
  if (!value || value === "#") return false;
  return /^(https?:|mailto:|tel:)/i.test(value);
}

export function getPostalCode() {
  if (business.zip.trim()) return business.zip.trim();
  const match = business.address.match(/\b\d{5}(?:-\d{4})?\b/);
  return match?.[0] ?? "";
}

export function getStreetAddress() {
  const parts = business.address
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);

  if (parts.length >= 4) {
    return parts.slice(0, -3).join(", ");
  }

  return parts[0] ?? business.address;
}

export function formatAddress() {
  const address = business.address.trim();
  const cityState = [business.city, business.state].filter(Boolean).join(", ");
  const postalCode = getPostalCode();

  if (address.includes(business.city) || address.includes(cityState)) {
    return address;
  }

  return [address, cityState, postalCode]
    .filter(Boolean)
    .join(" ")
    .replace(/\s+,/g, ",");
}

export function getSiteUrl() {
  try {
    return new URL(brand.website);
  } catch {
    return new URL("https://example.com");
  }
}

export function getAbsoluteAssetUrl(path: string) {
  return new URL(path, getSiteUrl()).toString();
}

export function slugifyArea(area: string) {
  return area
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: brand.name,
    description: business.seo.description,
    telephone: business.phone,
    email: brand.email,
    url: brand.website,
    image: getAbsoluteAssetUrl(brand.heroImage),
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: getStreetAddress(),
      addressLocality: business.city,
      addressRegion: business.state,
      postalCode: getPostalCode(),
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.coordinates.lat,
      longitude: business.coordinates.lng,
    },
    areaServed: business.serviceAreas,
    openingHours: business.hours,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.rating,
      reviewCount: business.reviewCount,
    },
    sameAs: Object.values(brand.socialLinks).filter(isUsableHref),
  };
}

export function getFaqItems() {
  const category = business.category.toLowerCase();
  return [
    {
      question: `What areas does ${business.name} serve?`,
      answer: `We proudly serve ${business.serviceAreas.join(", ")}. Contact us to confirm availability in your specific location.`,
    },
    {
      question: `Are you licensed and insured?`,
      answer: `Yes. ${business.name} is ${business.license.toLowerCase()} and ${business.insurance.toLowerCase()}. We carry full liability and workers' compensation coverage for your protection.`,
    },
    {
      question: `Do you offer free estimates?`,
      answer: `Absolutely. We provide free, no-obligation estimates for all ${category} services. Call ${business.phone} or fill out our online form to get started.`,
    },
    {
      question: `Do you offer emergency ${category} services?`,
      answer: `Yes, we offer ${business.emergencyLabel.toLowerCase()}. Call ${business.phone} anytime for immediate assistance.`,
    },
    {
      question: `How quickly can you respond?`,
      answer: `We offer ${business.turnaroundLabel.toLowerCase()} for most requests. Emergency situations are prioritized for the fastest possible response.`,
    },
    {
      question: `What payment methods do you accept?`,
      answer: `We accept all major credit cards, checks, and cash. Financing options are available for larger projects. We provide transparent pricing with no hidden fees.`,
    },
  ];
}

export function getFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: getFaqItems().map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": business.services.map((service) => ({
      "@type": "Service",
      serviceType: service.name,
      provider: {
        "@type": "LocalBusiness",
        name: brand.name,
        telephone: business.phone,
      },
      areaServed: business.serviceAreas,
      description: service.description,
    })),
  };
}
