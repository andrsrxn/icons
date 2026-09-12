import type { Icon } from './types'

export const IconTradeMark: Icon = ({
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
      data-slot='icon-ui-trade-mark'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.74 12a10.25 10.25 0 1 0 20.5 0 10.25 10.25 0 0 0-20.5 0'
        fill='currentColor'
      />
      <path d='M1.75 12A10.2 10.2 0 0 0 12 22.25 10.25 10.25 0 1 0 1.75 12' stroke='currentColor' />
      <path d='M8.2 9.18v5.68' stroke='currentColor' />
      <path d='M13.2 9.18v5.68' stroke='currentColor' />
      <path d='M17.9 9.18v5.68' stroke='currentColor' />
      <path d='m13.27 9.14 2.35 2.82' stroke='currentColor' />
      <path d='m17.9 9.14-2.28 2.82' stroke='currentColor' />
      <path d='M6.1 9.18h4.19' stroke='currentColor' />
    </svg>
  )
}
