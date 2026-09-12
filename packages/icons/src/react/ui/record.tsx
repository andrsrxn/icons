import type { Icon } from './types'

export const IconRecord: Icon = ({
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
      data-slot='icon-ui-record'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M18.29 12a6.28 6.28 0 1 0-12.57 0 6.28 6.28 0 0 0 12.57 0'
        fill='currentColor'
      />
      <path d='M18.28 12A6.26 6.26 0 0 0 12 5.72 6.28 6.28 0 1 0 18.28 12' stroke='currentColor' />
      <path d='M22.3 12A10.3 10.3 0 0 0 12 1.7 10.3 10.3 0 1 0 22.3 12' stroke='currentColor' />
    </svg>
  )
}
