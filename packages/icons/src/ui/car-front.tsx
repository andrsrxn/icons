import type { Icon } from './types'

export const IconCarFront: Icon = ({
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
      data-slot='icon-ui-car-front'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M21.8 13.16c-.18-1-.27-1.5-.48-1.9a3 3 0 0 0-1.78-1.47c-.43-.13-.94-.13-1.95-.13H6.62c-.98 0-1.46 0-1.88.13a3 3 0 0 0-1.76 1.4c-.21.37-.32.85-.54 1.8-.33 1.44-.5 2.15-.4 2.73a3 3 0 0 0 1.83 2.3c.54.22 1.28.22 2.75.22H17.6c1.42 0 2.13 0 2.66-.21a3 3 0 0 0 1.84-2.22c.11-.56-.02-1.26-.28-2.65'
        fill='currentColor'
      />
      <path
        d='M21.86 13.2c-.18-1-.27-1.51-.47-1.92A3 3 0 0 0 19.6 9.8c-.44-.13-.95-.13-1.97-.13H6.36c-1.02 0-1.53 0-1.97.13a3 3 0 0 0-1.78 1.5c-.2.4-.3.9-.47 1.9-.25 1.4-.37 2.09-.26 2.65a3 3 0 0 0 1.84 2.2c.53.2 1.23.2 2.64.2h11.28c1.4 0 2.11 0 2.64-.2a3 3 0 0 0 1.84-2.2c.11-.56 0-1.26-.26-2.64'
        stroke='currentColor'
      />
      <path
        d='m4.22 9.66.21-1.14C4.87 6.17 5.08 5 5.92 4.3c.83-.7 2.03-.7 4.41-.7h3.4c2.5 0 3.74 0 4.6.75.84.73 1 1.97 1.35 4.44l.12.87'
        stroke='currentColor'
      />
      <path
        d='M3.18 18.24c0 1.12 0 1.69.29 2.08q.14.2.33.33c.4.29.96.29 2.08.29h.1c1.12 0 1.68 0 2.07-.29q.2-.14.34-.33c.28-.4.28-.96.28-2.08'
        stroke='currentColor'
      />
      <path
        d='M15.24 18.24c0 1.12 0 1.69.29 2.08q.14.2.33.33c.4.29.96.29 2.08.29H18c1.13 0 1.69 0 2.08-.29q.2-.14.34-.33c.28-.4.28-.96.28-2.08'
        stroke='currentColor'
      />
      <path d='m19.8 9.66 2.16-2.15' stroke='currentColor' />
      <path d='M15.82 12.94h2.16' stroke='currentColor' />
      <path d='M5.93 12.94H8.2' stroke='currentColor' />
      <path d='M4.22 9.66 2.06 7.5' stroke='currentColor' />
    </svg>
  )
}
