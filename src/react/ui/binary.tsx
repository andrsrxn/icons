import type { Icon } from './types'

export const IconBinary: Icon = ({
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
      data-slot='ui-icon-binary'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M2.67 5.37a2.23 2.23 0 1 1 4.47 0v3.09a2.23 2.23 0 1 1-4.47 0zm14.23 0a2.23 2.23 0 1 1 4.48 0v3.09a2.23 2.23 0 1 1-4.47 0zM9.84 15.68a2.23 2.23 0 1 1 4.47 0v3.09a2.23 2.23 0 0 1-4.47 0z'
        fill='currentColor'
      />
      <rect
        x='2.78'
        y='3.33'
        width='4.26'
        height='7.36'
        rx='2'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        x='17.01'
        y='3.33'
        width='4.26'
        height='7.36'
        rx='2'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        x='9.95'
        y='13.64'
        width='4.26'
        height='7.36'
        rx='2'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m10 5.6 1.52-1.35c.71-.65 1.07-.97 1.37-.84s.3.61.3 1.58v5.57M2.93 15.92l1.52-1.37c.72-.64 1.08-.96 1.37-.83s.3.61.3 1.58v5.57m10.95-4.95 1.51-1.37c.72-.64 1.08-.96 1.38-.83s.3.61.3 1.58v5.57'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
