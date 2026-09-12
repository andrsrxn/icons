import type { Icon } from './types'

export const IconReceipt: Icon = ({
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
      data-slot='icon-ui-receipt'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M17.15 20.7c1.36.88 2.04 1.32 2.56 1.03.52-.28.52-1.09.52-2.7V8.52c0-2.84 0-4.25-.88-5.13s-2.3-.88-5.12-.88H9.77c-2.83 0-4.24 0-5.12.88s-.88 2.3-.88 5.12V19c0 1.6 0 2.41.52 2.7l.02.01c.52.28 1.2-.17 2.54-1.05.47-.3.7-.46.97-.48h.02c.26 0 .51.12 1.01.38l2.22 1.15c.46.23.68.35.93.35.24 0 .47-.12.92-.36l2.15-1.13c.5-.27.76-.4 1.03-.39s.5.17.99.48z'
        fill='currentColor'
      />
      <path
        d='M17.12 20.61c1.37.92 2.05 1.37 2.58 1.09s.53-1.1.53-2.75V8.52c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88H9.77c-2.83 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v10.42c0 1.65 0 2.47.53 2.75.53.29 1.22-.17 2.59-1.1l.13-.08c.47-.32.71-.48.98-.5.27-.01.53.11 1.03.37l2.07 1.04c.44.22.66.33.9.33s.46-.11.9-.33l2.04-1.04c.51-.25.77-.38 1.04-.37s.5.18.98.5z'
        stroke='currentColor'
      />
      <path d='M7.76 11.41h8.6' stroke='currentColor' />
      <path d='M7.76 7.4h8.6' stroke='currentColor' />
      <path d='M7.63 15.4h5.4' stroke='currentColor' />
    </svg>
  )
}
