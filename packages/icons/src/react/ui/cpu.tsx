import type { Icon } from './types'

export const IconCpu: Icon = ({
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
      data-slot='ui-icon-cpu'
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
        d='M19.59 10.41c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88H10.4c-2.83 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v3.18c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h3.18c2.83 0 4.24 0 5.12-.88s.88-2.3.88-5.12zM9 11.81a3 3 0 0 1 6 0V12a3 3 0 1 1-6 0z'
        fill='currentColor'
      />
      <rect
        x='4.41'
        y='4.41'
        width='15.18'
        height='15.18'
        rx='3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        x='8.61'
        y='8.61'
        width='6.79'
        height='6.79'
        rx='2'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M9.64 2.49V4.4m0 15.19v1.92m4.72-19.02V4.4m0 15.19v1.92M2.49 14.36H4.4m15.19 0h1.92M2.49 9.64H4.4m15.19 0h1.92'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
