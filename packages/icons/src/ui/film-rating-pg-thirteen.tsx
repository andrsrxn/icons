import type { Icon } from './types'

export const IconFilmRatingPgThirteen: Icon = ({
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
      data-slot='icon-ui-film-rating-pg-thirteen'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='12' cy='12' r='10.22' fill='currentColor' />
      <path d='M18.72 19.7a10.22 10.22 0 1 0-13.43 0' stroke='currentColor' />
      <path
        d='M17.65 8.57V8a1 1 0 0 0-1-1h-1.28a2 2 0 0 0-2 2v3.04c0 1.1.9 2 2 2h1.1s1.59 0 1.59-1.46c0-1.69-1.6-1.69-1.6-1.69h2.28'
        stroke='currentColor'
      />
      <path d='M6.04 14.03h2.28' stroke='currentColor' />
      <path
        d='M7.18 6.99v7.04M6.2 6.99h3.26c.94 0 1.7.9 1.7 2.01 0 1.12-.76 2.02-1.7 2.02H7.2'
        stroke='currentColor'
      />
      <path
        d='m8.3 17.93.22-.15c.68-.43 1.02-.64 1.28-.5s.26.54.26 1.35v3.84'
        stroke='currentColor'
      />
      <path
        d='M12.99 21.81c.58.96 2.71 1.03 2.71-.79 0-.91-.7-1.18-1.46-1.2.67-.01 1.3-.33 1.3-1.2 0-1.7-2-1.64-2.55-.74'
        stroke='currentColor'
      />
    </svg>
  )
}
