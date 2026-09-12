import type { Icon } from './types'

export const IconTree: Icon = ({
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
      data-slot='icon-ui-tree'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='16.35'
        height='14.14'
        rx='5'
        transform='matrix(0 1 1 0 4.93 1.7)'
        fill='currentColor'
      />
      <rect
        width='16.35'
        height='14.14'
        rx='5'
        transform='matrix(0 1 1 0 4.93 1.7)'
        stroke='currentColor'
      />
      <path d='M12 21.98V6' stroke='currentColor' />
      <path d='M8.27 22.24h7.46' stroke='currentColor' />
      <path d='m12 14.3-3.14-3.13' stroke='currentColor' />
      <path d='m12 11.17 3.14-3.15' stroke='currentColor' />
    </svg>
  )
}
