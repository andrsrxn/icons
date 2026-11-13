import type { Icon } from './types'

export const IconFilmRatingR: Icon = ({
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
      data-slot='icon-ui-film-rating-r'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='12' cy='12' r='10.22' fill='currentColor' />
      <circle cx='12' cy='12' r='10.22' stroke='currentColor' />
      <path d='M7.64 17.33h3.14' stroke='currentColor' />
      <path d='M13.78 17.33h3.14' stroke='currentColor' />
      <path d='m12.81 12.77 2.83 4.56' stroke='currentColor' />
      <path
        d='M9.21 6.67v10.66M7.72 6.67h5.79c1.42 0 2.58 1.37 2.58 3.05 0 1.69-1.16 3.05-2.59 3.05H9.25'
        stroke='currentColor'
      />
    </svg>
  )
}
