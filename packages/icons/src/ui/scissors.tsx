import type { Icon } from './types'

export const IconScissors: Icon = ({
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
      data-slot='icon-ui-scissors'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M3.02 5.74a3.3 3.3 0 1 0 6.58 0 3.3 3.3 0 0 0-6.58 0'
        fill='currentColor'
      />
      <path d='M3.02 5.74a3.3 3.3 0 0 0 3.3 3.29 3.3 3.3 0 1 0-3.3-3.3' stroke='currentColor' />
      <path
        opacity='.2'
        d='M3.02 18.26a3.3 3.3 0 1 0 6.58 0 3.3 3.3 0 0 0-6.58 0'
        fill='currentColor'
      />
      <path d='M3.02 18.26a3.3 3.3 0 0 0 3.3 3.3 3.3 3.3 0 1 0-3.3-3.3' stroke='currentColor' />
      <path d='M21.1 5.75 9.04 15.99' stroke='currentColor' />
      <path d='M9.04 7.82 21.1 18.07' stroke='currentColor' />
    </svg>
  )
}
