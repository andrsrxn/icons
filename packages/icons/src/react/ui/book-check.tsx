import type { Icon } from './types'

export const IconBookCheck: Icon = ({
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
      data-slot='icon-ui-book-check'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M3.1 5.82c0-1.89 0-2.83.58-3.41.58-.6 1.53-.6 3.41-.6h9.82c1.88 0 2.83 0 3.41.6.59.58.59 1.52.59 3.4v8.63c0 1.89 0 2.83-.59 3.42-.58.58-1.53.58-3.41.58H3.09z'
        fill='currentColor'
      />
      <path
        d='M3.1 7.82c0-2.83 0-4.24.87-5.12.88-.88 2.3-.88 5.12-.88h5.82c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v4.62c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88H3.09z'
        stroke='currentColor'
      />
      <path
        d='M3.1 18.44c0 1.63 0 2.45.44 3l.29.3c.55.44 1.37.44 3 .44h8.78c1.64 0 2.45 0 3-.45a2 2 0 0 0 .3-.29c.44-.55.44-1.37.44-3'
        stroke='currentColor'
      />
      <path
        d='m8.24 10.66.98 1.2c.72.88 1.08 1.32 1.55 1.32.48 0 .84-.44 1.55-1.32l3.8-4.7'
        stroke='currentColor'
      />
    </svg>
  )
}
