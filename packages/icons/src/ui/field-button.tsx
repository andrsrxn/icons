import type { Icon } from './types'

export const IconFieldButton: Icon = ({
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
      data-slot='icon-ui-field-button'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='9.98'
        height='16.37'
        rx='2'
        transform='matrix(0 -1 -1 0 17.92 19.2)'
        fill='currentColor'
      />
      <rect
        width='9.98'
        height='16.37'
        rx='3'
        transform='matrix(0 -1 -1 0 17.92 19.2)'
        stroke='currentColor'
      />
      <path d='M20.72 12.13h1.73' stroke='currentColor' />
      <path d='M15.35 6.46V4.8' stroke='currentColor' />
      <path d='m19.36 7.81 1.36-1.35' stroke='currentColor' />
    </svg>
  )
}
