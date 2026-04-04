/**
 * Compatibility shim -- re-exports brand + services + default location (Spicewood)
 * so existing components continue to work without changes.
 */
import { brand } from "./brand";
import { services, type Service, type ServiceIcon } from "./services";
import { spicewood } from "./locations/spicewood";

export type { ServiceIcon, Service };

export type Review = {
  name: string;
  location: string;
  quote: string;
  rating: number;
  service: string;
};

export type Theme = {
  name: string;
  primary: string;
  accent: string;
};

export const business = {
  /* brand identity */
  name: brand.name,
  tagline: brand.tagline,
  category: brand.category,
  email: brand.email,
  website: brand.website,
  yearsInBusiness: brand.yearsInBusiness,
  founded: brand.founded,
  license: brand.license,
  insurance: brand.insurance,
  emergencyLabel: brand.emergencyLabel,
  turnaroundLabel: brand.turnaroundLabel,
  heroImage: brand.heroImage,
  aboutImage: brand.aboutImage,
  serviceImages: brand.serviceImages,
  theme: brand.theme satisfies Theme,
  socialLinks: brand.socialLinks,
  trustBadges: brand.trustBadges,

  /* default location (Spicewood -- HQ) */
  phone: brand.phone,
  address: spicewood.address,
  city: spicewood.city,
  state: spicewood.stateAbbr,
  zip: spicewood.zip,
  cid: spicewood.cid,
  cidUrl: spicewood.cidUrl,
  mapUrl: spicewood.mapUrl,
  coordinates: spicewood.coordinates,
  hours: spicewood.hours,
  rating: spicewood.rating,
  reviewCount: spicewood.reviewCount,
  serviceAreas: spicewood.serviceAreas,

  /* services & reviews */
  services,
  reviews: spicewood.reviews satisfies Review[],

  seo: {
    title: `${brand.name} -- Trusted Residential Electrical Experts`,
    description:
      "Top-rated residential electrician serving Spicewood TX and San Antonio TX. Licensed, insured, and trusted since 2015. Call for a free estimate.",
    keywords: [
      "electrician",
      "residential electrician",
      "electrician near me",
      "Cricket Residential Electricians",
    ],
  },
};
