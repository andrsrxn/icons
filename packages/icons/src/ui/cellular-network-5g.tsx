import type { Icon } from './types'

export const IconCellularNetwork5g: Icon = ({
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
      data-slot='icon-ui-cellular-network-5g'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M8.05 7.94a6.7 6.7 0 0 1 3.97-1.3c1.76 0 3.23.59 3.96 1.3' stroke='currentColor' />
      <path d='M5.6 4.97A10.5 10.5 0 0 1 12 2.72c2.85 0 4.83 1 6.4 2.25' stroke='currentColor' />
      <path
        d='M5.22 21.28h2.17a2.4 2.4 0 1 0 0-4.81H4.91q0 0 0 0V14.3c0-.94 0-1.41.3-1.7.28-.3.76-.3 1.7-.3h2.4'
        stroke='currentColor'
      />
      <path
        d='M18.79 12.8a4.55 4.55 0 1 0-.1 8.16c.35-.17.52-.26.67-.5s.16-.5.16-1v-2.3h-2.43'
        stroke='currentColor'
      />
    </svg>
  )
}
