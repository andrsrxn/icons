import type { Icon } from './types'

export const IconAgeRatingSeventeenPlus: Icon = ({
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
      data-slot='icon-ui-age-rating-seventeen-plus'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='12' cy='12' r='10.22' fill='currentColor' />
      <circle cx='12' cy='12' r='10.22' stroke='currentColor' />
      <path d='M17.63 10.06v3.9' stroke='currentColor' />
      <path d='M15.68 12h3.9' stroke='currentColor' />
      <path
        d='m5.19 9.87.65-.42c.68-.43 1.02-.64 1.28-.5s.26.54.26 1.35v5.22'
        stroke='currentColor'
      />
      <path
        d='M10.12 8.89h2.1c.64 0 .97 0 1.12.2.15.22.04.52-.18 1.13l-1.87 5.3'
        stroke='currentColor'
      />
    </svg>
  )
}
