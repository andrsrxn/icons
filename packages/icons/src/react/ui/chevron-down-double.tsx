import type { Icon } from './types'

export const IconChevronDownDouble: Icon = ({
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
      data-slot='icon-ui-chevron-down-double'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m4.68 12.67 4.48 4.5c1.34 1.33 2 2 2.83 2s1.5-.67 2.83-2l4.5-4.5'
        stroke='currentColor'
      />
      <path
        d='m4.68 5.2 4.48 4.5c1.34 1.33 2 2 2.83 2s1.5-.67 2.83-2l4.5-4.5'
        stroke='currentColor'
      />
    </svg>
  )
}
