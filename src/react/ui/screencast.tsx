import type { Icon } from './types'

export const IconScreencast: Icon = ({
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
      data-slot='ui-icon-screencast'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='3.13' y='5' width='18' height='13.77' rx='3' fill='currentColor' />
      <path
        d='M3.75 18.26a.5.5 0 1 1-1.02 0 .5.5 0 0 1 1.02 0'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M3.13 8.43c0-.4 0-.6.02-.77A3 3 0 0 1 5.8 5.02C5.96 5 6.16 5 6.56 5h8.57c2.83 0 4.25 0 5.12.88s.88 2.3.88 5.12v1.77c0 2.83 0 4.24-.88 5.12-.87.88-2.29.88-5.12.88h-1.58M2.7 14.5c1.35.15 2.17.55 3.14 1.52a4.7 4.7 0 0 1 1.52 3.14m-4.77-7.88c2.27.26 3.66.93 5.28 2.55a8 8 0 0 1 2.56 5.29'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
