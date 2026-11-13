import type { Icon } from './types'

export const IconAgeRatingTwentyOnePlus: Icon = ({
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
      data-slot='icon-ui-age-rating-twenty-one-plus'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='12' cy='12' r='10.22' fill='currentColor' />
      <circle cx='12' cy='12' r='10.22' stroke='currentColor' />
      <path d='M17.75 10.18v3.65' stroke='currentColor' />
      <path d='M15.92 12h3.66' stroke='currentColor' />
      <path
        d='m10.9 9.87.66-.41c.68-.43 1.02-.65 1.28-.5.26.14.26.54.26 1.34v5.23'
        stroke='currentColor'
      />
      <path
        d='M5.3 9.68c.71-1.17 3.3-1.25 3.3.96 0 1.37-1.54 2.12-2.72 3.58-.4.49-.6.73-.46 1.02.14.28.5.28 1.2.28h2.07'
        stroke='currentColor'
      />
    </svg>
  )
}
