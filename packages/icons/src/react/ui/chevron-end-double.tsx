import type { Icon } from './types'

export const IconChevronEndDouble: Icon = ({
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
      data-slot='icon-ui-chevron-end-double'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m12.67 4.68 4.5 4.48c1.33 1.34 2 2 2 2.83s-.67 1.5-2 2.83l-4.5 4.5'
        stroke='currentColor'
      />
      <path
        d='m5.2 4.68 4.5 4.48c1.33 1.34 2 2 2 2.83s-.67 1.5-2 2.83l-4.5 4.5'
        stroke='currentColor'
      />
    </svg>
  )
}
