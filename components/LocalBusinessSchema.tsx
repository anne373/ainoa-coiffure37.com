import { business } from '@/lib/business'

export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': business.type,
    name: business.name,
    url: business.url,
    telephone: business.telephone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      postalCode: business.address.postalCode,
      addressRegion: business.address.region,
      addressCountry: business.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
    openingHoursSpecification: business.hours.flatMap((slot) =>
      slot.days.map((day) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: `https://schema.org/${day}`,
        opens: slot.open,
        closes: slot.close,
      }))
    ),
    priceRange: business.priceRange,
    areaServed: business.areaServed.map((city) => ({
      '@type': 'City',
      name: city,
    })),
    sameAs: [
      business.social.facebook,
      business.social.instagram,
      business.social.planity,
      business.social.googleBusiness,
    ],
    description: business.description,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services Ainoa Coiffure',
      itemListElement: business.services.map((service) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: service },
      })),
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
