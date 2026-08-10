import type { Icon } from './types'

export const IconMouse: Icon = ({
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
      data-slot='mouse'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path opacity='.2' d='M6.77 11.56h10.46v3.76a5.23 5.23 0 1 1-10.46 0z' fill='currentColor' />
      <path
        d='M11.96 6.15h.02c.69 0 1.25.56 1.25 1.25v.76c0 .69-.56 1.25-1.25 1.25h-.02m0-3.26c-.68 0-1.23.56-1.23 1.25v.76c0 .68.55 1.24 1.23 1.25m0-3.26V4m0 5.41v2.15m0 0h-5.1m5.1 0h5.27m-5.25 9.02a5.23 5.23 0 0 1-5.23-5.23V8.7a5.23 5.23 0 1 1 10.46 0v6.65a5.23 5.23 0 0 1-5.23 5.23Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}
