import type { Icon } from './types'

export const IconGlobeIpv6: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-globe-ipv6'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path opacity='.2' d='M11.99 11.99H1.7a10.28 10.28 0 1 1 20.56 0z' fill='currentColor' />
      <path d='M1.7 11.99a10.28 10.28 0 1 1 20.57 0' stroke='currentColor' />
      <path
        d='M7.63 11.99C7.63 6.3 9.58 1.7 11.99 1.7c2.4 0 4.36 4.6 4.36 10.28'
        stroke='currentColor'
      />
      <path d='M2.33 22.25v-6.94' stroke='currentColor' />
      <path
        d='m12.21 15.3 1.76 5.87c.23.79.35 1.18.57 1.18.23 0 .34-.4.58-1.18l1.75-5.86'
        stroke='currentColor'
      />
      <path
        d='M19.16 20.55c.14.91.86 1.85 1.88 1.85s1.84-.83 1.84-1.85-.7-1.82-1.72-1.83c-.7 0-1.83.39-2 1.83m0 0a5.2 5.2 0 0 1 .53-3.35 3.8 3.8 0 0 1 2.24-1.9'
        stroke='currentColor'
      />
      <path
        d='M5.45 22.25v-5.94c0-.47 0-.7.14-.86.15-.14.38-.14.86-.14h1.63a1.98 1.98 0 0 1 0 3.98h-2.6'
        stroke='currentColor'
      />
    </svg>
  )
}
