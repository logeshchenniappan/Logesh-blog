import clsx from 'clsx'
import { Minus, Plus } from 'lucide-react'
import { GrowingUnderline } from '~/components/ui/growing-underline'
import { Image } from '~/components/ui/image'
import { Link } from '~/components/ui/link'
import { Twemoji } from '~/components/ui/twemoji'

const EXPERIENCES = [
  {
    org: 'City Union Bank',
    url: 'https://www.cityunionbank.com/',
    logo: '/static/images/bb-logo.png',
    start: 'Nov 2024',
    end: 'Mar 2025',
    title: 'Senior Associate',
    icon: 'briefcase',
    event: 'career-cub',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Managed and retained a portfolio of retail customers by providing
            personalized banking solutions and relationship support.
          </li>
          <li>
            Achieved deposit growth and cross-sell targets by identifying
            customer needs and offering suitable financial products.
          </li>
        </ul>
      )
    },
  },
  {
    org: 'Genpact',
    url: 'https://www.genpact.com/',
    logo: '/static/images/bb-logo.png',
    start: 'Jan 2024',
    end: 'Jul 2024',
    title: 'Management Trainee (Operations Intern)',
    icon: 'man-technologist',
    event: 'career-genpact',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Assisted in project execution by tracking timelines, deliverables,
            and team resource allocation.
          </li>
          <li>
            Enhanced Excel/Power BI dashboards to monitor operational KPIs and
            highlight process improvement opportunities.
          </li>
          <li>
            Delivered data-backed insights to leadership for performance review
            and decision-making.
          </li>
        </ul>
      )
    },
  },
  {
    org: 'Startnet',
    url: 'https://startnet.in/',
    logo: '/static/images/bb-logo.png',
    start: 'Mar 2023',
    end: 'Dec 2023',
    title: 'Business Development',
    icon: 'man-technologist',
    event: 'career-startnet',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Led digital enablement initiatives to streamline internal workflows
            and improve customer engagement.
          </li>
          <li>
            Executed SEO, SEM, and social media campaigns to support brand
            visibility and lead acquisition.
          </li>
          <li>
            Managed the sales funnel from lead generation to closing, achieving
            monthly digital sales targets.
          </li>
        </ul>
      )
    },
  },
  {
    org: 'Sona College of Technology',
    url: 'https://www.sonatech.ac.in/',
    logo: '/static/images/bb-logo.png',
    start: 'Jul 2022',
    end: 'Jul 2024',
    title: 'MBA',
    icon: 'man-student',
    event: 'career-sona',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>MBA, 8.02/10 – Sona College of Technology, Salem</li>
        </ul>
      )
    },
  },
]

export function CareerTimeline() {
  return (
    <ul className="m-0 list-none p-0">
      {EXPERIENCES.map((exp, idx) => (
        <li key={exp.url} className="m-0 p-0">
          <TimelineItem exp={exp} last={idx === EXPERIENCES.length - 1} />
        </li>
      ))}
    </ul>
  )
}

function TimelineItem({
  exp,
  last,
}: { exp: (typeof EXPERIENCES)[0]; last?: boolean }) {
  let { org, title, icon, url, logo, start, end, event, details: Details } = exp
  return (
    <div
      className={clsx(
        'group/timeline-item',
        'relative -mx-3 flex flex-row items-start gap-3 rounded-lg p-3',
        'cursor-pointer bg-transparent transition-colors hover:bg-slate-100 dark:hover:bg-slate-800',
        !last && [
          'before:absolute before:top-15 before:left-9',
          'before:h-full before:w-px',
          'before:bg-gray-300 dark:before:bg-gray-500',
        ],
      )}
    >
      <Image
        src={logo}
        alt={org}
        className="h-12 w-12! shrink-0 rounded-md"
        style={{ objectFit: 'contain' }}
        width={200}
        height={200}
      />
      <details className="w-full open:[&_.minus]:block open:[&_.plus]:hidden">
        <summary className="relative pr-10 marker:content-none">
          <Plus
            size={18}
            className={clsx([
              'plus',
              'group-hover/timeline-item:visible md:invisible',
              'absolute top-1 right-1',
              'transition-transform duration-300 ease-in-out',
              'text-gray-600 dark:text-gray-500',
            ])}
            data-umami-event={`${event}-expand`}
          />
          <Minus
            size={18}
            className={clsx([
              'minus hidden',
              'absolute top-1 right-1',
              'transition-transform duration-300 ease-in-out',
              'text-gray-600 dark:text-gray-500',
            ])}
            data-umami-event={`${event}-collapse`}
          />
          <div className="flex flex-col">
            <div className="line-clamp-1 text-xs text-gray-500 tabular-nums dark:text-gray-400">
              <span>{start}</span> – <span>{end}</span>
            </div>
            <Link
              href={url}
              className="line-clamp-1 w-fit font-semibold text-gray-900! no-underline hover:text-gray-900 dark:text-white! dark:hover:text-white"
            >
              <GrowingUnderline data-umami-event={event}>
                {org}
              </GrowingUnderline>
            </Link>
            <div className="flex items-center gap-1 pt-1 text-sm text-gray-700 dark:text-gray-200">
              <Twemoji emoji={icon} className="-mt-1!" />
              <span>{title}</span>
            </div>
          </div>
        </summary>
        <div className="pt-1 text-base">
          <Details />
        </div>
      </details>
    </div>
  )
}
