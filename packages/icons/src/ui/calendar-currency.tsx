import type { Icon } from './types'

export const IconCalendarCurrency: Icon = ({
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
      data-slot='icon-ui-calendar-currency'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect opacity='.2' x='3.01' y='3.46' width='17.97' height='5.25' rx='1' fill='currentColor' />
      <path
        d='M20.98 12.44V9.46c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88H9c-2.83 0-4.25 0-5.12.88S3 6.64 3 9.46v5.97c0 2.83 0 4.24.88 5.12.87.88 2.29.88 5.12.88h2.37'
        stroke='currentColor'
      />
      <path d='M7.68 1.76v3.4' stroke='currentColor' />
      <path d='M16.36 1.76v3.4' stroke='currentColor' />
      <path d='M20.56 8.7H3.83' stroke='currentColor' />
      <path
        d='M19.5 15.74c-.2-.66-1.2-1.17-2.39-1.17-1.17 0-2.46.44-2.46 1.77 0 2.89 4.86.67 4.86 3.34 0 1.24-1.2 1.7-2.4 1.7s-2.07-.5-2.46-1.19'
        stroke='currentColor'
      />
      <path d='M17.06 22.43v-.92' stroke='currentColor' />
      <path d='M17.06 14.42v-.9' stroke='currentColor' />
    </svg>
  )
}
