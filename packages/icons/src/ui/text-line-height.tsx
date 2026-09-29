import type { Icon } from './types'

export const IconTextLineHeight: Icon = ({
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
      data-slot='icon-ui-text-line-height'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m2.72 5.88 1.22-1.22c.66-.67 1-1 1.41-1s.75.33 1.42 1l1.22 1.22'
        stroke='currentColor'
      />
      <path
        d='m2.72 18.14 1.22 1.22c.66.67 1 1 1.41 1s.75-.33 1.42-1l1.22-1.22'
        stroke='currentColor'
      />
      <path d='M5.35 4.03v15.94' stroke='currentColor' />
      <path
        d='m12.37 17.56 2.56-8.18c.8-2.52 1.18-3.77 1.92-3.77s1.13 1.26 1.9 3.77l2.53 8.18'
        stroke='currentColor'
      />
      <path d='M19.66 12.99h-5.67' stroke='currentColor' />
    </svg>
  )
}
