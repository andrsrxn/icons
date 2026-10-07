import type { Icon } from './types'

export const IconCellularNetworkLte: Icon = ({
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
      data-slot='icon-ui-cellular-network-lte'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M8.05 7.94a6.7 6.7 0 0 1 3.97-1.3c1.76 0 3.23.59 3.96 1.3' stroke='currentColor' />
      <path d='M5.6 4.97A10.5 10.5 0 0 1 12 2.72c2.85 0 4.83 1 6.4 2.25' stroke='currentColor' />
      <path d='M10.28 11.8v8.9' stroke='currentColor' />
      <path d='M16.66 11.8v8.9' stroke='currentColor' />
      <path d='M7 11.8h6.56' stroke='currentColor' />
      <path d='M16.66 11.8h5.7' stroke='currentColor' />
      <path d='M16.66 20.7h5.7' stroke='currentColor' />
      <path d='M16.66 16.42h4.09' stroke='currentColor' />
      <path d='M1.68 11.61v9.09' stroke='currentColor' />
      <path d='M6.06 20.7H1.68' stroke='currentColor' />
    </svg>
  )
}
