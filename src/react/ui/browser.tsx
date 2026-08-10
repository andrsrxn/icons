import type { Icon } from './types'

export const IconBrowser: Icon = ({
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
      data-slot='browser'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M20.34 8.82H3.66V8.6c0-1.89 0-2.83.59-3.41.58-.59 1.53-.59 3.41-.59h8.68c1.88 0 2.83 0 3.41.59.59.58.59 1.52.59 3.41z'
        fill='currentColor'
      />
      <path
        d='M3.66 8.82v6.59c0 1.89 0 2.83.59 3.41.58.59 1.53.59 3.41.59h8.68c1.88 0 2.83 0 3.41-.59.59-.58.59-1.52.59-3.41V8.82m-16.68 0V8.6c0-1.89 0-2.83.59-3.41.58-.59 1.53-.59 3.41-.59h8.68c1.88 0 2.83 0 3.41.59.59.58.59 1.52.59 3.41v.23m-16.68 0h16.68'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}
