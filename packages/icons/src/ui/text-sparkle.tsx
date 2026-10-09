import type { Icon } from './types'

export const IconTextSparkle: Icon = ({
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
      data-slot='icon-ui-text-sparkle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m18.23 13.76-1-1.86-1 1.86-1.9 1.06 1.9.98 1 2.18 1-2.18 2.07-1.08z'
        fill='currentColor'
      />
      <path d='M9.8 3.75v16.5' stroke='currentColor' />
      <path d='M12.54 20.25H7.07' stroke='currentColor' />
      <path
        d='M16.48 5.67c0-1.06-.86-1.92-1.92-1.92H5.05c-1.06 0-1.92.86-1.92 1.92'
        stroke='currentColor'
      />
      <path d='M13.88 15c1.69 0 3.5-1.83 3.5-3.5' stroke='currentColor' />
      <path d='M20.87 15c-1.68 0-3.5-1.82-3.5-3.5' stroke='currentColor' />
      <path d='M13.88 15c1.67 0 3.5 1.85 3.5 3.5' stroke='currentColor' />
      <path d='M20.87 15c-1.66 0-3.5 1.82-3.5 3.5' stroke='currentColor' />
    </svg>
  )
}
