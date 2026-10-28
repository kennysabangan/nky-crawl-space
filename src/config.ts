/**
 * siteConfig.ts — Central configuration for the site.
 *
 * To clone this template for a new niche site, ONLY edit this file
 * (and swap photos in /public/photos/). Everything else is generic.
 *
 * Content rules (these keep the site out of trouble with Google and the FTC):
 * - No invented reviews, ratings, review counts, or "years in business".
 * - No credentials (licensed, insured, background-checked, guarantees,
 *   warranties, financing) until the service partner actually has them.
 */

export interface Service {
  title: string;
  slug: string;
  description: string;
  photo: string;
}

export interface City {
  name: string;
  slug: string;
  lat: string;
  lng: string;
  intro: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const siteConfig = {
  // ── Business identity ──────────────────────────────────────────────
  businessName: "NKY Crawl Space Pros",
  phone: "(859) 900-8065",
  phoneE164: "+18599008065",
  domain: "nkycrawlspacepros.com",
  siteUrl: "https://nkycrawlspacepros.com",

  // ── Form Webhook ───────────────────────────────────────────────
  // Google Sheets web app URL (set after deploying google-sheets-webhook.gs)
  formWebhookUrl: "",

  // ── Analytics ───────────────────────────────────────────────────────
  // Set these to your real GA4 / GTM IDs to enable tracking.
  // Leave as placeholders (or empty) to disable — the site still works.
  ga4MeasurementId: "G-XXXXXXXXXX",   // Google Analytics 4
  gtmContainerId: "GTM-XXXXXXX",      // Google Tag Manager

  // Google Search Console → Add property → URL prefix → "HTML tag" method.
  // Paste only the content="..." value here. Leave empty if verified via DNS.
  googleSiteVerification: "",

  // helper: truthy only when the value looks like a real ID
  get hasGA4() {
    return this.ga4MeasurementId && !this.ga4MeasurementId.startsWith('G-XX');
  },
  get hasGTM() {
    return this.gtmContainerId && !this.gtmContainerId.startsWith('GTM-XX');
  },

  // ── Location ───────────────────────────────────────────────────────
  city: "Northern Kentucky",
  state: "KY",
  region: "NKY",
  geoLat: "39.0",
  geoLng: "-84.5",

  // ── SEO keywords ──────────────────────────────────────────────────
  serviceKeyword: "crawl space repair",
  serviceKeywordPlural: "crawl space repair services",
  brandColor: "#1a6bb5",

  // ── Hero content ─────────────────────────────────────────────────
  heroTagline: "Northern Kentucky Crawl Space Repair Service",
  heroSubtext: "Protect your home from moisture, mold, and structural damage. Call for a free inspection.",
  heroAlt: "Professional crawl space repair technician at work",

  // ── Computed city lists ──────────────────────────────────────────
  get cityListShort() {
    return this.cities.slice(0, 4).map(c => c.name.replace(/, KY$/, '')).join(', ');
  },
  get cityListLong() {
    return this.cities.slice(0, 8).map(c => c.name.replace(/, KY$/, '')).join(', ');
  },

  // ── Opening hours ─────────────────────────────────────────────────
  openingHours: "Mo-Sa 08:00-18:00",

  // ── Services ──────────────────────────────────────────────────────
  services: [
    {
      title: "Crawl Space Encapsulation",
      slug: "encapsulation",
      description:
        "Complete vapor barrier installation, sealing your crawl space from moisture. Covers the floor and walls, seals vents, and controls humidity to help prevent mold and wood rot. Most homes take 1-2 days.",
      photo: "/photos/residential.jpg",
    },
    {
      title: "Crawl Space Waterproofing",
      slug: "waterproofing",
      description:
        "Sump pump installation, drainage systems, and moisture barriers to keep water out of your crawl space. Serving Florence, Covington, Fort Mitchell, and all of NKY.",
      photo: "/photos/commercial.jpg",
    },
    {
      title: "Crawl Space Mold Remediation",
      slug: "mold-remediation",
      description:
        "Professional mold removal and treatment in crawl spaces. We kill existing mold, treat affected wood, and prevent regrowth. Safe for your home.",
      photo: "/photos/mold-remediation.jpg",
    },
  ] as Service[],

  // ── FAQs ──────────────────────────────────────────────────────────
  faqs: [
    {
      question: "How much does crawl space encapsulation cost?",
      answer:
        "Contact us for a free inspection and estimate. Call (859) 900-8065.",
    },
    {
      question: "How do I know if my crawl space needs repair?",
      answer:
        "Signs include musty odors, high humidity, sagging floors, mold, standing water, or pest issues. If you notice any of these, call us.",
    },
    {
      question: "Is crawl space encapsulation worth it?",
      answer:
        "For most homes with moisture problems, yes. Controlling crawl space humidity helps prevent mold and wood rot, improves the air that rises into the house, and can reduce heating and cooling costs. How much you save depends on the home.",
    },
    {
      question: "How long does encapsulation take?",
      answer:
        "Most homes take 1-2 days. We work fast and clean up completely when we're done.",
    },
    {
      question: "Will encapsulation fix my musty smell?",
      answer:
        "Usually. The musty smell comes from moisture and mold in your crawl space. Encapsulation controls the moisture that causes it; existing mold may also need treatment.",
    },
    {
      question: "Do you offer free inspections?",
      answer:
        "Yes. We inspect your crawl space at no charge and provide a written estimate. No obligation.",
    },
    {
      question: "How do I schedule?",
      answer:
        "Call (859) 900-8065. We serve Florence, Covington, Fort Thomas, Newport, Fort Mitchell, Erlanger, Edgewood, Independence, and nearby Northern Kentucky communities.",
    },
  ] as FAQ[],

  // ── Cities served ─────────────────────────────────────────────────
  cities: [
    {
      name: "Florence, KY",
      slug: "florence-ky",
      lat: "38.9989",
      lng: "-84.6266",
      intro:
        "NKY Crawl Space Pros provides crawl space repair in Florence year-round. Whether you live near the Florence Mall area or in one of the quiet residential neighborhoods off US-42, our team brings professional-grade equipment and proven techniques right to your door. We understand the local climate — from humid summers that trap moisture under your home to rainy seasons that cause water intrusion — and we tailor our solutions to handle whatever Northern Kentucky weather throws at your crawl space. Florence has a mix of older homes and new construction, and each foundation type needs its own approach to moisture control.",
    },
    {
      name: "Covington, KY",
      slug: "covington-ky",
      lat: "39.0836",
      lng: "-84.5085",
      intro:
        "Covington's historic neighborhoods and riverfront properties demand a crawl space repair service that understands both aging foundations and modern moisture challenges. NKY Crawl Space Pros serves Covington homes and businesses, from the charming Victorian homes of Licking Riverside to the commercial spaces along Madison Avenue. Covington properties come with specific challenges — older foundations prone to moisture issues, proximity to the Ohio River increasing groundwater levels, and the structural concerns that come with century-old homes. Each of these calls for a different fix, which is why every job starts with an inspection.",
    },
    {
      name: "Fort Mitchell, KY",
      slug: "fort-mitchell-ky",
      lat: "39.0458",
      lng: "-84.5533",
      intro:
        "Fort Mitchell is one of Northern Kentucky's most desirable communities, and homeowners here expect professional service. NKY Crawl Space Pros delivers exactly that. We specialize in the kind of meticulous, detail-oriented crawl space repair that Fort Mitchell properties deserve — from the stately homes along Dixie Highway to the well-maintained colonials in the residential side streets. Every job starts with a free inspection and a written estimate, so you know what's wrong and what it costs before any work begins.",
    },
    {
      name: "Erlanger, KY",
      slug: "erlanger-ky",
      lat: "39.0169",
      lng: "-84.6027",
      intro:
        "Erlanger residents know that a healthy crawl space makes a real difference in how a home feels and performs. NKY Crawl Space Pros is proud to serve this thriving community with professional crawl space repair that's thorough, affordable, and reliable. Whether you're in a ranch-style home near the Erlanger city park or a two-story house off Stevenson Road, we have the tools and expertise to handle any crawl space issue. We also serve Erlanger's growing commercial corridor, keeping crawl spaces dry and protected. Our flexible scheduling means we work around your life, not the other way around.",
    },
    {
      name: "Independence, KY",
      slug: "independence-ky",
      lat: "38.9431",
      lng: "-84.5431",
      intro:
        "As one of the fastest-growing cities in Kenton County, Independence has seen a surge of new homes and businesses — and NKY Crawl Space Pros is here to protect every one of them. From the newer subdivisions near Taylor Mill Road to the established neighborhoods closer to downtown Independence, we provide crawl space repair throughout Independence. We know that Independence properties often sit on larger lots with varying soil conditions, which means more moisture challenges under your home. Our comprehensive solutions address it all, leaving your crawl space dry and protected.",
    },
    {
      name: "Newport, KY",
      slug: "newport-ky",
      lat: "39.0915",
      lng: "-84.4954",
      intro:
        "Newport has transformed into one of the region's most vibrant communities, and NKY Crawl Space Pros is proud to help protect its homes and businesses. From the Newport on the Levee district to the residential streets of Clifton and Southgate, we provide expert crawl space repair throughout the city. Newport's position along the Ohio River means crawl spaces here face unique challenges — high water tables, seasonal flooding risk, and persistent humidity. Our team uses specialized techniques to combat these issues, ensuring your crawl space stays dry and your home stays protected. Whether you're a homeowner or a business owner, we've got you covered.",
    },
    {
      name: "Edgewood, KY",
      slug: "edgewood-ky",
      lat: "39.0142",
      lng: "-84.5779",
      intro:
        "Edgewood's tree-lined streets and well-kept homes make it one of Kenton County's most charming communities — and NKY Crawl Space Pros helps keep it that way. We provide the kind of careful, professional crawl space repair that this neighborhood's homes call for. From the homes along Turkeyfoot Road to the quiet cul-de-sacs throughout the city, Edgewood's foundations vary, so every job starts with an inspection to find where the moisture is coming from.",
    },
    {
      name: "Fort Thomas, KY",
      slug: "fort-thomas-ky",
      lat: "39.0758",
      lng: "-84.4480",
      intro:
        "Fort Thomas is known for its stunning hilltop views, historic homes, and tree-canopied streets — but all that elevation change means your crawl space faces extra moisture challenges. NKY Crawl Space Pros provides crawl space repair in Fort Thomas that protects your home's structure and air quality. We're experienced with the unique challenges Fort Thomas presents: steep grades directing water toward foundations, multi-level homes built into hillsides, and clay soils that hold moisture against your foundation walls. Our team handles it all with skill and care, ensuring every crawl space we work on stays dry.",
    },
  ] as City[],
};
