import type { Icon } from './types'

export const IconAlpha: Icon = ({
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
      data-slot='icon-ui-alpha'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M16.1 3.52c0 6.66-.4 16.96-6.63 16.96-3.96 0-6.08-4.34-6.08-8.48S5.5 3.52 9.47 3.52c9.4 0 4.03 16.96 9.12 16.96 1.77 0 2.02-1.6 2.02-2.93'
        stroke='currentColor'
      />
    </svg>
  )
}
