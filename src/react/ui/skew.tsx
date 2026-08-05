import type { Icon } from './types'

export const IconSkew: Icon = ({
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
      data-slot='skew'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='M6.103 7.792c.4-1.394.6-2.091 1.135-2.494.534-.403 1.26-.403 2.71-.403h5.886c2.435 0 3.652 0 4.252.797.6.797.265 1.967-.407 4.307l-1.782 6.21c-.4 1.393-.6 2.09-1.135 2.493-.534.403-1.26.403-2.71.403H8.166c-2.435 0-3.652 0-4.252-.797-.6-.796-.265-1.967.407-4.307l1.782-6.21Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M6.103 7.792c.4-1.394.6-2.091 1.135-2.494.534-.403 1.26-.403 2.71-.403h5.886c2.435 0 3.652 0 4.252.797.6.797.265 1.967-.407 4.307l-1.782 6.21c-.4 1.393-.6 2.09-1.135 2.493-.534.403-1.26.403-2.71.403H8.166c-2.435 0-3.652 0-4.252-.797-.6-.796-.265-1.967.407-4.307l1.782-6.21Z'
      />
    </svg>
  )
}
