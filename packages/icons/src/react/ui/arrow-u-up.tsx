import type { Icon } from './types'

export const IconArrowUUp: Icon = ({
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
      data-slot='icon-ui-arrow-u-up'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M7.58 4.6v9.9a5.71 5.71 0 0 0 11.42 0V7.17' stroke='currentColor' />
      <path
        d='m3 7.98 1.74-1.75c1.34-1.33 2-2 2.83-2s1.5.67 2.83 2l1.75 1.75'
        stroke='currentColor'
      />
    </svg>
  )
}
