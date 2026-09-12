import type { Icon } from './types'

export const IconArrowURight: Icon = ({
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
      data-slot='icon-ui-arrow-u-right'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M19.48 8.58h-9.9a5.71 5.71 0 0 0 0 11.42h7.33' stroke='currentColor' />
      <path
        d='m16.1 4 1.75 1.74c1.33 1.34 2 2 2 2.83s-.67 1.5-2 2.83l-1.75 1.75'
        stroke='currentColor'
      />
    </svg>
  )
}
