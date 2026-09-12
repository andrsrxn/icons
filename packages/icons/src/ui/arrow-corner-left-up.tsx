import type { Icon } from './types'

export const IconArrowCornerLeftUp: Icon = ({
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
      data-slot='icon-ui-arrow-corner-left-up'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M8.5 5v6.43c0 3.77 0 5.66 1.17 6.83s3.05 1.17 6.82 1.17H19' stroke='currentColor' />
      <path
        d='M4.23 8.05 5.66 6.6c1.34-1.34 2-2 2.83-2s1.5.66 2.83 2l1.44 1.44'
        stroke='currentColor'
      />
    </svg>
  )
}
