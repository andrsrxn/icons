import type { Icon } from './types'

export const IconMoreHorizontalCircle: Icon = ({
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
      data-slot='icon-ui-more-horizontal-circle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.69 12a10.31 10.31 0 1 0 20.62 0 10.31 10.31 0 0 0-20.62 0'
        fill='currentColor'
      />
      <path d='M1.7 12A10.3 10.3 0 0 0 12 22.31 10.31 10.31 0 1 0 1.7 12' stroke='currentColor' />
      <path
        d='M7.67 12a.84.84 0 1 1-1.68 0 .84.84 0 0 1 1.68 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M12.84 12a.84.84 0 1 1-1.67 0 .84.84 0 0 1 1.67 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M18 12a.84.84 0 1 1-1.67 0A.84.84 0 0 1 18 12'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
