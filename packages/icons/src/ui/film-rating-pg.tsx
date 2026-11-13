import type { Icon } from './types'

export const IconFilmRatingPg: Icon = ({
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
      data-slot='icon-ui-film-rating-pg'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='12' cy='12' r='10.22' fill='currentColor' />
      <circle cx='12' cy='12' r='10.22' stroke='currentColor' />
      <path
        d='M18.28 9.87v-.74a1 1 0 0 0-1-1h-1.7a2 2 0 0 0-2 2v3.74a2 2 0 0 0 2 2h1.4s1.75 0 1.75-1.6c0-1.86-1.75-1.86-1.75-1.86h2.5'
        stroke='currentColor'
      />
      <path d='M5.51 15.87h2.5' stroke='currentColor' />
      <path
        d='M6.76 8.13v7.74M5.68 8.13h3.58c1.05 0 1.89 1 1.89 2.22s-.84 2.21-1.88 2.21H6.79'
        stroke='currentColor'
      />
    </svg>
  )
}
