import type { Icon } from './types'

export const IconChevronDownDoubleCircle: Icon = ({
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
      data-slot='icon-ui-chevron-down-double-circle'
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
        d='m6.78 13.32 2.38 2.38c1.34 1.34 2 2 2.83 2s1.5-.66 2.83-2l2.4-2.38'
        stroke='currentColor'
      />
      <path
        d='m6.78 8 2.38 2.38c1.34 1.33 2 2 2.83 2s1.5-.66 2.83-2L17.22 8'
        stroke='currentColor'
      />
    </svg>
  )
}
