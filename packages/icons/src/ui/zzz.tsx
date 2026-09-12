import type { Icon } from './types'

export const IconZzz: Icon = ({
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
      data-slot='icon-ui-zzz'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M9.19 11.17H4.75c-1.07 0-1.61 0-1.74-.32-.12-.31.27-.68 1.06-1.41l4.07-3.8c.79-.74 1.18-1.1 1.06-1.42-.13-.32-.66-.32-1.74-.32H2.9'
        stroke='currentColor'
      />
      <path
        d='M21.18 15.57h-5.83c-1.06 0-1.6 0-1.72-.32-.12-.31.26-.68 1.03-1.4l5.66-5.35c.77-.74 1.16-1.1 1.03-1.42s-.65-.31-1.72-.31h-5.98'
        stroke='currentColor'
      />
      <path
        d='M9.88 20.2H7.49c-1.05 0-1.58 0-1.7-.3-.13-.32.25-.69 1.01-1.42l1.84-1.76c.77-.73 1.15-1.1 1.02-1.4-.12-.32-.65-.32-1.7-.32H5.73'
        stroke='currentColor'
      />
    </svg>
  )
}
