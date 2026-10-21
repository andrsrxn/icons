import type { Icon } from './types'

export const IconArrowDownCircle: Icon = ({
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
      data-slot='icon-ui-arrow-down-circle'
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
        d='m17.3 13.12-2.46 2.46c-1.34 1.34-2 2-2.83 2s-1.5-.66-2.83-2l-2.46-2.46'
        stroke='currentColor'
      />
      <path d='M12 6.45v11' stroke='currentColor' />
    </svg>
  )
}
