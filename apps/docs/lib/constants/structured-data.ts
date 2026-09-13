import { COMPANY } from '@/lib/constants/company'
import { SITE } from '@/lib/constants/site'

export const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE.baseUrl}/#website`,
      url: SITE.baseUrl,
      name: COMPANY.fullName,
      description: COMPANY.description,
      inLanguage: 'en',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${SITE.baseUrl}?q={search_term_string}`,
        },
        'query-input': {
          '@type': 'PropertyValueSpecification',
          valueRequired: true,
          valueName: 'search_term_string',
        },
      },
    },

    {
      '@type': 'CollectionPage',
      '@id': `${SITE.baseUrl}/#webpage`,
      url: SITE.baseUrl,
      name: COMPANY.fullName,
      description: COMPANY.description,
      isPartOf: {
        '@id': `${SITE.baseUrl}/#website`,
      },
    },

    {
      '@type': 'SoftwareSourceCode',
      '@id': `${SITE.baseUrl}/#software`,
      name: COMPANY.fullName,
      description: COMPANY.description,
      url: SITE.baseUrl,
      codeRepository: COMPANY.repo.url,
      programmingLanguage: 'TypeScript',
      runtimePlatform: 'Node.js',
      license: 'https://opensource.org/licenses/MIT',
    },
  ],
} as const
