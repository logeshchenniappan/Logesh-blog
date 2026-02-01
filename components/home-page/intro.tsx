import { Twemoji } from '~/components/ui/twemoji'
import { SITE_METADATA } from '~/data/site-metadata'

export function Intro() {
  return (
    <h1 className="text-neutral-900 dark:text-neutral-200">
      I'm <span className="font-medium">{SITE_METADATA.author}</span> –{' '}
      {SITE_METADATA.role} in{' '}
      <span className="hidden font-medium">{SITE_METADATA.location}</span>
      <span className="absolute ml-1.5 inline-flex pt-[3px]">
        <Twemoji emoji="flag-india" />
      </span>
    </h1>
  )
}
