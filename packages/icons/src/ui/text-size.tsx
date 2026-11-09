import type { Icon } from './types'

export const IconTextSize: Icon = ({
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
      data-slot='icon-ui-text-size'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='m1.76 19 2.28-7.75h0c1.12-3.82 1.68-5.72 2.73-5.71 1.04.01 1.56 1.93 2.58 5.78L11.39 19'
        stroke='currentColor'
      />
      <path
        d='m14.71 19 1.78-6.06c.88-2.98 1.32-4.47 2.13-4.46.82.01 1.22 1.51 2.02 4.52l1.6 6'
        stroke='currentColor'
      />
      <path d='M3.57 13.83h6.2' stroke='currentColor' />
      <path d='M16.12 14.96h4.85' stroke='currentColor' />
    </svg>
  )
}
