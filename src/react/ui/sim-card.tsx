import type { Icon } from './types'

export const IconSimCard: Icon = ({
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
      data-slot='ui-icon-sim-card'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17.86 6.88c.54.58.82.86.96 1.22s.14.75.14 1.54v7.38c0 1.88 0 2.83-.58 3.41-.59.59-1.53.59-3.42.59h-5.8c-1.88 0-2.83 0-3.41-.59-.59-.58-.59-1.53-.59-3.41V7c0-1.89 0-2.83.59-3.41C6.33 3 7.28 3 9.16 3h3.07c.78 0 1.17 0 1.52.14s.64.4 1.2.93l2 1.86zM8.1 14.12c0 1.84 0 2.76.56 3.34l.05.05c.58.56 1.5.56 3.34.56 1.85 0 2.77 0 3.35-.56l.05-.05c.56-.58.56-1.5.56-3.34s0-2.77-.56-3.35l-.05-.05c-.58-.56-1.5-.56-3.35-.56-1.84 0-2.76 0-3.34.56l-.05.05c-.56.58-.56 1.5-.56 3.35'
        fill='currentColor'
      />
      <path
        d='M10.97 21.24c-2.83 0-4.25 0-5.13-.88s-.87-2.3-.87-5.12V8.85c0-2.83 0-4.24.87-5.12.88-.88 2.3-.88 5.13-.88h.36c1.26 0 1.9 0 2.46.24.56.25 1 .7 1.87 1.62l.8.84.86.87c.85.86 1.27 1.3 1.5 1.84.21.55.21 1.15.21 2.36v4.62c0 2.82 0 4.24-.87 5.12-.88.88-2.3.88-5.13.88z'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        width='7.91'
        height='7.91'
        rx='2'
        transform='matrix(0 -1 -1 0 16.02 18.07)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M10.67 17.52v-3.13m2.67 3.13v-3.13'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
