import type { Icon } from './types'

export const IconHyperbole: Icon = ({
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
      data-slot='icon-ui-hyperbole'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M2.46 12h19.08' stroke='currentColor' />
      <path d='M12 21.54V2.46' stroke='currentColor' />
      <path d='M3.72 8.72a5 5 0 0 0 3.45-1.59 5 5 0 0 0 1.58-3.45' stroke='currentColor' />
      <path d='M20.27 15.27c-1.47.11-2.4.54-3.44 1.59a5 5 0 0 0-1.6 3.45' stroke='currentColor' />
    </svg>
  )
}
