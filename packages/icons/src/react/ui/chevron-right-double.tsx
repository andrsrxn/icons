import type { Icon } from './types'

export const IconChevronRightDouble: Icon = ({
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
      data-slot='icon-ui-chevron-right-double'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m11.33 19.32-4.5-4.48c-1.33-1.34-2-2-2-2.83s.67-1.5 2-2.83l4.5-4.5'
        stroke='currentColor'
      />
      <path
        d='m18.8 19.32-4.5-4.48c-1.33-1.34-2-2-2-2.83s.67-1.5 2-2.83l4.5-4.5'
        stroke='currentColor'
      />
    </svg>
  )
}
