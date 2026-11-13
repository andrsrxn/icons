import type { Icon } from './types'

export const IconAgeRatingSixteenPlus: Icon = ({
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
      data-slot='icon-ui-age-rating-sixteen-plus'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='12' cy='12' r='10.22' fill='currentColor' />
      <circle cx='12' cy='12' r='10.22' stroke='currentColor' />
      <path d='M17.8 10.23v3.55' stroke='currentColor' />
      <path d='M16.03 12h3.55' stroke='currentColor' />
      <path
        d='m4.98 9.87.66-.42c.67-.43 1.01-.64 1.27-.5s.26.54.26 1.35v5.22'
        stroke='currentColor'
      />
      <path
        d='M10.08 13.78c.13.86.8 1.74 1.77 1.74s1.75-.78 1.75-1.74c0-.97-.67-1.73-1.63-1.74-.66 0-1.73.37-1.9 1.74m0 0c-.15-.98-.1-2.12.5-3.18a3.6 3.6 0 0 1 2.12-1.79'
        stroke='currentColor'
      />
    </svg>
  )
}
