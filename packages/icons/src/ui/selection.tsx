import type { Icon } from './types'

export const IconSelection: Icon = ({
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
      data-slot='icon-ui-selection'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.3 2.7c2.83 0 4.25 0 5.13.87.88.88.88 2.3.88 5.12v6.62c0 2.82 0 4.24-.88 5.12s-2.3.88-5.12.88H8.69c-2.82 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12V8.69c0-2.82 0-4.24.88-5.12s2.3-.88 5.12-.88h6.62'
        fill='currentColor'
      />
      <path d='M6.03 2.66h-.08l-.45.01a3 3 0 0 0-2.8 2.8v.45' stroke='currentColor' />
      <path d='M17.98 2.66h.07l.45.01a3 3 0 0 1 2.8 2.8v.45' stroke='currentColor' />
      <path d='M6.03 21.24H5.5a3 3 0 0 1-2.8-2.8V18' stroke='currentColor' />
      <path d='M17.98 21.24h.52a3 3 0 0 0 2.8-2.8V18' stroke='currentColor' />
      <path d='M2.76 10.14v3.57' stroke='currentColor' />
      <path d='M21.24 10.14v3.57' stroke='currentColor' />
      <path d='M10.22 21.14h3.57' stroke='currentColor' />
      <path d='M10.22 2.67h3.57' stroke='currentColor' />
    </svg>
  )
}
