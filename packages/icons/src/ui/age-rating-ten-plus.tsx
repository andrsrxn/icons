import type { Icon } from './types'

export const IconAgeRatingTenPlus: Icon = ({
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
      data-slot='icon-ui-age-rating-ten-plus'
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
        d='m4.84 9.87.66-.42c.67-.43 1.01-.64 1.27-.5s.26.54.26 1.35v5.22'
        stroke='currentColor'
      />
      <path
        d='M13.66 12.2c0 1.83-.44 3.32-1.98 3.32S9.7 14.03 9.7 12.2c0-1.84.51-3.33 1.98-3.33s1.98 1.49 1.98 3.33'
        stroke='currentColor'
      />
    </svg>
  )
}
