import type { Icon } from './types'

export const IconApproximate: Icon = ({
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
      data-slot='icon-ui-approximate'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M3.38 9.71a8 8 0 0 1 5.09-1.74c2.54 0 5.57 2.23 8.05 2.23 2.47 0 3.62-1.2 4.1-1.86'
        stroke='currentColor'
      />
      <path
        d='M3.38 15.54a8 8 0 0 1 5.09-1.74c2.54 0 5.57 2.23 8.05 2.23 2.47 0 3.62-1.2 4.1-1.86'
        stroke='currentColor'
      />
    </svg>
  )
}
