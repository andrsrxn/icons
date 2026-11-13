import type { Icon } from './types'

export const IconAgeRatingFifteenPlus: Icon = ({
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
      data-slot='icon-ui-age-rating-fifteen-plus'
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
        d='M13.46 8.87H10.9c-.43 0-.64 0-.78.13s-.17.34-.21.76l-.02.16c-.09.8-.13 1.2.01 1.36s.69.19 1.78.23h0c1.03.04 1.98.55 1.98 1.87 0 2.68-3.13 2.58-4 1.17'
        stroke='currentColor'
      />
    </svg>
  )
}
