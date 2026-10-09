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
        width='10.22'
        height='17.13'
        rx='2'
        transform='matrix(0 -1 -1 0 18.76 19.12)'
        fill='currentColor'
      />
      <rect
        width='10.22'
        height='17.13'
        rx='3'
        transform='matrix(0 -1 -1 0 18.76 19.12)'
        stroke='currentColor'
      />
      <path d='m21.31 9.23 1.07-.17' stroke='currentColor' />
      <path d='m15.52 5.88-.38-1' stroke='currentColor' />
      <path d='m18.9 6.7.57-.98' stroke='currentColor' />
    </svg>
  )
}
