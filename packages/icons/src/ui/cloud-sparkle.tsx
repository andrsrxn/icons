import type { Icon } from './types'

export const IconCloudSparkle: Icon = ({
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
      data-slot='icon-ui-cloud-sparkle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m1.52 13.23 3.23 3.43h4.76l2.59-2.6 2.24 2.6h4.83l2.78-2.11v-4.23l-3.48-2.33-1.74.4-.89-2.66-3.9-2.25-3.27 1.4-1.99 2.75-3.73 1.29z'
        fill='currentColor'
      />
      <path d='M6.82 7.58a5.03 5.03 0 0 1 9.23-1.16 5.5 5.5 0 0 1 .6 3.84' stroke='currentColor' />
      <path
        d='M4.77 16.3a4.3 4.3 0 0 1-3.08-4.09 4.23 4.23 0 0 1 7.62-2.54'
        stroke='currentColor'
      />
      <path
        d='M16.8 8.44a3.5 3.5 0 0 1 3.33.11 4.23 4.23 0 0 1 1.55 5.78c-.7 1.2-1.4 1.87-2.33 2.16'
        stroke='currentColor'
      />
      <path d='M12.17 13.06c0 1.72-1.87 3.6-3.61 3.6' stroke='currentColor' />
      <path d='M12.17 13.06c0 1.73 1.87 3.6 3.6 3.6' stroke='currentColor' />
      <path d='M12.17 20.27c0-1.7-1.88-3.6-3.61-3.6' stroke='currentColor' />
      <path d='M12.17 20.27c0-1.72 1.9-3.6 3.6-3.6' stroke='currentColor' />
    </svg>
  )
}
