import type { Icon } from './types'

export const IconChevronDownUp: Icon = ({
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
      data-slot='icon-ui-chevron-down-up'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='m6.54 19.87 2.63-2.63c1.33-1.34 2-2 2.82-2 .83 0 1.5.66 2.84 2l2.63 2.63'
        stroke='currentColor'
      />
      <path
        d='m6.54 4.13 2.63 2.63c1.33 1.34 2 2 2.82 2 .83 0 1.5-.66 2.84-2l2.63-2.63'
        stroke='currentColor'
      />
    </svg>
  )
}
