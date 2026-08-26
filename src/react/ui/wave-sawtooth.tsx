import type { Icon } from './types'

export const IconWaveSawtooth: Icon = ({
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
      data-slot='ui-icon-wave-sawtooth'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='m3 7.88 2.8-1.83c2.73-1.79 4.1-2.68 5.14-2.11C12 4.5 12 6.14 12 9.4V14c0 3.49 0 5.23 1.1 5.78 1.11.56 2.5-.49 5.3-2.57l2.6-1.95'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
