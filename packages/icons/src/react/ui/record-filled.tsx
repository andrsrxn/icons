import type { Icon } from './types'

export const IconRecordFilled: Icon = ({
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
      data-slot='icon-ui-record-filled'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M18.23 12A6.2 6.2 0 0 0 12 5.77 6.23 6.23 0 1 0 18.23 12'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M22.22 12A10.2 10.2 0 0 0 12 1.78 10.22 10.22 0 1 0 22.22 12'
        stroke='currentColor'
      />
    </svg>
  )
}
