import type { Icon } from './types'

export const IconAtm: Icon = ({
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
      data-slot='icon-ui-atm'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M6.55 21.97a5 5 0 0 1-.94-.53 2 2 0 0 1-.7-1.38c0-.25.04-.52.14-1.07l2.03-11.1a2 2 0 0 1 1.96-1.64h.01a1 1 0 0 1 1 1.08v.01L8.83 21.38a1 1 0 0 1-.8.88c-.42.08-.86.02-1.24-.17z'
        fill='currentColor'
      />
      <path
        d='m7.45 7.1-1.88 7.63c-.85 3.43-1.27 5.14-.37 6.29s2.67 1.15 6.2 1.15h1.2c3.53 0 5.3 0 6.2-1.15s.48-2.86-.37-6.29L16.55 7.1'
        stroke='currentColor'
      />
      <path d='m8.9 21.94 1.25-14.85' stroke='currentColor' />
      <path d='M12.36 19.14v-3.6' stroke='currentColor' />
      <path
        opacity='.2'
        d='M19.5 11.43a2.1 2.1 0 0 0 2.11-2.1v-2.7c0-1.66 0-2.5-.32-3.13a3 3 0 0 0-1.33-1.33c-.64-.32-1.47-.32-3.13-.32H7.17c-1.66 0-2.5 0-3.13.32A3 3 0 0 0 2.7 3.5c-.32.63-.32 1.47-.32 3.13v2.59a2.2 2.2 0 0 0 4.33.52l.17-.69.03-.12A3 3 0 0 1 9.76 6.7h4.73a3 3 0 0 1 2.63 1.98c.04.09.06.19.12.38l.25.85a2.1 2.1 0 0 0 2.02 1.52'
        fill='currentColor'
      />
      <path
        d='M17.74 11.43c.8 0 1.21 0 1.55-.08a3 3 0 0 0 2.24-2.25c.08-.33.08-.74.08-1.54v-.92c0-1.66 0-2.5-.32-3.13a3 3 0 0 0-1.33-1.33c-.64-.32-1.47-.32-3.13-.32H7.17c-1.66 0-2.5 0-3.13.32A3 3 0 0 0 2.7 3.5c-.32.63-.32 1.47-.32 3.13v1.04c0 .7 0 1.04.06 1.33a3 3 0 0 0 2.36 2.36c.29.06.63.06 1.32.06'
        stroke='currentColor'
      />
      <path d='M5.62 6.64h12.76' stroke='currentColor' />
    </svg>
  )
}
