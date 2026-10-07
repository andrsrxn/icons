import type { Icon } from './types'

export const IconCodeSlash: Icon = ({
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
      data-slot='icon-ui-code-slash'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M5.91 7.46 4.16 8.93C2.46 10.35 1.6 11.06 1.6 12s.85 1.64 2.56 3.07l1.75 1.47'
        stroke='currentColor'
      />
      <path
        d='m18.09 7.46 1.75 1.47c1.7 1.42 2.56 2.13 2.56 3.07s-.85 1.64-2.56 3.07l-1.75 1.47'
        stroke='currentColor'
      />
      <path d='M14.4 3.07 9.6 20.93' stroke='currentColor' />
    </svg>
  )
}
