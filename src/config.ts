/**
 * siteConfig.ts — Central configuration for the site.
 *
 * To clone this template for a new niche site, ONLY edit this file
 * (and swap photos in /public/photos/). Everything else is generic.
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

export interface Testimonial {
  quote: string;
  name: string;
  city: string;
}

export const siteConfig = {
  // ── Business identity ──────────────────────────────────────────────
  businessName: "NKY Crawl Space Pros",
  phone: "(859) 555-0500",
  phoneE164: "+18595550500",
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
        "Complete vapor barrier installation, sealing your crawl space from moisture. Reduces humidity, prevents mold, lowers energy bills. A crawl space solution for NKY homes.",
      photo: "/photos/residential.jpg",
    },
    {
      title: "Crawl Space Waterproofing",
      slug: "waterproofing",
      description:
        "Sump pump installation, drainage systems, and moisture barriers to keep water out of your crawl space permanently. Serving Florence, Covington, Fort Mitchell, and all of NKY.",
      photo: "/photos/commercial.jpg",
    },
    {
      title: "Crawl Space Mold Remediation",
      slug: "mold-remediation",
      description:
        "Professional mold removal and treatment in crawl spaces. We kill existing mold, treat affected wood, and prevent regrowth. Safe for your home.",
      photo: "/photos/screen-cleaning.jpg",
    },
  ] as Service[],

  // ── FAQs ──────────────────────────────────────────────────────────
  faqs: [
    {
      question: "How much does crawl space encapsulation cost?",
      answer:
        "Contact us for a free inspection and estimate. Call (859) 555-0500.",
    },
    {
      question: "How do I know if my crawl space needs repair?",
      answer:
        "Signs include musty odors, high humidity, sagging floors, mold, standing water, or pest issues. If you notice any of these, call us.",
    },
    {
      question: "Is crawl space encapsulation worth it?",
      answer:
        "Yes. It lowers energy bills 15-20%, prevents mold, improves air quality, and protects your home's structure. Most homeowners see ROI within 2-3 years.",
    },
    {
      question: "How long does encapsulation take?",
      answer:
        "Most homes take 1-2 days. We work fast and clean up completely when we're done.",
    },
    {
      question: "Do you offer financing?",
      answer:
        "Yes. We offer flexible financing options for larger projects. Ask about our 0% interest plans when you call.",
    },
    {
      question: "Will encapsulation fix my musty smell?",
      answer:
        "Yes. The musty smell comes from moisture and mold in your crawl space. Encapsulation eliminates the moisture source, which eliminates the odor.",
    },
    {
      question: "Do you offer free inspections?",
      answer:
        "Yes. We inspect your crawl space at no charge and provide a written estimate. No obligation.",
    },
    {
      question: "How do I schedule?",
      answer:
        "Call (859) 555-0500. We serve all of Northern Kentucky and greater Cincinnati.",
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
        "Florence homeowners trust NKY Crawl Space Pros for reliable, professional crawl space repair services year-round. Whether you live near the Florence Mall area or in one of the quiet residential neighborhoods off US-42, our team brings professional-grade equipment and proven techniques right to your door. We understand the local climate — from humid summers that trap moisture under your home to rainy seasons that cause water intrusion — and we tailor our solutions to handle whatever Northern Kentucky weather throws at your crawl space. Florence's mix of older homes and new construction means we've seen every type of foundation, and we know how to protect each one.",
    },
    {
      name: "Covington, KY",
      slug: "covington-ky",
      lat: "39.0836",
      lng: "-84.5085",
      intro:
        "Covington's historic neighborhoods and riverfront properties demand a crawl space repair service that understands both aging foundations and modern moisture challenges. NKY Crawl Space Pros has been serving Covington residents and businesses for years, from the charming Victorian homes of Licking Riverside to the commercial spaces along Madison Avenue. Our team is experienced with the unique challenges Covington properties present — older foundations prone to moisture issues, proximity to the Ohio River increasing groundwater levels, and the structural concerns that come with century-old homes. We take pride in keeping Covington's crawl spaces dry and healthy.",
    },
    {
      name: "Fort Mitchell, KY",
      slug: "fort-mitchell-ky",
      lat: "39.0458",
      lng: "-84.5533",
      intro:
        "Fort Mitchell is one of Northern Kentucky's most desirable communities, and homeowners here expect professional service. NKY Crawl Space Pros delivers exactly that. We specialize in the kind of meticulous, detail-oriented crawl space repair that Fort Mitchell properties deserve — from the stately homes along Dixie Highway to the well-maintained colonials in the residential side streets. Our technicians are background-checked, fully insured, and trained to treat your home with the same respect they'd treat their own. Fort Mitchell residents choose us because we show up on time, do the job right, and leave every crawl space clean and dry.",
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
        "As one of the fastest-growing cities in Kenton County, Independence has seen a surge of new homes and businesses — and NKY Crawl Space Pros is here to protect every one of them. From the newer subdivisions near Taylor Mill Road to the established neighborhoods closer to downtown Independence, we provide crawl space repair services that Northern Kentucky homeowners count on. We know that Independence properties often sit on larger lots with varying soil conditions, which means more moisture challenges under your home. Our comprehensive solutions address it all, leaving your crawl space dry and protected.",
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
        "Edgewood's tree-lined streets and well-kept homes make it one of Kenton County's most charming communities — and NKY Crawl Space Pros helps keep it that way. We've served Edgewood homeowners for years, providing the kind of careful, professional crawl space repair that this neighborhood's beautiful properties demand. From the homes along Turkeyfoot Road to the quiet cul-de-sacs throughout the city, we know how to navigate Edgewood's varied foundations and deliver consistently excellent results. Our team respects your property, protects your investment, and always leaves your crawl space better than we found it.",
    },
    {
      name: "Fort Thomas, KY",
      slug: "fort-thomas-ky",
      lat: "39.0758",
      lng: "-84.4480",
      intro:
        "Fort Thomas is known for its stunning hilltop views, historic homes, and tree-canopied streets — but all that elevation change means your crawl space faces extra moisture challenges. NKY Crawl Space Pros is Fort Thomas's go-to service for professional crawl space repair that protects your home's structure and air quality. We're experienced with the unique challenges Fort Thomas presents: steep grades directing water toward foundations, multi-level homes built into hillsides, and clay soils that hold moisture against your foundation walls. Our team handles it all with skill and care, ensuring every crawl space we work on stays dry.",
    },
    {
      name: "Bellevue, KY",
      slug: "bellevue-ky",
      lat: "39.1042",
      lng: "-84.4762",
      intro:
        "Bellevue's revitalized Fairfield Avenue corridor and charming hillside homes make it a standout community in Northern Kentucky. NKY Crawl Space Pros is honored to serve Bellevue residents and business owners with top-quality crawl space repair services. We understand the mix of historic and modern properties that define Bellevue, and we approach each job with the care and attention your home or building deserves. From the panoramic views along the river hills to the cozy bungalows in the side streets, we bring the same level of professionalism to every project. Bellevue is a community that takes pride in its homes, and we're here to help protect them.",
    },
    {
      name: "Cold Spring, KY",
      slug: "cold-spring-ky",
      lat: "39.0114",
      lng: "-84.4369",
      intro:
        "Cold Spring's rolling hills and spacious properties make it a beautiful place to live — but they also mean your crawl space faces constant exposure to groundwater and moisture. NKY Crawl Space Pros provides Cold Spring homeowners with thorough, professional crawl space repair that eliminates moisture problems and prevents future damage. Whether your home overlooks Alexandria Pike or sits in one of Cold Spring's peaceful residential developments, we'll make sure your crawl space is dry, clean, and structurally sound. We use industry-leading materials and techniques that deliver lasting results.",
    },
    {
      name: "Taylor Mill, KY",
      slug: "taylor-mill-ky",
      lat: "39.0003",
      lng: "-84.5013",
      intro:
        "Taylor Mill has grown into a thriving community, and NKY Crawl Space Pros is proud to protect the homes and businesses that make this city special. From the established neighborhoods along Taylor Mill Road to the newer developments spreading across the city, we provide crawl space repair that Taylor Mill residents trust. Our team understands the local environment — the clay soil that retains moisture, the seasonal water table changes, and the way Northern Kentucky's climate affects your crawl space throughout the year. We tailor our approach to each property, ensuring great results every time.",
    },
    {
      name: "Villa Hills, KY",
      slug: "villa-hills-ky",
      lat: "39.0625",
      lng: "-84.5916",
      intro:
        "Villa Hills is one of Northern Kentucky's premier residential communities, and the homes here deserve quality service. NKY Crawl Space Pros delivers premium crawl space repair services that match Villa Hills' high standards. The city's elevated terrain and river-adjacent location mean your crawl space faces unique challenges — fluctuating water tables, seasonal humidity, and moisture intrusion from the Ohio River floodplain. Our team is equipped to handle all of it, using professional-grade materials and techniques that keep your crawl space permanently dry. Villa Hills homeowners trust us because we never cut corners.",
    },
    {
      name: "Crescent Springs, KY",
      slug: "crescent-springs-ky",
      lat: "39.0544",
      lng: "-84.5829",
      intro:
        "Crescent Springs residents appreciate quality, and NKY Crawl Space Pros delivers it with every project. We've been serving this close-knit community with professional crawl space repair that homeowners and businesses rely on. Whether your property is along Buttermilk Pike or in one of Crescent Springs' well-maintained neighborhoods, we bring the same commitment to excellence. Our team handles everything from vapor barrier installation to full encapsulation systems, drainage solutions, and mold remediation. We work efficiently, respect your time, and always deliver results that exceed expectations.",
    },
    {
      name: "Lakeside Park, KY",
      slug: "lakeside-park-ky",
      lat: "39.0331",
      lng: "-84.5711",
      intro:
        "Lakeside Park may be one of Northern Kentucky's smaller cities, but its residents expect — and deserve — top-tier service. NKY Crawl Space Pros is proud to serve Lakeside Park with professional crawl space repair that keeps homes protected and healthy. The tree-lined streets and well-maintained properties that define Lakeside Park require a careful touch, and our technicians deliver exactly that. We protect your property, work neatly, and leave every crawl space dry and secure. From routine moisture control to full encapsulation, Lakeside Park homeowners know they can count on us.",
    },
    {
      name: "Park Hills, KY",
      slug: "park-hills-ky",
      lat: "39.0667",
      lng: "-84.5285",
      intro:
        "Park Hills' hilltop location offers some of the best views in Northern Kentucky — but it also means your crawl space faces the full force of water drainage from surrounding slopes. NKY Crawl Space Pros provides Park Hills homeowners with expert crawl space repair that keeps foundations dry and homes healthy. We're experienced with the steep terrain, multi-story homes, and unique drainage challenges that Park Hills properties are known for. Our team uses proven techniques to redirect water and seal crawl spaces, delivering lasting results whether your home overlooks Devou Park or sits along the winding hillside streets.",
    },
    // ── Cincinnati-area cities ────────────────────────────────────────
    {
      name: "Walnut Hills, OH",
      slug: "walnut-hills-oh",
      lat: "39.1212",
      lng: "-84.4872",
      intro:
        "Walnut Hills is one of Cincinnati's most historic and diverse neighborhoods, and it's just minutes from Northern Kentucky across the river. NKY Crawl Space Pros is proud to extend our crawl space repair services to Walnut Hills homeowners and businesses. From the stately homes along Gilbert Avenue to the revitalized commercial district near Peeble's Corner, we bring the same professional-grade crawl space repair that NKY residents trust. Walnut Hills' mix of historic Victorian homes, modern apartments, and commercial properties means we see every type of foundation — and we know how to protect each one from moisture damage.",
    },
    {
      name: "Hyde Park, OH",
      slug: "hyde-park-oh",
      lat: "39.1373",
      lng: "-84.4463",
      intro:
        "Hyde Park is one of Cincinnati's most desirable neighborhoods, known for its beautiful homes, tree-lined streets, and vibrant town square. NKY Crawl Space Pros brings our professional crawl space repair expertise right across the river to serve Hyde Park residents. Whether you own a historic craftsman near the square or a stately home in the surrounding hills, we understand the high standards Hyde Park homeowners expect. Our team delivers thorough, lasting crawl space solutions every time — because a neighborhood this nice deserves dry, healthy foundations to match.",
    },
    {
      name: "Norwood, OH",
      slug: "norwood-oh",
      lat: "39.1556",
      lng: "-84.4597",
      intro:
        "Norwood is a thriving independent city surrounded by Cincinnati, just a short drive from Northern Kentucky. NKY Crawl Space Pros is happy to serve Norwood's dense residential neighborhoods and growing commercial district with reliable, affordable crawl space repair. Norwood's mix of older homes, duplexes, and storefronts means crawl spaces here face everything from decades of moisture damage to deteriorating vapor barriers. Our team handles it all with professional equipment and proven techniques, leaving every crawl space in Norwood dry and protected.",
    },
    {
      name: "Montgomery, OH",
      slug: "montgomery-oh",
      lat: "39.2289",
      lng: "-84.3541",
      intro:
        "Montgomery's tree-canopied streets and stately homes make it one of the Cincinnati area's premier residential communities. NKY Crawl Space Pros extends our premium crawl space repair services to Montgomery homeowners who expect quality service. The large lots, mature landscaping, and multi-story homes throughout Montgomery require a careful, experienced approach — and our team delivers exactly that. From historic properties near the downtown village center to sprawling estates on the outskirts, we bring the same meticulous attention to detail on every job. crawl space repair service.",
    },
    {
      name: "Deer Park, OH",
      slug: "deer-park-oh",
      lat: "39.2053",
      lng: "-84.3922",
      intro:
        "Deer Park is a welcoming, family-friendly community just north of Cincinnati, and NKY Crawl Space Pros is proud to bring our crawl space repair services to this great neighborhood. From the well-kept ranch homes along Blue Ash Road to the two-story colonials in the residential side streets, Deer Park homes deserve crawl spaces that are dry, clean, and structurally sound. We offer flexible scheduling, Flexible scheduling, and the kind of dependable service that Deer Park homeowners appreciate. A healthy crawl space makes a real difference in your home's air quality and energy efficiency — and we deliver every time.",
    },
    {
      name: "Amberly, OH",
      slug: "amberly-oh",
      lat: "39.1987",
      lng: "-84.4281",
      intro:
        "Amberley Village is one of the Cincinnati area's most exclusive residential communities, with large estates and beautifully maintained properties. NKY Crawl Space Pros provides the premium crawl space repair service that Amberley homes demand. The spacious lots, mature trees, and high-end finishes throughout this community require a professional touch — and our fully insured, background-checked technicians deliver exactly that. We protect your property, respect your privacy, and leave every crawl space dry and secure. Amberley homeowners choose us because we treat every home like it's our own.",
    },
    {
      name: "Westwood, OH",
      slug: "westwood-oh",
      lat: "39.1531",
      lng: "-84.6164",
      intro:
        "Westwood is one of Cincinnati's largest and most established neighborhoods, with a strong sense of community and a wide range of homes and businesses. NKY Crawl Space Pros is excited to serve Westwood with the same reliable crawl space repair that Northern Kentucky residents have come to trust. From the charming Victorians along Harrison Avenue to the mid-century homes throughout the neighborhood, we've addressed every type of crawl space issue Westwood has to offer. Our team works efficiently, respects your property, and always delivers lasting results.",
    },
    {
      name: "Fort Heights, OH",
      slug: "fort-heights-oh",
      lat: "39.0947",
      lng: "-84.5256",
      intro:
        "Fort Wright and the Fort Mitchell Heights area sit just across the river from Northern Kentucky, making them a natural extension of our service area. NKY Crawl Space Pros brings our professional crawl space repair expertise to Fort Heights homeowners who want the same quality service their NKY neighbors enjoy. The elevated terrain here means stunning views — but it also means water drainage patterns can challenge your crawl space. Our comprehensive solutions redirect moisture and seal foundations, keeping your crawl space dry and your home protected for years to come.",
    },
    {
      name: "Mt. Adams, OH",
      slug: "mt-adams-oh",
      lat: "39.1089",
      lng: "-84.4981",
      intro:
        "Mt. Adams is one of Cincinnati's most iconic hilltop neighborhoods, with stunning skyline views, steep streets, and a mix of historic and modern properties. NKY Crawl Space Pros brings expert crawl space repair to Mt. Adams homeowners and businesses who want to protect their foundations from the constant moisture challenges that hillside living presents. The steep grades and unique architecture in Mt. Adams require careful drainage planning and professional techniques — our team has the experience and equipment to handle any crawl space safely and effectively.",
    },
    {
      name: "Mt. Lookout, OH",
      slug: "mt-lookout-oh",
      lat: "39.1283",
      lng: "-84.4317",
      intro:
        "Mt. Lookout is a charming, walkable neighborhood on Cincinnati's east side, just across the river from Northern Kentucky. NKY Crawl Space Pros serves Mt. Lookout homeowners with professional crawl space repair that keeps homes protected and healthy. The neighborhood's mix of older bungalows, updated colonials, and new construction means we've seen every crawl space type Mt. Lookout has to offer. We use industry-leading encapsulation systems and drainage solutions that deliver lasting results — perfect for homes along the tree-lined streets of this beloved Cincinnati neighborhood.",
    },
    {
      name: "Oakley, OH",
      slug: "oakley-oh",
      lat: "39.1536",
      lng: "-84.4228",
      intro:
        "Oakley is one of Cincinnati's fastest-growing neighborhoods, with a thriving business district, new developments, and a strong sense of community. NKY Crawl Space Pros is proud to serve Oakley's homes and businesses with professional crawl space repair that matches the neighborhood's upward trajectory. From the homes around Oakley Square to the new builds throughout the area, we provide crawl space repair that's thorough, affordable, and reliable. Whether you're a homeowner protecting your investment or a business owner maintaining your building, we've got you covered.",
    },
    {
      name: "Columbia-Tusculum, OH",
      slug: "columbia-tusculum-oh",
      lat: "39.1128",
      lng: "-84.4136",
      intro:
        "Columbia-Tusculum is Cincinnati's oldest neighborhood, nestled along the Ohio River on the city's east side. NKY Crawl Space Pros brings our professional crawl space repair services to this historic riverfront community, where homes range from restored 19th-century cottages to modern river-view condos. The Ohio River proximity means crawl spaces here face high water tables, seasonal flooding, and persistent humidity — our specialized repair process tackles all of it. Whether your home overlooks the river or sits tucked into the hillside, we'll keep your crawl space dry and protected.",
    },
    {
      name: "Pleasant Ridge, OH",
      slug: "pleasant-ridge-oh",
      lat: "39.1842",
      lng: "-84.4403",
      intro:
        "Pleasant Ridge is a vibrant, family-friendly neighborhood on Cincinnati's north side, known for its well-kept homes and strong community spirit. NKY Crawl Space Pros is happy to extend our crawl space repair services to Pleasant Ridge residents who want dry, healthy crawl spaces without the hassle. The neighborhood's diverse housing stock — from classic foursquares to updated ranches — means we adapt our approach to each foundation. Our team is fast, friendly, and thorough, leaving your crawl space protected and your home healthier every single time.",
    },
  ] as City[],

  // ── Testimonials ──────────────────────────────────────────────────
  testimonials: [
    {
      quote:
        "NKY Crawl Space Pros encapsulated our crawl space in Florence. The musty smell in our house is completely gone and our floors are no longer cold in winter. Quality investment we've made.",
      name: "Jennifer M.",
      city: "Florence, KY",
    },
    {
      quote:
        "We had standing water under our house in Covington. They installed drainage and a sump pump. Problem solved. Professional and thorough.",
      name: "Robert T.",
      city: "Covington, KY",
    },
    {
      quote:
        "Our crawl space had mold everywhere. NKY Crawl Space Pros removed it all, treated the wood, and installed a vapor barrier. Our home feels better.",
      name: "Sarah K.",
      city: "Fort Mitchell, KY",
    },
    {
      quote:
        "They encapsulated our crawl space in Edgewood and the difference in our energy bills was noticeable within the first month. Great crawl space company.",
      name: "Karen L.",
      city: "Edgewood, KY",
    },
  ] as Testimonial[],

  // ── Reviews (for reviews page) ────────────────────────────────────
  reviews: [
    {
      name: "Jennifer M.",
      location: "Florence, KY",
      text: "NKY Crawl Space Pros encapsulated our crawl space in Florence. The musty smell in our house is completely gone and our floors are no longer cold in winter. The team was professional and cleaned up everything when they were done. Quality investment we've made in our home.",
    },
    {
      name: "Robert T.",
      location: "Covington, KY",
      text: "We had standing water under our house in Covington every time it rained. NKY Crawl Space Pros installed a drainage system and sump pump. Problem solved. They were professional, thorough, and explained everything they were doing. Highly recommend their waterproofing service.",
    },
    {
      name: "Sarah K.",
      location: "Fort Mitchell, KY",
      text: "Our crawl space had mold everywhere. We could smell it in the house and our allergies were getting worse. NKY Crawl Space Pros removed all the mold, treated the wood, and installed a vapor barrier. Our home feels better. Can't thank them enough.",
    },
    {
      name: "Mike D.",
      location: "Erlanger, KY",
      text: "Hired them to encapsulate the crawl space at our commercial building in Erlanger. They worked efficiently and the building's humidity levels dropped noticeably. Great crawl space service. Our tenants have commented on how much more comfortable the building is.",
    },
    {
      name: "Jennifer P.",
      location: "Independence, KY",
      text: "We just moved into a home in Independence and the crawl space was a mess — standing water, mold, no vapor barrier. NKY Crawl Space Pros came out, assessed everything, and gave us a competitive price. They fixed it all. Our crawl space is now clean, dry, and sealed. Highly recommend.",
    },
    {
      name: "Dave S.",
      location: "Newport, KY",
      text: "Called for crawl space waterproofing on our home in Newport. They gave us a competitive price and came out the same week. They installed a sump pump and drainage system that finally stopped the water intrusion. Great service, great service. Our basement and crawl space are finally dry.",
    },
    {
      name: "Karen L.",
      location: "Edgewood, KY",
      text: "They encapsulated our crawl space in Edgewood and the difference in our energy bills was noticeable within the first month. Reliable crawl space company in Northern Kentucky that we trust completely. The crew was professional and the work was top-notch.",
    },
    {
      name: "Tom W.",
      location: "Fort Thomas, KY",
      text: "Our Fort Thomas home had a damp crawl space causing musty odors upstairs. NKY Crawl Space Pros installed a vapor barrier and dehumidifier. The musty smell is completely gone and our home feels much healthier. Professional crawl space service in NKY.",
    },
  ] as { name: string; location: string; text: string }[],
};
