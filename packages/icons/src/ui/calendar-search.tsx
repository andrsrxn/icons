import type { Icon } from './types'

export const IconCalendarSearch: Icon = ({
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
      data-slot='icon-ui-calendar-search'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M20.8 17.6a3.24 3.24 0 1 1-6.49 0 3.24 3.24 0 0 1 6.49 0'
        fill='currentColor'
      />
      <rect opacity='.2' x='3.01' y='3.46' width='17.97' height='5.25' rx='1' fill='currentColor' />
      <path d='m20.15 20.14 2.09 2.1' stroke='currentColor' />
      <path
        d='M20.8 17.6a3.23 3.23 0 0 1-3.24 3.25 3.24 3.24 0 1 1 3.24-3.24'
        stroke='currentColor'
      />
      <path
        d='M20.98 12.1V9.46c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88H9c-2.83 0-4.25 0-5.12.88S3 6.64 3 9.46v5.97c0 2.83 0 4.24.88 5.12.87.88 2.29.88 5.12.88h2.96'
        stroke='currentColor'
      />
      <path d='M7.68 1.76v3.4' stroke='currentColor' />
      <path d='M16.36 1.76v3.4' stroke='currentColor' />
      <path d='M20.56 8.7H3.83' stroke='currentColor' />
    </svg>
  )
}
