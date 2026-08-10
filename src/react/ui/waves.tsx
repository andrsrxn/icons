import type { Icon } from './types'

export const IconWaves: Icon = ({
  size = 24,
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
      data-slot='waves'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M3.58 6.93S5.38 5 8.26 5s5.58 1.93 8.42 1.93S20.42 5 20.42 5M3.58 12.96s1.8-1.92 4.68-1.92 5.58 1.92 8.42 1.92 3.74-1.92 3.74-1.92M3.58 19s1.8-1.93 4.68-1.93S13.84 19 16.68 19s3.74-1.93 3.74-1.93'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
