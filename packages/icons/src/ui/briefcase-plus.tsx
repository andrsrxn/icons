import type { Icon } from './types'

export const IconBriefcasePlus: Icon = ({
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
      data-slot='icon-ui-briefcase-plus'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.76 14.78c0-1.88 0-2.83.59-3.41.58-.59 1.53-.59 3.41-.59h12.48c1.88 0 2.83 0 3.41.59.59.58.59 1.53.59 3.41v3.8h-2.52v2.61H5.76c-1.88 0-2.83 0-3.41-.58-.59-.59-.59-1.53-.59-3.42z'
        fill='currentColor'
      />
      <path
        d='M13.96 21.2h-5.1c-2.9 0-4.35 0-5.38-.72a4 4 0 0 1-1-1c-.72-1.03-.72-2.48-.72-5.38s0-4.35.72-5.38a4 4 0 0 1 1-1C4.5 7 5.96 7 8.86 7h7.3c1.94 0 2.9 0 3.67.33A4 4 0 0 1 21.9 9.4c.33.76.33 1.73.33 3.67'
        stroke='currentColor'
      />
      <path
        d='m6 7 .83-1.4c.57-.96.86-1.44 1.32-1.7s1.01-.26 2.12-.26h3.5c1.13 0 1.7 0 2.16.27s.75.76 1.3 1.75L18 7'
        stroke='currentColor'
      />
      <path d='M22 11H2' stroke='currentColor' />
      <path d='M19.65 15.66v5.95' stroke='currentColor' />
      <path d='M16.66 18.63h5.95' stroke='currentColor' />
    </svg>
  )
}
