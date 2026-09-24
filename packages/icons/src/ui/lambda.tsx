import type { Icon } from './types'

export const IconLambda: Icon = ({
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
      data-slot='icon-ui-lambda'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M19.74 18.14c.21 1.32-.15 2.67-1.56 3.1-1.86.55-3.26-1.26-3.9-3.1-2.1-6.04-2.62-7.22-4.13-12.87-.38-1.4-1.2-2.45-2.63-2.6-1.45-.14-2.96 1.03-2.59 2.6'
        stroke='currentColor'
      />
      <path d='M11.34 9.9 4.88 21.34' stroke='currentColor' />
    </svg>
  )
}
