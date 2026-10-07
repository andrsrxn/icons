import type { Icon } from './types'

export const IconBasketball: Icon = ({
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
      data-slot='icon-ui-basketball'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M16.25 16.3c2.83 0 4.24 0 5.12-.89.88-.88.88-2.3.88-5.12s0-4.24-.88-5.12-2.3-.88-5.12-.88h-8.5c-2.83 0-4.24 0-5.12.88s-.88 2.3-.88 5.12 0 4.24.88 5.12 2.3.88 5.12.88h.29l-.76-5.77h9.48L16 16.29z'
        fill='currentColor'
      />
      <path
        d='M4.75 16.3q0 0 0 0a3 3 0 0 1-3-3v-3.01c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h8.5c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v3a3 3 0 0 1-3 3'
        stroke='currentColor'
      />
      <path d='M12 19.7v-9.1' stroke='currentColor' />
      <path d='m8.83 19.7-1.38-9.1' stroke='currentColor' />
      <path d='m15.22 19.7 1.33-9.1' stroke='currentColor' />
      <path d='M6 10.6h12' stroke='currentColor' />
      <path d='M8 14.04h8' stroke='currentColor' />
      <path d='M8.56 17.67h6.88' stroke='currentColor' />
    </svg>
  )
}
