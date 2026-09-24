import type { Icon } from './types'

export const IconMirrorRound: Icon = ({
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
      data-slot='icon-ui-mirror-round'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path opacity='.2' d='M20 9.75a8 8 0 1 0-16 0 8 8 0 0 0 16 0' fill='currentColor' />
      <path d='M20 9.75a8 8 0 1 0-16 0 8 8 0 0 0 16 0' stroke='currentColor' />
      <path d='M10 5.1 7.36 7.76' stroke='currentColor' />
      <path d='m14.37 5.46-6.62 6.62' stroke='currentColor' />
      <path d='M8 22.22h8' stroke='currentColor' />
      <path d='M12 22.22v-4.47' stroke='currentColor' />
    </svg>
  )
}
