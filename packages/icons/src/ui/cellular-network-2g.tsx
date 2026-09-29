import type { Icon } from './types'

export const IconCellularNetwork2g: Icon = ({
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
      data-slot='icon-ui-cellular-network-2g'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M18.89 12.76a4.55 4.55 0 1 0-.1 8.16c.35-.17.52-.26.68-.5.15-.25.15-.5.15-1v-2.3h-2.43'
        stroke='currentColor'
      />
      <path d='M8.05 7.94a6.7 6.7 0 0 1 3.97-1.3c1.76 0 3.23.59 3.96 1.3' stroke='currentColor' />
      <path d='M5.6 4.97A10.5 10.5 0 0 1 12 2.72c2.85 0 4.83 1 6.4 2.25' stroke='currentColor' />
      <path
        d='M4.94 13.41c.66-.8 1.3-1.41 2.64-1.41 2.37 0 2.76 2.78 1.57 4.18-.8.93-2.72 2.42-3.95 3.72-.41.44-.62.66-.5.97.14.3.47.3 1.14.3h3.97'
        stroke='currentColor'
      />
    </svg>
  )
}
