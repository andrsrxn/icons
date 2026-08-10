import type { Icon } from './types'

export const IconCompare: Icon = ({
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
      data-slot='compare'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='3.75' y='6' width='16.51' height='12' rx='2' fill='#000' />
      <path
        d='M11.6 6H7.76c-1.89 0-2.83 0-3.42.59-.58.58-.58 1.52-.58 3.41v4c0 1.89 0 2.83.58 3.41.59.59 1.53.59 3.42.59h3.86'
        stroke='#000'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M14.36 6h1.45m4.44 7.34V10.7m0-3.21c0-.83-.67-1.5-1.5-1.5h-.35m1.85 10.5c0 .83-.67 1.5-1.5 1.5h-.35m-4.04.04h1.45'
        stroke='#000'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M11.6 4v16' stroke='#000' strokeWidth='1.5' strokeLinecap='round' />
    </svg>
  )
}
