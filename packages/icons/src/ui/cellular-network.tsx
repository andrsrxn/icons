import type { Icon } from './types'

export const IconCellularNetwork: Icon = ({
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
      data-slot='icon-ui-cellular-network'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M12 21.32V12.2' stroke='currentColor' />
      <circle
        opacity='.2'
        cx='12'
        cy='9.09'
        r='3.1'
        transform='rotate(90 12 9.1)'
        fill='currentColor'
      />
      <circle cx='12' cy='9.09' r='3.1' transform='rotate(90 12 9.1)' stroke='currentColor' />
      <path d='M6.63 12.4A6.3 6.3 0 0 1 5.4 8.69c0-1.65.56-3.04 1.23-3.72' stroke='currentColor' />
      <path
        d='M17.37 12.4a6.3 6.3 0 0 0 1.23-3.72c0-1.65-.56-3.04-1.23-3.72'
        stroke='currentColor'
      />
      <path d='M3.85 14.72A10 10 0 0 1 1.72 8.7a9.2 9.2 0 0 1 2.13-6.02' stroke='currentColor' />
      <path d='M20.15 14.72a10 10 0 0 0 2.13-6.02 9.2 9.2 0 0 0-2.13-6.02' stroke='currentColor' />
    </svg>
  )
}
