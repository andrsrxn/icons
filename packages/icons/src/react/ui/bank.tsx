import type { Icon } from './types'

export const IconBank: Icon = ({
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
      data-slot='icon-ui-bank'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect opacity='.2' x='2.74' y='17.37' width='18.53' height='3.9' rx='1' fill='currentColor' />
      <path
        opacity='.2'
        d='M10.88 3.13c.54-.36.81-.55 1.12-.55.3 0 .58.19 1.12.55l5.14 3.48c2.21 1.5 3.32 2.24 3.1 2.95-.21.7-1.55.7-4.22.7H6.86c-2.67 0-4 0-4.22-.7s.89-1.46 3.1-2.95z'
        fill='currentColor'
      />
      <rect x='2.74' y='17.37' width='18.53' height='3.9' rx='1' stroke='currentColor' />
      <path
        d='M10.88 3.13c.54-.36.81-.55 1.12-.55.3 0 .58.19 1.12.55l5.14 3.48c2.21 1.5 3.32 2.24 3.1 2.95-.21.7-1.55.7-4.22.7H6.86c-2.67 0-4 0-4.22-.7s.89-1.46 3.1-2.95z'
        stroke='currentColor'
      />
      <path d='M5.22 10.27v7.1' stroke='currentColor' />
      <path d='M9.74 10.27v7.1' stroke='currentColor' />
      <path d='M14.26 10.27v7.1' stroke='currentColor' />
      <path d='M18.78 10.27v7.1' stroke='currentColor' />
    </svg>
  )
}
