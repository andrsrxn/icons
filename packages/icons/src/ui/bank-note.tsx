import type { Icon } from './types'

export const IconBankNote: Icon = ({
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
      data-slot='icon-ui-bank-note'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='14'
        height='20.62'
        rx='3'
        transform='matrix(0 -1 -1 0 22.31 19)'
        fill='currentColor'
      />
      <rect
        width='14'
        height='20.62'
        rx='3'
        transform='matrix(0 -1 -1 0 22.31 19)'
        stroke='currentColor'
      />
      <path d='M7.25 12H5.04' stroke='currentColor' />
      <path d='M19 12h-2.21' stroke='currentColor' />
      <path
        d='M13.11 12a1.11 1.11 0 1 1-2.22 0 1.11 1.11 0 0 1 2.22 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
