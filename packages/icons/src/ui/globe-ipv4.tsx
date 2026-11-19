import type { Icon } from './types'

export const IconGlobeIpv4: Icon = ({
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
      data-slot='icon-ui-globe-ipv4'
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
      <path d='M2.19 22.25v-6.94' stroke='currentColor' />
      <path
        d='m12.07 15.3 1.75 5.87c.23.79.35 1.18.58 1.18s.34-.4.57-1.18l1.75-5.86'
        stroke='currentColor'
      />
      <path
        d='M5.3 22.25v-5.94c0-.47 0-.7.15-.86.14-.14.38-.14.85-.14h1.64a1.98 1.98 0 0 1 0 3.98H5.33'
        stroke='currentColor'
      />
      <path
        d='M21.6 20.37V17.6c0-1.38 0-2.07-.36-2.18-.36-.1-.74.47-1.48 1.63l-1.16 1.79c-.44.68-.66 1.02-.51 1.28.14.26.54.26 1.35.26zm0 0v1.88m0-1.88h1.02'
        stroke='currentColor'
      />
    </svg>
  )
}
