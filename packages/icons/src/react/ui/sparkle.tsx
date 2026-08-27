import type { Icon } from './types'

export const IconSparkle: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-sparkle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M14.75 9 12 4.38 9.39 8.65 4.4 12l4.98 2.76 2.61 5.5 2.75-5.5 5.25-3z'
        fill='currentColor'
      />
      <path
        d='M2.38 12C7.02 12 12 6.99 12 2.38M21.62 12C17 12 12 7 12 2.38M2.38 12C7 12 12 17.09 12 21.62M21.62 12C17.06 12 12 17.02 12 21.62'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
