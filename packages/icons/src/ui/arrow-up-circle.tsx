import type { Icon } from './types'

export const IconArrowUpCircle: Icon = ({
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
      data-slot='icon-ui-arrow-up-circle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.69 11.98a10.31 10.31 0 1 0 20.62 0 10.31 10.31 0 0 0-20.62 0'
        fill='currentColor'
      />
      <path
        d='M1.7 11.98a10.31 10.31 0 1 1 20.61 0 10.31 10.31 0 0 1-20.62 0'
        stroke='currentColor'
      />
      <path
        d='M6.72 11.05 9.17 8.6c1.33-1.33 2-2 2.83-2s1.5.67 2.83 2l2.46 2.46'
        stroke='currentColor'
      />
      <path d='M12 17.72V6.73' stroke='currentColor' />
    </svg>
  )
}
