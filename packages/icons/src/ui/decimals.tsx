import type { Icon } from './types'

export const IconDecimals: Icon = ({
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
      data-slot='icon-ui-decimals'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M3.55 16.35a.59.59 0 1 1-1.17 0 .59.59 0 0 1 1.17 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M21.57 12c0 2.72-.7 4.93-3.17 4.93s-3.18-2.2-3.18-4.93.82-4.93 3.18-4.93c2.35 0 3.17 2.2 3.17 4.93'
        stroke='currentColor'
      />
      <path
        d='M12.56 12c0 2.72-.7 4.93-3.17 4.93S6.2 14.73 6.2 12s.83-4.93 3.18-4.93 3.17 2.2 3.17 4.93'
        stroke='currentColor'
      />
    </svg>
  )
}
