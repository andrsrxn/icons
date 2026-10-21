import type { Icon } from './types'

export const IconCrosshairLine: Icon = ({
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
      data-slot='icon-ui-crosshair-line'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M15.52 12.15h5.85' stroke='currentColor' />
      <path d='M2.63 12.15h5.86' stroke='currentColor' />
      <path d='M12 8.62V2.78' stroke='currentColor' />
      <path d='M12 21.22v-5.48' stroke='currentColor' />
    </svg>
  )
}
