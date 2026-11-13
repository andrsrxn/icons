import type { Icon } from './types'

export const IconBriefcaseClock: Icon = ({
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
      data-slot='icon-ui-briefcase-clock'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.76 14.78c0-1.88 0-2.83.59-3.41.58-.59 1.53-.59 3.41-.59h12.48c1.88 0 2.83 0 3.41.59.59.58.59 1.53.59 3.41v1.83l-1.19-1.13c-.63-.6-.95-.9-1.35-1.05-.4-.14-.83-.11-1.7-.05h-.04c-.99.08-1.48.11-1.89.36-.4.24-.67.66-1.2 1.5l-1.19 1.87 1.72 3.08H5.76c-1.88 0-2.83 0-3.41-.58-.59-.59-.59-1.53-.59-3.42z'
        fill='currentColor'
      />
      <path
        d='M11.25 21.2h-2.4c-2.9 0-4.34 0-5.37-.72a4 4 0 0 1-1-1c-.72-1.03-.72-2.48-.72-5.38s0-4.35.72-5.38a4 4 0 0 1 1-1C4.5 7 5.96 7 8.86 7h8.27c1.03 0 1.54 0 1.97.1a4 4 0 0 1 3.04 3.04c.1.42.1.94.1 1.97'
        stroke='currentColor'
      />
      <path
        d='m6 7 .83-1.4c.57-.96.86-1.44 1.32-1.7s1.01-.26 2.12-.26h3.5c1.13 0 1.7 0 2.16.27s.75.76 1.3 1.75L18 7'
        stroke='currentColor'
      />
      <path d='M22 11H2' stroke='currentColor' />
      <circle cx='18.12' cy='18.21' r='4.12' stroke='currentColor' />
      <path d='M18.04 16.81v1.01c0 .26 0 .4.06.5.06.11.17.19.38.33l.7.47' stroke='currentColor' />
    </svg>
  )
}
