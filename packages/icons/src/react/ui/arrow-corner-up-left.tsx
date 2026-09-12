import type { Icon } from './types'

export const IconArrowCornerUpLeft: Icon = ({
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
      data-slot='icon-ui-arrow-corner-up-left'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M5 8.5h6.37c3.77 0 5.65 0 6.82 1.17 1.18 1.17 1.18 3.05 1.18 6.82V19'
        stroke='currentColor'
      />
      <path
        d='M7.98 4.23 6.54 5.66c-1.33 1.34-2 2-2 2.83s.67 1.5 2 2.83l1.44 1.44'
        stroke='currentColor'
      />
    </svg>
  )
}
