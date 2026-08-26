import type { Icon } from './types'

export const IconFolder: Icon = ({
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
      data-slot='ui-icon-folder'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M21.3 13.45c0 2.83 0 4.24-.87 5.12-.88.88-2.3.88-5.13.88H8.7c-2.83 0-4.25 0-5.13-.88s-.87-2.29-.87-5.12V7.27a3 3 0 0 1 2.71-2.7c.14-.02.31-.02.65-.02h.75c1.1 0 1.64 0 2.14.18.5.19.92.54 1.75 1.25l.05.04c.83.7 1.24 1.06 1.75 1.25.5.18 1.04.18 2.14.18h.66c2.83 0 4.25 0 5.13.88s.87 2.3.87 5.12'
        fill='currentColor'
      />
      <path
        d='M21.3 13.44c0 2.83 0 4.25-.87 5.13-.88.88-2.3.88-5.13.88H8.7c-2.83 0-4.25 0-5.13-.88s-.87-2.29-.87-5.12V7a2.33 2.33 0 0 1 2.32-2.32h2c.83 0 1.24 0 1.63.1q.3.09.6.24c.35.18.66.47 1.27 1.03.6.57.91.85 1.27 1.04a3 3 0 0 0 .6.23c.38.11.8.11 1.63.11h1.28c2.83 0 4.25 0 5.13.88s.87 2.3.87 5.14'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
