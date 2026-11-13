import type { Icon } from './types'

export const IconAgeRatingThreePlus: Icon = ({
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
      data-slot='icon-ui-age-rating-three-plus'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='12' cy='12' r='10.22' fill='currentColor' />
      <circle cx='12' cy='12' r='10.22' stroke='currentColor' />
      <path
        d='M6.96 15.4c1.02 1.66 4.74 1.78 4.74-1.39 0-1.6-1.23-2.05-2.56-2.08 1.18-.03 2.28-.6 2.28-2.1 0-2.97-3.5-2.86-4.46-1.29'
        stroke='currentColor'
      />
      <path d='M16.38 9.95v4.1' stroke='currentColor' />
      <path d='M14.33 12h4.1' stroke='currentColor' />
    </svg>
  )
}
