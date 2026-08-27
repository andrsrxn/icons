import type { Icon } from './types'

export const IconBankNote: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-bank-note'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        width='12.27'
        height='18.97'
        rx='3'
        transform='matrix(0 -1 -1 0 21.49 18.13)'
        fill='currentColor'
      />
      <rect
        width='12.27'
        height='18.97'
        rx='3'
        transform='matrix(0 -1 -1 0 21.49 18.13)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path d='M7.63 12H5.59m12.85 0H16.4' stroke='currentColor' strokeWidth={strokeWidth} />
      <path
        d='M13.02 12a1.02 1.02 0 1 1-2.04 0 1.02 1.02 0 0 1 2.04 0'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
