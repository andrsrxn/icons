import type { Icon } from './types'

export const IconChevronLeftDoubleCircle: Icon = ({
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
      data-slot='icon-ui-chevron-left-double-circle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.69 12.13a10.31 10.31 0 1 0 20.62 0 10.31 10.31 0 0 0-20.62 0'
        fill='currentColor'
      />
      <path
        d='M1.7 12.13a10.31 10.31 0 1 1 20.61 0 10.31 10.31 0 0 1-20.62 0'
        stroke='currentColor'
      />
      <path
        d='m10.7 17.22-2.38-2.39c-1.33-1.33-2-2-2-2.83 0-.82.66-1.5 2-2.83l2.39-2.39'
        stroke='currentColor'
      />
      <path
        d='m16.03 17.22-2.38-2.39c-1.34-1.33-2-2-2-2.83 0-.82.66-1.5 2-2.83l2.38-2.39'
        stroke='currentColor'
      />
    </svg>
  )
}
