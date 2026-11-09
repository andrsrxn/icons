import type { Icon } from './types'

export const IconCellularNetworkEdge: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-cellular-network-edge'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M8.05 7.94a6.7 6.7 0 0 1 3.97-1.3c1.76 0 3.23.59 3.96 1.3' stroke='currentColor' />
      <path d='M5.6 4.97A10.5 10.5 0 0 1 12 2.72c2.85 0 4.83 1 6.4 2.25' stroke='currentColor' />
      <path
        d='M14.59 21.22h-3.5c-.48 0-.71 0-.86-.15s-.15-.38-.15-.85v-7.03c0-.48 0-.71.15-.86.15-.14.38-.14.85-.14h3.5'
        stroke='currentColor'
      />
      <path d='M10.08 16.7h3.36' stroke='currentColor' />
    </svg>
  )
}
