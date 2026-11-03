import type { Icon } from './types'

export const IconRotateCircle: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

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
      data-slot='icon-ui-rotate-circle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M3.03 13.34a8.97 8.97 0 1 0 17.94 0 8.97 8.97 0 0 0-17.94 0'
        fill='currentColor'
      />
      <path
        d='m14.64 1.7-2.02 1.65c-.8.65-1.19.98-1.21 1.42s.33.8 1.06 1.54l1.83 1.86'
        stroke='currentColor'
      />
      <path
        d='M12.18 4.74c5.75-.24 8.8 3.64 8.8 8.6A8.97 8.97 0 1 1 6.74 6.06'
        stroke='currentColor'
      />
    </svg>
  )
}
