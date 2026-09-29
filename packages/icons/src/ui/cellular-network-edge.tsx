import type { Icon } from './types'

export const IconCellularNetworkEdge: Icon = ({
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
      data-slot='icon-ui-cellular-network-edge'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M8.05 7.94a6.7 6.7 0 0 1 3.97-1.3c1.76 0 3.23.59 3.96 1.3' stroke='currentColor' />
      <path d='M5.6 4.97A10.5 10.5 0 0 1 12 2.72c2.85 0 4.83 1 6.4 2.25' stroke='currentColor' />
      <path d='M9.73 12.16v8.15' stroke='currentColor' />
      <path d='M9.73 12.16h5.21' stroke='currentColor' />
      <path d='M9.73 20.31h5.21' stroke='currentColor' />
      <path d='M9.73 16.4h3.74' stroke='currentColor' />
    </svg>
  )
}
