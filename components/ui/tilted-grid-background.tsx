import { clsx } from 'clsx'
import { useId } from 'react'

export function TiltedGridBackground({ className }: { className?: string }) {
  const id = useId()

  return (
    <div
      className={clsx([
        'absolute overflow-hidden mask-[linear-gradient(white,transparent)]',
        className,
      ])}
    >
      <svg
        className={clsx([
          'h-[160%] w-full',
          'absolute inset-x-0 inset-y-[-30%] skew-y-[-18deg]',
          'dark:fill-white/1 dark:stroke-white/2.5',
          'fill-black/2 stroke-black/5',
        ])}
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <title>Tilted Grid Background</title>
        <defs>
          <pattern
            id={id}
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
            x="0"
            y="0"
          >
            <path d="M0 32V0H32" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth="0" fill={`url(#${id})`} />
        <svg x="0" y="0" className="overflow-visible" aria-hidden="true">
          <title>Grid accents</title>
          <rect strokeWidth="0" width="33" height="33" x="0" y="32" />
          <rect strokeWidth="0" width="33" height="33" x="32" y="96" />
        </svg>
      </svg>
    </div>
  )
}
