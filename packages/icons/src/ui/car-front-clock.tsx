import type { Icon } from './types'

export const IconCarFrontClock: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-car-front-clock'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M21.77 13.31a7 7 0 0 0-.48-1.87 3 3 0 0 0-1.79-1.48c-.42-.13-.93-.13-1.93-.13H6.64c-.97 0-1.45 0-1.86.12A3 3 0 0 0 3 11.36c-.22.38-.32.85-.54 1.79-.32 1.42-.49 2.13-.4 2.7a3 3 0 0 0 1.85 2.31c.54.22 1.26.22 2.72.22h10.93c1.4 0 2.1 0 2.64-.2a3 3 0 0 0 1.85-2.24c.1-.56-.03-1.25-.29-2.63'
        fill='currentColor'
      />
      <path
        d='M21.58 12.59c.4 2.02.6 3.03.31 3.82a3 3 0 0 1-1.25 1.53c-.72.44-1.76.44-3.82.44H6.38c-1.4 0-2.09 0-2.61-.2a3 3 0 0 1-1.86-2.22c-.1-.55.02-1.24.26-2.6.18-1 .27-1.5.47-1.9a3 3 0 0 1 1.8-1.5c.42-.13.93-.13 1.94-.13h5.51'
        stroke='currentColor'
      />
      <path
        d='m4.25 9.83.2-1.12c.44-2.35.66-3.52 1.49-4.22s2.03-.7 4.42-.7h1.69'
        stroke='currentColor'
      />
      <path
        d='M3.21 18.38c0 1.12 0 1.67.28 2.06q.15.2.35.35c.39.28.95.28 2.06.28H6c1.1 0 1.66 0 2.06-.28q.2-.15.34-.35c.28-.39.28-.94.28-2.06'
        stroke='currentColor'
      />
      <path
        d='M15.23 18.38c0 1.12 0 1.67.28 2.06q.15.2.34.35c.4.28.95.28 2.07.28h.07c1.12 0 1.68 0 2.07-.28q.2-.15.34-.35c.28-.39.28-.94.28-2.06'
        stroke='currentColor'
      />
      <path d='M15.8 13.1h2.16' stroke='currentColor' />
      <path d='M5.95 13.1H8.2' stroke='currentColor' />
      <path d='M4.25 9.83 2.09 7.67' stroke='currentColor' />
      <circle cx='17.96' cy='6.6' r='3.67' stroke='currentColor' />
      <path d='m18.9 7.4-1.01-.68V5.35' stroke='currentColor' />
    </svg>
  )
}
