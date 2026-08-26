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
        width='12'
        height='18.56'
        rx='3'
        transform='matrix(0 -1 -1 0 21.28 18)'
        fill='currentColor'
      />
      <rect
        width='12'
        height='18.56'
        rx='3'
        transform='matrix(0 -1 -1 0 21.28 18)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path d='M7.72 12H5.73m12.57 0h-2' stroke='currentColor' strokeWidth={strokeWidth} />
      <path
        d='M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
