import type { Icon } from './types'

export const IconTextSection: Icon = ({
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
      data-slot='icon-ui-text-section'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M15.72 5.08c-.35-1.08-1.54-2.3-3.65-2.3s-3.8 1.14-3.8 3.05c0 4.1 7.45 1.61 7.45 5.9 0 2.28-1.85 3.13-3.65 3.13-2.1 0-3.8-.85-3.8-2.45'
        stroke='currentColor'
      />
      <path
        d='M15.72 11.49c0-1.03-1.54-2.35-3.65-2.35s-3.8 1.13-3.8 3.05c0 4.1 7.45 1.6 7.45 5.9 0 1.91-1.54 3.12-3.65 3.12s-3.35-1.15-3.8-2.2'
        stroke='currentColor'
      />
    </svg>
  )
}
