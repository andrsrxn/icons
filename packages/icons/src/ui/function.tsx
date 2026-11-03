import type { Icon } from './types'

export const IconFunction: Icon = ({
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
      data-slot='icon-ui-function'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M4.6 18.24c-.21 1.32.15 2.67 1.56 3.1 1.86.55 3.26-1.26 3.9-3.1 2.1-6.04 2.61-7.22 4.13-12.87.38-1.4 1.2-2.45 2.63-2.6 1.44-.13 2.96 1.03 2.58 2.6'
        stroke='currentColor'
      />
      <path d='M7.51 11.27H17.8' stroke='currentColor' />
    </svg>
  )
}
