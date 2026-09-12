import type { Icon } from './types'

export const IconCalculator: Icon = ({
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
      data-slot='icon-ui-calculator'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='18.49'
        height='5.56'
        rx='2'
        transform='matrix(-1 0 0 1 21.25 2.73)'
        fill='currentColor'
      />
      <rect
        width='18.49'
        height='18.55'
        rx='3'
        transform='matrix(-1 0 0 1 21.25 2.73)'
        stroke='currentColor'
      />
      <path d='M2.75 8.3h18.5' stroke='currentColor' />
      <path d='M14.5 5.5h3.54' stroke='currentColor' />
      <path d='M6 11.17h1.6' stroke='currentColor' />
      <path d='M11.22 11.17h1.6' stroke='currentColor' />
      <path d='M16.44 11.17h1.6' stroke='currentColor' />
      <path d='M6 14.94h1.6' stroke='currentColor' />
      <path d='M6 18.53h1.6' stroke='currentColor' />
      <path d='M11.22 14.94h1.6' stroke='currentColor' />
      <path d='M11.22 18.53h1.6' stroke='currentColor' />
      <path d='M16.44 14.94h1.6' stroke='currentColor' />
      <path d='M16.44 18.53h1.6' stroke='currentColor' />
    </svg>
  )
}
