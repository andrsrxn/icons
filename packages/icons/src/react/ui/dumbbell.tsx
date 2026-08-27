import type { Icon } from './types'

export const IconDumbbell: Icon = ({
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
      data-slot='ui-icon-dumbbell'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='15.16'
        y='4.17'
        width='3.38'
        height='6.61'
        rx='1.69'
        transform='rotate(-45 15.16 4.17)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='3.38'
        height='6.61'
        rx='1.69'
        transform='scale(-1 1)rotate(45 -20.38 2.54)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        x='10.72'
        y='6.08'
        width='4.49'
        height='10.19'
        rx='2'
        transform='rotate(-45 10.72 6.08)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='4.49'
        height='10.19'
        rx='2'
        transform='scale(-1 1)rotate(45 -15.97 -1.98)'
        fill='currentColor'
      />
      <rect
        x='15.16'
        y='4.17'
        width='3.38'
        height='6.61'
        rx='1.69'
        transform='rotate(-45 15.16 4.17)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        width='3.38'
        height='6.61'
        rx='1.69'
        transform='scale(-1 1)rotate(45 -20.38 2.54)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        x='10.72'
        y='6.08'
        width='4.49'
        height='10.19'
        rx='2'
        transform='rotate(-45 10.72 6.08)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        width='4.49'
        height='10.19'
        rx='2'
        transform='scale(-1 1)rotate(45 -15.97 -1.98)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M14.47 9.84c-1.24.37-1.95.8-2.89 1.74a6 6 0 0 0-1.74 2.9m11.3-11.36-1.12 1.12m-16.9 16.9 1.12-1.12'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
