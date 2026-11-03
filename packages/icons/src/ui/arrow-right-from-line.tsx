import type { Icon } from './types'

export const IconArrowRightFromLine: Icon = ({
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
      data-slot='icon-ui-arrow-right-from-line'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='m15.22 18.76 4.24-4.24c1.34-1.33 2-2 2-2.83s-.66-1.5-2-2.83l-4.24-4.25'
        stroke='currentColor'
      />
      <path d='M6.3 11.68H21' stroke='currentColor' />
      <path d='M2.7 4.33v14.7' stroke='currentColor' />
    </svg>
  )
}
