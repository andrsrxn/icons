import type { Icon } from './types'

export const IconKeyTab: Icon = ({
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
      data-slot='icon-ui-key-tab'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m12.72 6.57 2.6 2.6c1.34 1.33 2 2 2 2.82 0 .83-.66 1.5-2 2.84l-2.6 2.6'
        stroke='currentColor'
      />
      <path d='M2.6 12h14.28' stroke='currentColor' />
      <path d='M21.4 18.27V5.73' stroke='currentColor' />
    </svg>
  )
}
