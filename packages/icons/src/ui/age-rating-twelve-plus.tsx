import type { Icon } from './types'

export const IconAgeRatingTwelvePlus: Icon = ({
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
      data-slot='icon-ui-age-rating-twelve-plus'
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
        d='M9.94 9.68c.72-1.17 3.32-1.25 3.32.96 0 1.37-1.55 2.12-2.73 3.58-.4.49-.6.73-.46 1.02.14.28.5.28 1.2.28h2.07'
        stroke='currentColor'
      />
    </svg>
  )
}
