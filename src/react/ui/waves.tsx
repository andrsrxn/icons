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
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
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
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M3.583 6.925S5.388 5 8.259 5c2.872 0 5.585 1.925 8.417 1.925S20.417 5 20.417 5M3.583 12.963s1.805-1.925 4.676-1.925c2.872 0 5.585 1.925 8.417 1.925s3.741-1.925 3.741-1.925M3.583 19s1.805-1.925 4.676-1.925c2.872 0 5.585 1.925 8.417 1.925s3.741-1.925 3.741-1.925'
      />
    </svg>
  )
}
