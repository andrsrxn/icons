import type { Icon } from './types'

export const IconCalendarHeart: Icon = ({
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
      data-slot='icon-ui-calendar-heart'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect opacity='.2' x='2.98' y='3.43' width='18.02' height='5.26' rx='1' fill='currentColor' />
      <path
        opacity='.2'
        d='M19.96 15.12q-.49 0-.88.19c-.73.31-1.1.47-1.2.47s-.47-.16-1.2-.47a2 2 0 0 0-.87-.19c-1.33 0-2.33 1.51-1.9 3.11.34 1.25 1.97 2.32 3.14 3.28.44.35.65.53.83.53s.4-.18.83-.53c1.18-.96 2.8-2.03 3.14-3.28.43-1.6-.56-3.11-1.89-3.11'
        fill='currentColor'
      />
      <path
        d='M21 12.1V9.42c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88H8.98c-2.83 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v6.02c0 2.83 0 4.24.88 5.12s2.29.88 5.12.88h2.98'
        stroke='currentColor'
      />
      <path d='M7.67 1.73v3.4' stroke='currentColor' />
      <path d='M16.36 1.73v3.4' stroke='currentColor' />
      <path d='M20.57 8.7H3.8' stroke='currentColor' />
      <path
        d='M19.96 15.12c-1.06 0-1.83.8-2.08 1.2a2.6 2.6 0 0 0-2.07-1.2c-1.33 0-2.33 1.51-1.9 3.11s2.96 2.9 3.97 4.04c1.01-1.14 3.55-2.44 3.97-4.04s-.56-3.11-1.89-3.11'
        stroke='currentColor'
      />
    </svg>
  )
}
