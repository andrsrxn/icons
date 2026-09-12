import type { Icon } from './types'

export const IconHanger: Icon = ({
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
      data-slot='icon-ui-hanger'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M2.29 17.48c-.41-1.08-.62-1.62-.48-2.1q.06-.2.17-.38c.26-.42.8-.63 1.88-1.05l7.13-2.76c.54-.21.81-.31 1.1-.31.28 0 .55.1 1.09.31l6.94 2.74c1.1.43 1.64.64 1.9 1.08q.1.17.16.35c.14.5-.08 1.04-.5 2.13-.3.77-.46 1.15-.75 1.4l-.25.17c-.33.18-.74.18-1.57.18H4.85c-.83 0-1.24 0-1.57-.18l-.26-.18c-.3-.25-.44-.64-.73-1.4'
        stroke='currentColor'
      />
      <path
        d='M11.96 10.77c0-2.17 2.3-3.27 2.3-5.27a2.27 2.27 0 0 0-4.53 0'
        stroke='currentColor'
      />
    </svg>
  )
}
