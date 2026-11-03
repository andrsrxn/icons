import type { Icon } from './types'

export const IconMoreVerticalCircle: Icon = ({
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
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-more-vertical-circle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.69 12a10.31 10.31 0 1 0 20.62 0 10.31 10.31 0 0 0-20.62 0'
        fill='currentColor'
      />
      <path d='M1.7 12A10.3 10.3 0 0 0 12 22.31 10.31 10.31 0 1 0 1.7 12' stroke='currentColor' />
      <path
        d='M12 16.33a.84.84 0 1 1 0 1.68.84.84 0 0 1 0-1.68'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M12 11.16a.84.84 0 1 1 0 1.67.84.84 0 0 1 0-1.67'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M12 6a.84.84 0 1 1 0 1.67.84.84 0 0 1 0-1.68'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
