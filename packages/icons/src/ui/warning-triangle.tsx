import type { Icon } from './types'

export const IconWarningTriangle: Icon = ({
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
      data-slot='icon-ui-warning-triangle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m8.47 5.56-5.21 9.48C1.8 17.68 1.08 19 1.66 19.98s2.09.99 5.1.99h10.46c3.02 0 4.53 0 5.11-.99.58-.98-.15-2.3-1.61-4.95l-5.24-9.48c-1.56-2.8-2.33-4.21-3.51-4.21S10 2.74 8.47 5.56'
        fill='currentColor'
      />
      <path
        d='m4.41 12.5 2.31-4.2C9.04 4.1 10.2 2 11.97 1.99s2.93 2.1 5.26 6.31l2.32 4.2c2.2 3.97 3.29 5.95 2.42 7.43s-3.14 1.47-7.67 1.47H9.67c-4.52 0-6.78 0-7.65-1.47s.22-3.45 2.4-7.42'
        stroke='currentColor'
      />
      <path d='M12 8.12v4.83' stroke='currentColor' />
      <path
        d='M12.59 17.07a.59.59 0 1 1-1.18 0 .59.59 0 0 1 1.18 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
