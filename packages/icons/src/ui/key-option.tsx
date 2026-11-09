import type { Icon } from './types'

export const IconKeyOption: Icon = ({
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
      data-slot='icon-ui-key-option'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M2.74 7.33H5.8c1.69 0 2.53 0 3.23.4s1.12 1.13 1.96 2.6l2.39 4.13c.84 1.46 1.27 2.2 1.96 2.6.7.4 1.54.4 3.23.4h2.7'
        stroke='currentColor'
      />
      <path d='M15.26 7.33h6' stroke='currentColor' />
    </svg>
  )
}
