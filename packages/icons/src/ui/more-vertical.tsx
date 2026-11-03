import type { Icon } from './types'

export const IconMoreVertical: Icon = ({
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
      data-slot='icon-ui-more-vertical'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M12 6.1a1.23 1.23 0 1 1 0-2.46 1.23 1.23 0 0 1 0 2.46'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M12 13.23a1.23 1.23 0 1 1 0-2.46 1.23 1.23 0 0 1 0 2.46'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M12 20.36a1.23 1.23 0 1 1 0-2.46 1.23 1.23 0 0 1 0 2.46'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
