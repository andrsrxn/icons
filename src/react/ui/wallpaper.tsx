import type { Icon } from './types'

export const IconWallpaper: Icon = ({
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
      data-slot='wallpaper'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M4 14.3V5.9a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8.45a.72.72 0 0 1-1.34.34l-3.1-5.72a1 1 0 0 0-1.73-.05l-2.19 3.48a1 1 0 0 1-1.51.2l-.88-.78a1 1 0 0 0-1.45.1l-2.35 2.89A.81.81 0 0 1 4 14.29'
        fill='currentColor'
      />
      <path
        d='M11.98 15.76h4.27c1.88 0 2.82 0 3.41-.58.59-.59.59-1.53.59-3.42V8.5c0-1.89 0-2.83-.59-3.41s-1.53-.59-3.41-.59h-8.5c-1.88 0-2.82 0-3.41.59-.59.58-.59 1.52-.59 3.41v3.26c0 1.89 0 2.83.59 3.42s1.53.58 3.41.58zm0 0v3.74m0 0H8.1m3.88 0h3.97'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='m5 15.56 2.4-3.41c.38-.57.58-.85.83-.95a1 1 0 0 1 .66 0c.24.09.45.37.85.92.48.67.72 1 1 1.09q.38.12.72-.08c.26-.14.42-.52.76-1.27l.9-2.02c.69-1.54 1.03-2.3 1.61-2.32.58 0 .94.76 1.66 2.29l2.7 5.75M8.88 7.8a.44.44 0 1 1-.87 0 .44.44 0 0 1 .87 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
    </svg>
  )
}
