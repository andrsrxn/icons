import type { Icon } from './types'

export const IconShuffle: Icon = ({
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
      data-slot='ui-icon-shuffle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M2.77 7.67h3.2c.97 0 1.46 0 1.88.2.42.22.71.6 1.3 1.37l4.8 6.3c.6.77.9 1.16 1.31 1.37.42.2.9.2 1.88.2h3.04'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M2.77 17.11h3.18c.98 0 1.47 0 1.9-.2.42-.22.71-.61 1.3-1.4l4.67-6.24c.59-.78.88-1.18 1.3-1.39s.92-.2 1.9-.2h3.16'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M19.5 4.94c1.24 1.24 1.86 1.86 1.9 2.62v.22c-.04.76-.66 1.38-1.9 2.62m0 3.98c1.24 1.24 1.86 1.86 1.9 2.62v.22c-.04.76-.66 1.38-1.9 2.63'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
