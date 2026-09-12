import type { Icon } from './types'

export const IconCode: Icon = ({
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
      data-slot='icon-ui-code'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m16.03 5.88 3.65 3.05c1.7 1.42 2.56 2.13 2.56 3.06s-.85 1.65-2.55 3.08l-3.66 3.05'
        stroke='currentColor'
      />
      <path
        d='M7.97 5.88 4.32 8.93c-1.7 1.42-2.56 2.13-2.56 3.06s.85 1.65 2.55 3.08l3.66 3.05'
        stroke='currentColor'
      />
    </svg>
  )
}
