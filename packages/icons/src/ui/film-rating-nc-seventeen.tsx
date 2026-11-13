import type { Icon } from './types'

export const IconFilmRatingNcSeventeen: Icon = ({
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
      data-slot='icon-ui-film-rating-nc-seventeen'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='12' cy='12' r='10.22' fill='currentColor' />
      <path d='M6.91 13.93v-6.7l3.91 6.7h.5v-6.7' stroke='currentColor' />
      <path
        d='M18.3 8.78v-.55a1 1 0 0 0-1-1h-1.33a2 2 0 0 0-2 2v2.92c0 .98.8 1.78 1.77 1.78h1.03c.63 0 1.21-.34 1.53-.89'
        stroke='currentColor'
      />
      <path d='M6.11 13.93h1.6' stroke='currentColor' />
      <path d='M6.11 7.23h1.6' stroke='currentColor' />
      <path d='M10.52 7.23h1.6' stroke='currentColor' />
      <path
        d='m8.52 17.93.22-.15c.68-.43 1.02-.64 1.28-.5s.26.54.26 1.35v3.84'
        stroke='currentColor'
      />
      <path d='M18.72 19.7a10.22 10.22 0 1 0-13.43 0' stroke='currentColor' />
      <path
        d='M13.12 17.24h1.36c.64 0 .97 0 1.12.2.15.22.04.52-.18 1.13l-1.37 3.9'
        stroke='currentColor'
      />
    </svg>
  )
}
