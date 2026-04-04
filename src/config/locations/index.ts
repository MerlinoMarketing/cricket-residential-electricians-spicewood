export interface LocationReview {
  name: string;
  service: string;
  quote: string;
  location: string;
  rating: number;
}

export interface LocationFaq {
  question: string;
  answer: string;
}

export interface LocationData {
  slug: string;
  city: string;
  state: string;
  stateAbbr: string;
  zip: string;
  phone: string;
  address: string;
  cid: string;
  cidUrl: string;
  mapUrl: string;
  coordinates: { lat: number; lng: number };
  hours: string;
  rating: number;
  reviewCount: number;
  description: string;
  regionLabel: string;
  serviceAreas: string[];
  reviews: LocationReview[];
  faq: LocationFaq[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

import { spicewood } from "./spicewood";
import { sanAntonio } from "./san-antonio";

export const locations: LocationData[] = [spicewood, sanAntonio];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return locations.find((loc) => loc.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return locations.map((loc) => loc.slug);
}
