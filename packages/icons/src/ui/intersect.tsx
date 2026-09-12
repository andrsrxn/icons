import type { Icon } from './types'

export const IconIntersect: Icon = ({
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
      data-slot='icon-ui-intersect'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.77 7.73c0-2.83 0-4.24.87-5.12.88-.88 2.3-.88 5.13-.88h4.97c.34 0 .51 0 .65.02a3 3 0 0 1 2.7 2.7c.02.14.02.3.02.65 0 .34 0 .51-.02.65a3 3 0 0 1-2.7 2.7c-.14.02-.31.02-.65.02h-.46c-.68 0-1.01 0-1.3.05a3 3 0 0 0-2.26 1.97c-.1.28-.14.62-.23 1.3l-.19 1.44-.07.44a3 3 0 0 1-2.73 2.4h-.95a3 3 0 0 1-2.78-2.78z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M22.23 16.08c0 2.83 0 4.24-.87 5.12-.88.88-2.3.88-5.13.88h-5.51a3 3 0 0 1-2.79-2.82v-.48l.01-.44a3 3 0 0 1 3-2.78l.91-.07c.85-.07 1.27-.1 1.63-.22a3 3 0 0 0 1.93-2.02c.1-.36.11-.78.14-1.63l.02-.66.03-.57a3 3 0 0 1 2.73-2.64l.57-.01.6.01a3 3 0 0 1 2.72 2.73l.01.59z'
        fill='currentColor'
      />
      <rect x='1.77' y='1.73' width='14.34' height='14.34' rx='3' stroke='currentColor' />
      <rect x='7.89' y='7.93' width='14.34' height='14.34' rx='3' stroke='currentColor' />
    </svg>
  )
}
