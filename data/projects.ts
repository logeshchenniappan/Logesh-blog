import { SITE_METADATA } from '~/data/site-metadata'
import type { Project } from '~/types/data'

export const PROJECTS: Project[] = [
  {
    type: 'self',
    title: 'logeshc.com',
    description:
      'Portfolio and blog – MBA graduate focused on business analytics and data-driven operations.',
    imgSrc: '/static/images/writer-96.png',
    url: SITE_METADATA.siteUrl,
    repo: SITE_METADATA.siteRepo.replace('https://github.com/', ''),
    builtWith: ['NextJS', 'TailwindCSS', 'Typescript', 'Contentlayer'],
  },
  {
    type: 'self',
    title: 'Ecommerce Site – Organic Cosmetic Brand',
    description:
      "Designed client's WooCommerce website, improving SEO and page speed by 40%.",
    imgSrc: '/static/images/shop-96.png',
    builtWith: ['WooCommerce', 'WordPress', 'SEO'],
  },
  {
    type: 'self',
    title: 'Excel / Power BI Dashboards',
    description:
      'Operational dashboards for KPIs, process improvement, and data-backed decision-making (Genpact, ITC internships).',
    imgSrc: '/static/images/cert-folder.png',
    builtWith: ['Excel', 'Power BI', 'Data Analytics'],
  },
]
