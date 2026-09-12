import type { Icon } from './types'

export const IconKeyEnter: Icon = ({
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
      data-slot='icon-ui-key-enter'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M2.97 13.6h11.95c2.23 0 3.35 0 4.2-.44a4 4 0 0 0 1.76-1.76c.43-.85.43-1.97.43-4.2'
        stroke='currentColor'
      />
      <path
        d='m5.87 17.66-1.25-1.24c-1.33-1.33-2-2-2-2.83 0-.82.67-1.5 2-2.83l1.25-1.24'
        stroke='currentColor'
      />
    </svg>
  )
}
