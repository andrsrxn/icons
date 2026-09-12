import type { Icon } from './types'

export const IconSignalFull: Icon = ({
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
      data-slot='icon-ui-signal-full'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M2.8 18.53a1.9 1.9 0 0 1 .42-2.7l12.7-8.98c2.76-1.96 4.14-2.94 5.23-2.38 1.08.56 1.08 2.26 1.08 5.65v5.18c0 1.88 0 2.83-.59 3.41s-1.53.59-3.41.59H4.33a1.9 1.9 0 0 1-1.53-.77'
        fill='currentColor'
      />
      <path
        d='M15.99 6.6 7.9 12.06c-4.42 3-6.63 4.49-6.2 5.9s3.1 1.42 8.44 1.42h8.08c1.88 0 2.82 0 3.41-.59s.59-1.53.59-3.41V9.92c0-3.32 0-4.97-1.07-5.54-1.06-.56-2.43.37-5.17 2.22'
        stroke='currentColor'
      />
      <path d='M7.1 12.66v6.72' stroke='currentColor' />
      <path d='M12.18 9.68v9.7' stroke='currentColor' />
      <path d='M17.26 5.8v13.58' stroke='currentColor' />
    </svg>
  )
}
