import type { Icon } from './types'

export const IconShipWheel: Icon = ({
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
      data-slot='icon-ui-ship-wheel'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle opacity='.2' cx='12' cy='12' r='3.67' fill='currentColor' />
      <circle cx='12' cy='12' r='3.67' stroke='currentColor' />
      <circle cx='12' cy='12' r='8.56' stroke='currentColor' />
      <path d='M1.48 12h6.85' stroke='currentColor' />
      <path d='M15.67 12h6.85' stroke='currentColor' />
      <path d='M12 22.52v-6.85' stroke='currentColor' />
      <path d='M12 8.34V1.49' stroke='currentColor' />
      <path d='M20.55 20.56 14.98 15' stroke='currentColor' />
      <path d='M9.01 9.03 3.44 3.46' stroke='currentColor' />
      <path d='M3.44 20.56 9.01 15' stroke='currentColor' />
      <path d='m14.98 9.03 5.57-5.57' stroke='currentColor' />
    </svg>
  )
}
