import type { Icon } from './types'

export const IconCreditCards: Icon = ({
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
      data-slot='icon-ui-credit-cards'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.67 10.85c0-.8 0-1.21.11-1.53A2 2 0 0 1 3 8.1c.33-.12.73-.12 1.54-.12h9.74a5 5 0 0 1 1.53.12 2 2 0 0 1 1.22 1.22 5 5 0 0 1 .11 1.53c0 .4 0 .6-.05.76a1 1 0 0 1-.61.61c-.16.06-.37.06-.77.06H3.11c-.41 0-.61 0-.77-.06a1 1 0 0 1-.61-.6c-.06-.17-.06-.37-.06-.77'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M6.6 6.85c0-.8 0-1.21.1-1.53A2 2 0 0 1 7.94 4.1c.32-.12.72-.12 1.53-.12h9.74c.8 0 1.21 0 1.54.12a2 2 0 0 1 1.21 1.22c.12.32.12.72.12 1.53 0 .4 0 .6-.06.76a1 1 0 0 1-.6.61c-.17.06-.37.06-.77.06H8.03c-.4 0-.6 0-.77-.06a1 1 0 0 1-.6-.6c-.07-.17-.07-.37-.07-.77'
        fill='currentColor'
      />
      <rect x='1.54' y='7.98' width='16' height='12.04' rx='3' stroke='currentColor' />
      <path
        d='M17.75 16.02c1.6 0 2.4 0 3.01-.3a3 3 0 0 0 1.4-1.4c.3-.62.3-1.42.3-3.02V9.98c0-2.83 0-4.24-.88-5.12s-2.29-.88-5.12-.88h-6.22c-.72 0-1.08 0-1.38.06a3 3 0 0 0-2.33 2.34c-.07.3-.07.66-.07 1.38'
        stroke='currentColor'
      />
      <path d='M1.8 11.97h15.47' stroke='currentColor' />
      <path d='M6.46 7.97H22.2' stroke='currentColor' />
      <path d='M4.1 14.65H8' stroke='currentColor' />
    </svg>
  )
}
