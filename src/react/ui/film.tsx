import type { Icon } from './types'

export const IconFilm: Icon = ({
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
      data-slot='film'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M3.76 7.76c0-1.89 0-2.83.16-3.42s.41-.58.93-.58h2.31c.51 0 .77 0 .93.58.16.59.16 1.53.16 3.42v8.48c0 1.89 0 2.83-.16 3.42s-.42.58-.93.58H4.85c-.52 0-.77 0-.93-.58-.16-.59-.16-1.53-.16-3.42zm12 0c0-1.89 0-2.83.15-3.42s.4-.58.88-.58h2.18c.49 0 .73 0 .88.58.15.59.15 1.53.15 3.42v8.48c0 1.89 0 2.83-.15 3.42s-.4.58-.88.58H16.8c-.49 0-.73 0-.88-.58-.15-.59-.15-1.53-.15-3.42z'
        fill='currentColor'
        opacity='.2'
      />
      <path
        d='M8.25 20.24v-16M15.75 20V4M20 12H4m4 4.24H4m16 0h-4M8 7.76H4m16 0h-4M7.76 20.24h8.48c1.89 0 2.83 0 3.42-.58.58-.59.58-1.53.58-3.42V7.76c0-1.89 0-2.83-.58-3.42-.59-.58-1.53-.58-3.42-.58H7.76c-1.89 0-2.83 0-3.42.58-.58.59-.58 1.53-.58 3.42v8.48c0 1.89 0 2.83.58 3.42.59.58 1.53.58 3.42.58Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
