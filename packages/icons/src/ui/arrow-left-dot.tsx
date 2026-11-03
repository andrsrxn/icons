import type { Icon } from './types'

export const IconArrowLeftDot: Icon = ({
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
      data-slot='icon-ui-arrow-left-dot'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M14.26 14.55a1 1 0 1 1-2 0 1 1 0 0 1 2 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='m2.62 7.68-.05.93c-.1 2.06-.15 3.08.48 3.7.62.63 1.65.59 3.7.49l.94-.04'
        stroke='currentColor'
      />
      <path d='M3.1 12.36c1.44-2.17 4.07-5 9.2-5a9.3 9.3 0 0 1 9.3 9.29' stroke='currentColor' />
    </svg>
  )
}
